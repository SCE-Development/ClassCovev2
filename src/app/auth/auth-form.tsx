'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa, ViewType } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/supabase'

export default function AuthForm(props: any) {
  const supabase = createClientComponentClient<Database>()

  return (
    <Auth
      supabaseClient={supabase}
      view={props.type}
      appearance={{ theme: ThemeSupa }}
      theme='dark'
      showLinks={false}
      providers={['github']}
      redirectTo='http://localhost:3000/courses'
    />
  )
}