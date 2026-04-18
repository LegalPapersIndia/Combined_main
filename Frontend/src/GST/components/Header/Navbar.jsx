// src/components/Header/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ navItems, handleScroll }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">

          {/* Logo / Brand Name (Optional - You can add if needed) */}
          {/* <Link to="/" className="text-white font-bold text-xl">EASQUES</Link> */}

          {/* Hamburger button - Mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-2 lg:gap-6 text-sm lg:text-base font-semibold text-white">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={(e) => {
                  handleScroll?.(e, item.to);   // Added optional chaining for safety
                  closeMenu();
                }}
                className="px-4 py-2 hover:bg-white/20 rounded-lg transition-all duration-300 hover:shadow-md hover:text-blue-100 active:scale-95"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Home Button - Right Side */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="hidden sm:flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-5 py-2 rounded-full text-xs font-medium text-white border border-white/30 transition-all duration-300 hover:scale-105"
            >
              Home (IncorpFast)
            </Link>
          </div>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 shadow-lg py-4">
            <div className="flex flex-col items-center gap-2 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={(e) => {
                    handleScroll?.(e, item.to);
                    closeMenu();
                  }}
                  className="px-6 py-3 text-base font-medium hover:bg-white/20 rounded-lg transition-colors w-full text-center text-white"
                >
                  {item.label}
                </Link>
              ))}

              {/* Home Button inside Mobile Menu */}
              <Link
                to="/"
                onClick={closeMenu}
                className="mt-2 px-6 py-3 text-base font-medium hover:bg-white/20 rounded-lg transition-colors w-full text-center text-white flex items-center justify-center gap-2"
              >
               Home (IncorpFast)
              </Link>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
