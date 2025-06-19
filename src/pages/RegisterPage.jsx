// src/pages/RegisterPage.jsx
import React from "react";
// import RegisterForm from '../components/RegisterForm'; // Uncomment and adjust path when you have it
import { Link } from "react-router-dom";
import RegisterForm from "../components/auth/common/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-deep-dark flex items-center justify-center p-4">
      <div className="bg-card-dark rounded-lg p-8 sm:p-10 shadow-lg max-w-md w-full border border-border-dark animate-fade-in">
        <h1 className="text-4xl font-bold text-text-primary text-center mb-8">
          Register Account
        </h1>
        {/* Placeholder for RegisterForm. Replace this with your actual RegisterForm component */}
        <p className="text-center text-text-secondary">
          <RegisterForm />
        </p>
        <div className="text-center text-sm text-text-secondary mt-6">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-brand hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
