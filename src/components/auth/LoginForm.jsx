import React from "react";
import { useForm } from "react-hook-form";
import InputField from "./common/Field"; // Assuming common/Field.jsx is the InputField
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      emailOrUsername: "sabbir@gmail.com",
      password: "12345678",
      rememberMe: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Login form data:", data);
    const user = { ...data };
    setAuth(user);

    alert(`Attempting login for ${data.emailOrUsername}!`);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <InputField
        name="emailOrUsername"
        type="text"
        placeholder="Email or Username"
        icon="user"
        register={register}
        error={errors.emailOrUsername}
        rules={{ required: "Email or Username is required" }}
      />

      <InputField
        name="password"
        type="password"
        placeholder="Password"
        icon="lock"
        register={register}
        error={errors.password}
        rules={{ required: "Password is required" }}
      />

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-text-secondary cursor-pointer">
          <input
            type="checkbox"
            {...register("rememberMe")}
            className="h-4 w-4 rounded bg-lighter-dark border-border-dark text-brand focus:ring-brand"
          />
          Remember me
        </label>
        <a href="#" className="font-medium text-brand hover:underline">
          Forgot Password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full bg-brand text-deep-dark font-bold py-3 rounded-lg hover:opacity-90 active:scale-95 transition-all duration-300"
      >
        Sign In
      </button>

      <div className="text-center text-sm text-text-secondary">
        <p>
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-brand hover:underline"
          >
            Register Now
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
