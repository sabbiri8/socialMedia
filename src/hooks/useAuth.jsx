import React, { useDebugValue } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/Index";

export default function useAuth() {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, (auth) =>
    auth?.user ? "Authenticated" : "Not Authenticated"
  );
  return useContext(AuthContext);
}
