import React from "react";
import useAuth from "../hooks/useAuth";
import { Outlet, useNavigate } from "react-router-dom";

export default function PrivateRoute() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      {auth.user ? (
        <div>
          <Outlet />
        </div>
      ) : (
        navigate("/login")
      )}
    </div>
  );
}
