// src/pages/LoginPage.jsx
import React from "react";
import LoginForm from "../components/auth/LoginForm"; // Adjust the path if necessary"

import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-deep-dark flex items-center justify-center p-4">
      <div className="bg-card-dark rounded-lg p-8 sm:p-10 shadow-lg max-w-md w-full border border-border-dark animate-fade-in">
        <h1 className="text-4xl font-bold text-text-primary text-center mb-8">
          Sign In
        </h1>
        <LoginForm />
        {/* You can add social login options or other content here if needed */}
      </div>
    </div>
  );
};

export default LoginPage;
