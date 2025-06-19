// src/pages/WelcomePage.jsx
import React from "react";

const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-card-dark rounded-lg m-4 min-h-[calc(100vh-160px)]">
      <h2 className="text-4xl font-bold text-brand mb-4 animate-fade-in-up">
        Welcome to MyGrid!
      </h2>
      <p className="text-lg text-text-secondary max-w-2xl mb-6 animate-fade-in-up delay-200">
        This is your main content area. You can customize this page to display
        your app's core features, a personalized feed, or anything else you'd
        like your users to see upon logging in.
      </p>
      {/* Make sure /logo.svg exists in your public folder */}
      <img
        src="/logo.svg"
        alt="MyGrid Logo"
        className="h-32 w-32 opacity-30 animate-pulse-subtle"
      />
    </div>
  );
};

export default WelcomePage;
