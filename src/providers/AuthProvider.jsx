import React, { useState } from "react";
import { AuthContext } from "../context/Index";

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  return (
    <div>
      <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}
