// src/pages/HomePage.jsx
import React from "react";
import Navbar from "../components/main-page/Navbar"; // Adjust path if Navbar location changed
import useAuth from "../hooks/useAuth"; // Adjust path if useAuth location changed
import { Outlet } from "react-router-dom";

const HomePage = () => {
  const { auth } = useAuth();
  console.log("Auth state in HomePage:", auth); // Keep or remove as needed

  return (
    <div className="bg-deep-dark min-h-screen text-text-primary">
      <Navbar />
      {/* Add padding-top to account for the fixed Navbar height, adjust 'pt-20' if your Navbar height differs */}
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
