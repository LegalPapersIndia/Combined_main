// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TopContactBar from "./TopContactBar";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <TopContactBar />

      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" onClick={closeMenu}>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl shadow-md text-white group-hover:scale-110 transition-transform">
                📋
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                  IncorpFast
                </h1>
                <p className="text-[10px] text-slate-500 -mt-1">
                  MCA Expert • 5 Days Incorporation
                </p>
              </div>
            </div>
          </Link>

          {/* Hamburger Menu Button - Mobile */}
          <button
            className="md:hidden text-slate-600 hover:text-slate-900 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            
            <Link
              to="/"
              className={`relative transition ${
                isActive("/") ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Home
            </Link>

            <a href="#stats" className="text-slate-600 hover:text-slate-900 transition">
              Stats
            </a>

            <a href="#faq" className="text-slate-600 hover:text-slate-900 transition">
              FAQ
            </a>

            <Link
              to="/contact"
              className={`transition ${
                isActive("/contact") ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Contact
            </Link>

            {/* ==================== NEW FOOD BUTTON ==================== */}
            <Link
              to="/food"
              className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                location.pathname.startsWith("/food")
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700"
              }`}
            >
              🍽️ Food Registration
            </Link>
            {/* =========================================================== */}

            {/* ==================== NEW GST BUTTON ==================== */}
            <Link
              to="/gst"
              className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                location.pathname.startsWith("/gst")
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700"
              }`}
            >
              📊 GST Registration
            </Link>
            {/* =========================================================== */}

          </div>

          {/* CTA Button - Company Registration */}
          <Link
            to="/company-incorporation/private-limited"
            className="hidden md:block px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Start Company Registration
          </Link>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 md:hidden bg-white border-b border-slate-200 shadow-lg z-40">
              <div className="flex flex-col py-4 gap-2">
                
                <Link
                  to="/"
                  onClick={closeMenu}
                  className={`px-6 py-3 transition ${
                    isActive("/") ? "text-blue-600 font-semibold bg-blue-50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  Home
                </Link>

                <a 
                  href="#stats" 
                  onClick={closeMenu}
                  className="px-6 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition"
                >
                  Stats
                </a>

                <a 
                  href="#faq" 
                  onClick={closeMenu}
                  className="px-6 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition"
                >
                  FAQ
                </a>

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className={`px-6 py-3 transition ${
                    isActive("/contact") ? "text-blue-600 font-semibold bg-blue-50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  Contact
                </Link>

                {/* Food Registration Button - Mobile */}
                <Link
                  to="/food"
                  onClick={closeMenu}
                  className={`mx-6 my-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    location.pathname.startsWith("/food")
                      ? "bg-green-600 text-white shadow-md"
                      : "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700"
                  }`}
                >
                  🍽️ Food Registration
                </Link>

                {/* GST Registration Button - Mobile */}
                <Link
                  to="/gst"
                  onClick={closeMenu}
                  className={`mx-6 my-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    location.pathname.startsWith("/gst")
                      ? "bg-orange-600 text-white shadow-md"
                      : "bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700"
                  }`}
                >
                  📊 GST Registration
                </Link>

                {/* Company Registration Button - Mobile */}
                <Link
                  to="/company-incorporation/private-limited"
                  onClick={closeMenu}
                  className="mx-6 mb-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-300 text-center"
                >
                  📋 Start Company Registration
                </Link>

              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;