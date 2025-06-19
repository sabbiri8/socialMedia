// src/App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";

// Import your page components

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import WelcomePage from "./pages/WelcomePage"; // Your custom welcome/dashboard page
import NotFoundPage from "./pages/NotFoundPage";

// Import your custom route components
import PrivateRoute from "./routes/PrivateRoute"; // Adjust path if necessary
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Routes>
      {/* Public Routes - Accessible without login, and typically do not show the main Navbar */}
      <Route element={<LoginPage />} path="/login" />
      <Route element={<RegisterPage />} path="/register" />

      {/* Protected Routes - These routes require authentication.
          The PrivateRoute will redirect to /login if the user is not authenticated.
      */}
      <Route element={<PrivateRoute />}>
        {/*
          HomePage acts as a layout component for all its nested children.
          It renders the Navbar and an <Outlet /> where the nested components will appear.
          This ensures the Navbar is consistent across all these pages.
        */}
        <Route element={<HomePage />}>
          {/* Default content for the authenticated home route (e.g., a dashboard or welcome screen) */}
          <Route path="/" element={<WelcomePage />} />

          {/* User Profile Page */}
          <Route path="/me" element={<ProfilePage />} />

          {/* Add any other authenticated routes that should display the Navbar here */}
          {/* <Route path="/settings" element={<SettingsPage />} /> */}
          {/* <Route path="/products" element={<ProductsPage />} /> */}
        </Route>
      </Route>

      {/* Catch-all Route - Renders NotFoundPage for any undefined paths */}
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
}
