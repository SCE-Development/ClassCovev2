'use client'
import AuthForm from "@/app/auth/auth-form"
import { Database } from "@/types/supabase"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"

export default function Home() {
  const supabase = createClientComponentClient<Database>()
  const router = useRouter()

  supabase.auth.onAuthStateChange((event) => {
    if (event == "SIGNED_IN") {
      router.push('/courses')
    }
  })
  

  return (
    <div className="row">
      <div className="col-6">
        <h1 className="header">Home</h1>
        <p>
          Welcome to the home page
        </p>
      </div>
      <div className="col-6 auth-widget">
        <AuthForm type="sign_in"/>

      </div>
    </div>
  )
}