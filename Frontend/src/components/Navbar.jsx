// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TopContactBar from "./TopContactBar";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => 
    location.pathname === path || location.pathname.startsWith(path);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <TopContactBar />

      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-5 flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            to="/" 
            onClick={closeMenu} 
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg text-white group-hover:rotate-12 transition-transform duration-300">
              📋
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tighter">
                IncorpFast
              </h1>
              <p className="text-[9px] sm:text-[10px] text-slate-500 -mt-1 font-medium">
                MCA Expert • 5 Days Incorporation
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            
            {/* Simple Links */}
            <Link
              to="/"
              className={`px-5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                isActive("/") 
                  ? "text-blue-600 font-semibold bg-blue-50" 
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              Home
            </Link>

            <Link
              to="/contact"
              className={`px-5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                isActive("/contact") 
                  ? "text-blue-600 font-semibold bg-blue-50" 
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              Contact
            </Link>

            {/* Service Buttons */}
            <Link
              to="/fssai-registration"
              className={`px-5 py-2.5 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                isActive("/fssai-registration")
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 hover:shadow-md"
              }`}
            >
              🍽️ FSSAI
            </Link>

            <Link
              to="/gst-registration"
              className={`px-5 py-2.5 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                isActive("/gst-registration")
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:from-orange-700 hover:to-amber-700 hover:shadow-md"
              }`}
            >
              📊 GST
            </Link>

            <Link
              to="/iec"
              className={`px-5 py-2.5 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                isActive("/iec")
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 hover:shadow-md"
              }`}
            >
              🌐 IEC
            </Link>

            {/* Main CTA Button - Desktop */}
            <Link
              to="/company-incorporation/private-limited"
              className="ml-2 px-6 lg:px-8 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 text-sm lg:text-base flex items-center justify-center whitespace-nowrap"
            >
              Start Company Registration
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-xl">
            <div className="flex flex-col py-6 px-5 sm:px-6 gap-2">
              
              <Link
                to="/"
                onClick={closeMenu}
                className={`px-6 py-4 rounded-2xl text-base font-medium transition-all ${
                  isActive("/") 
                    ? "bg-blue-50 text-blue-600 font-semibold" 
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                Home
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className={`px-6 py-4 rounded-2xl text-base font-medium transition-all ${
                  isActive("/contact") 
                    ? "bg-blue-50 text-blue-600 font-semibold" 
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                Contact
              </Link>

              {/* Services in Mobile */}
              <div className="my-4 space-y-3">
                <Link
                  to="/fssai-registration"
                  onClick={closeMenu}
                  className={`block px-6 py-4 rounded-2xl font-semibold text-center text-base transition-all ${
                    isActive("/fssai-registration")
                      ? "bg-green-600 text-white"
                      : "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                  }`}
                >
                  🍽️ FSSAI Registration
                </Link>

                <Link
                  to="/gst-registration"
                  onClick={closeMenu}
                  className={`block px-6 py-4 rounded-2xl font-semibold text-center text-base transition-all ${
                    isActive("/gst-registration")
                      ? "bg-orange-600 text-white"
                      : "bg-gradient-to-r from-orange-600 to-amber-600 text-white"
                  }`}
                >
                  📊 GST Registration
                </Link>

                <Link
                  to="/iec"
                  onClick={closeMenu}
                  className={`block px-6 py-4 rounded-2xl font-semibold text-center text-base transition-all ${
                    isActive("/iec")
                      ? "bg-purple-600 text-white"
                      : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  }`}
                >
                  🌐 IEC Registration
                </Link>
              </div>

              {/* Company Registration CTA - Mobile */}
              <Link
                to="/company-incorporation/private-limited"
                onClick={closeMenu}
                className="mt-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-center shadow-lg text-base flex items-center justify-center gap-2"
              >
                📋 Start Company Registration
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;