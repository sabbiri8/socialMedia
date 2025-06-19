// src/pages/NotFoundPage.jsx
import React from "react";
import { Link } from "react-router-dom";

// Optional: A simple SVG for visual interest
const BrokenGridIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-24 w-24 text-brand mb-8 animate-bounce-slow"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const NotFoundPage = () => {
  return (
    <div className="bg-deep-dark min-h-screen text-text-primary flex flex-col items-center justify-center p-4 text-center">
      <BrokenGridIcon />

      <h1 className="text-9xl sm:text-[10rem] md:text-[12rem] lg:text-[14rem] font-extrabold text-brand tracking-wider leading-none mb-4 animate-fade-in-up">
        404
      </h1>
      <p className="text-2xl sm:text-3xl font-semibold text-text-primary mb-6 animate-fade-in-up delay-200">
        Page Not Found
      </p>
      <p className="text-lg sm:text-xl text-text-secondary mb-10 max-w-lg animate-fade-in-up delay-400">
        Oops! It looks like the page you're trying to reach doesn't exist. The
        digital grid might be experiencing some turbulence.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-600">
        <Link
          to="/"
          className="bg-brand text-deep-dark font-bold py-3 px-8 rounded-full hover:opacity-90 active:scale-95 transition-all duration-300 text-lg shadow-lg hover:shadow-brand-glow"
        >
          Go Home
        </Link>
        <Link
          to="/contact" // Adjust this path if you don't have a contact page
          className="bg-card-dark text-text-secondary border border-border-dark font-semibold py-3 px-8 rounded-full hover:border-brand hover:text-brand active:scale-95 transition-all duration-300 text-lg shadow-md"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
