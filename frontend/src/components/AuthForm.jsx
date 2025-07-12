import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { loginUser, registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function AuthForm({ type }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: type === "login" ? loginUser : registerUser,
    onSuccess: (data) => {
      toast.success(
        `${type === "login" ? "Logged in" : "Registered"} successfully`
      );
      navigate("/dashboard");
    },
    onError: (err) => {
      toast.error(err.response?.data?.error || "Something went wrong");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload =
      type === "login"
        ? {
            email: form.email,
            password: form.password,
          }
        : form;

    mutation.mutate(payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
    >
      <h2 className="text-2xl font-bold mb-4">
        {type === "login" ? "Login" : "Register"}
      </h2>

      {type === "register" && (
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full mb-3 px-4 py-2 border border-maroon rounded"
        />
      )}

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
        className="w-full mb-3 px-4 py-2 border border-maroon rounded"
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
        className="w-full mb-4 px-4 py-2 border border-maroon rounded"
      />

      <button
        type="submit"
        disabled={mutation.isLoading}
        className="bg-maroon text-white px-4 py-2 w-full rounded hover:bg-primary transition"
      >
        {mutation.isLoading
          ? "Processing..."
          : type === "login"
          ? "Login"
          : "Register"}
      </button>
    </form>
  );
}

export default AuthForm;
