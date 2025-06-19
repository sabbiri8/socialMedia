import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-zinc-400 group-hover:text-brand transition-colors duration-200"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
  </svg>
);

const UserAvatarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 rounded-full border-2 border-brand text-brand-light bg-zinc-800 p-1 group-hover:border-text-primary transition-colors duration-200"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 text-zinc-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 text-zinc-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setAuth } = useAuth();

  const handleLogout = () => {
    alert("You have been logged out.");
    navigate("/login");
    setIsMenuOpen(false);
    setAuth({});
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed w-full z-20 top-0 bg-zinc-900/70 backdrop-blur-xl border-b border-zinc-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-4 sm:px-6">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-9 w-9" />
          <span className="text-2xl font-bold text-white tracking-wide">
            MyGrid
          </span>
        </Link>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-1 rounded-md hover:bg-zinc-700/50 transition-colors"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className="text-zinc-400 hover:text-brand text-lg font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>

          <button className="group relative p-2 rounded-full hover:bg-zinc-700/50 transition-all">
            <BellIcon />
            <span className="absolute top-0 right-0 text-xs font-bold text-zinc-900 bg-brand rounded-full px-1.5 py-0.5 transform translate-x-1/2 -translate-y-1/2">
              3
            </span>
          </button>

          <Link
            to="/me"
            className="flex items-center gap-2 group p-1 rounded-full hover:bg-zinc-700/50 transition"
          >
            <UserAvatarIcon />
            <span className="text-white font-medium group-hover:text-brand transition-colors">
              John Doe
            </span>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-brand text-black font-semibold py-2 px-4 rounded-full hover:opacity-90 transition-transform active:scale-95"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-[max-height] duration-300 overflow-hidden bg-zinc-900/90 backdrop-blur-md px-4 border-t border-zinc-800 ${
          isMenuOpen ? "max-h-screen py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col space-y-4">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-zinc-300 hover:text-brand font-medium"
          >
            Home
          </Link>

          <button
            onClick={closeMenu}
            className="flex items-center gap-2 text-zinc-300 hover:text-brand"
          >
            <BellIcon /> Notifications{" "}
            <span className="ml-auto bg-brand text-black rounded-full px-2 text-xs">
              3
            </span>
          </button>

          <Link
            to="/me"
            onClick={closeMenu}
            className="flex items-center gap-2 text-zinc-300 hover:text-brand"
          >
            <UserAvatarIcon /> Profile
          </Link>

          <button
            onClick={handleLogout}
            className="text-left bg-brand text-black px-4 py-2 rounded-md font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
