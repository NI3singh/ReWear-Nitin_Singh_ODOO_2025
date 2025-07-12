import AuthForm from "../components/AuthForm";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream text-maroon bg-black">
      <AuthForm type="register" />
    </div>
  );
}

export default Register;
