// import React from "react";
// import { useNavigate } from "react-router-dom";
// // CORRECTED IMPORT: Remove the curly braces for default imports
// import useAuth from "../../../hooks/useAuth";

// /**
//  * LogoutForm component provides a button to log the user out.
//  *
//  * @param {object} props
//  * @param {function} [props.onLogoutSuccess] - Optional callback to execute after successful logout (e.g., to close a menu).
//  */
// export default function LogoutForm({ onLogoutSuccess }) {
//   const navigate = useNavigate();
//   const { setAuth } = useAuth();

//   const handleLogout = async () => {
//     // --- STEP 1: Clear authentication state ---
//     setAuth({});

//     // --- STEP 2: Clear persistent tokens/data from storage ---
//     localStorage.removeItem("authToken");
//     sessionStorage.removeItem("authToken");
//     localStorage.removeItem("user");
//     // Add any other storage items related to auth

//     // --- STEP 3: Provide user feedback (replace alert with actual UI notification) ---
//     console.log("You have been logged out successfully.");
//     // Example using a hypothetical toast notification library:
//     // toast.success("You have been logged out!");

//     // --- STEP 4: Redirect to login page ---
//     navigate("/login");

//     // --- STEP 5: Execute optional callback from parent (e.g., to close menu) ---
//     if (onLogoutSuccess) {
//       onLogoutSuccess();
//     }
//   };

//   return (
//     <div>
//       <button
//         onClick={handleLogout}
//         className="bg-brand text-deep-dark font-semibold py-2 px-4 rounded-full hover:opacity-90 transition-transform active:scale-95"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }
