import AuthForm from "./AuthForm";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream text-maroon">
      <AuthForm type="login" />
    </div>
  );
}

export default Login;
