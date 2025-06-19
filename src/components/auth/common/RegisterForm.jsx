import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../common/Field";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const Navigate = useNavigate(); // Get the navigate function from the hook
  const {
    register, // Function to register inputs
    handleSubmit, // Function to handle form submission
    formState: { errors }, // Object containing form errors
    watch, // To watch value of password for confirm password validation
  } = useForm({
    defaultValues: {
      // Set default values for controlled components
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  const onSubmit = (data) => {
    // This function will only be called if validation passes
    console.log("Registration form data:", data);
    // Simulate API call
    if (data.password === data.confirmPassword) {
      alert("Registration successful! (Simulated)");
      // TODO: Call your actual registration API here
    } else {
      alert("Passwords do not match!");
      // React Hook Form would ideally handle this error for you if validation was set up
    }

    Navigate("/login"); // Redirect to login page after successful registration
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {/* Full Name Field */}
      <InputField
        name="fullName"
        type="text"
        placeholder="Full Name"
        icon="user"
        register={register}
        error={errors.fullName}
        rules={{ required: "Full Name is required" }}
      />

      {/* Email Address Field */}
      <InputField
        name="email"
        type="email"
        placeholder="Email Address"
        icon="mail"
        register={register}
        error={errors.email}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address",
          },
        }}
      />

      {/* Password Field */}
      <InputField
        name="password"
        type="password"
        placeholder="Password"
        icon="lock"
        register={register}
        error={errors.password}
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        }}
      />

      {/* Confirm Password Field */}
      <InputField
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        icon="lock"
        register={register}
        error={errors.confirmPassword}
        rules={{
          required: "Confirm Password is required",
          // Custom validation to match password
          validate: (value) => value === password || "Passwords do not match",
        }}
      />

      <button
        type="submit"
        className="w-full bg-brand text-deep-dark font-bold py-3 rounded-lg hover:opacity-90 active:scale-95 transition-all duration-300"
      >
        Sign Up
      </button>

      <div className="text-center text-sm text-text-secondary">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-brand hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
