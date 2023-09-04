import AuthForm from "@/app/auth/auth-form"

export default function Home() {
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