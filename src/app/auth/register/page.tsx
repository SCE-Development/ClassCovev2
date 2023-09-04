'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import AuthForm from "@/app/auth/auth-form"
import { Database } from "@/types/supabase"

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const supabase = createClientComponentClient<Database>()
  const router = useRouter()

  async function authenticateUserOnSignUp(event: any) {
    event.preventDefault()
    const { data, error } = await supabase
      .auth
      .signUp({
        email,
        password,
      })
    addUserToDB()
    supabase.auth.onAuthStateChange((event) => {
      if (event == "SIGNED_IN") {
        router.push('/courses')
      }
    })
  }
  async function addUserToDB() {

  }

  return(
    <form onSubmit={authenticateUserOnSignUp} className="register-form">
     <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      required
     />

     <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
      required
     />
     <button type="submit">
      Signup
     </button>
    </form>     
  )
}