import AuthForm from "./auth-form";

export default function Home() {
  return (
    <div className="row">
      <div className="col-6">
        <h1 className="header">Supabase Auth + Storage</h1>
        <p>
          Testing out auth and storage
        </p>
      </div>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </div>
  )
}