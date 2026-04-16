// src/components/Header/HeaderTop.jsx
import { Link } from 'react-router-dom';
import Logo from "../../Assest/Logo.png";
import Swach from "../../Assest/swach.png";

export default function HeaderTop({ handleScroll }) {
  return (
    <div className="bg-gradient-to-b from-blue-400 via-blue-300 to-sky-200 text-white shadow-lg">
      
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-500/70 via-sky-500/70 to-blue-600/70 text-white text-xs sm:text-sm py-2 sm:py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <a
              href="mailto:info@gstindia-registration.org"
              className="flex items-center gap-2 hover:text-blue-100 transition-colors"
            >
              <span>📧</span>
              info@gstindia-registration.org
            </a>
            <span className="hidden sm:inline text-white/70">|</span>
            <a
              href="tel:+919211037448"
              className="flex items-center gap-2 hover:text-blue-100 transition-colors"
            >
              <span>📞</span>
              +91-9211037448
            </a>
          </div>

          <div className="flex gap-4 sm:gap-6 mt-1 sm:mt-0 font-medium">
            <Link
              to="#benefits"
              onClick={(e) => handleScroll(e, "#benefits")}
              className="hover:text-white transition-colors"
            >
              Benefits
            </Link>
            <Link
              to="#faq"
              onClick={(e) => handleScroll(e, "#faq")}
              className="hover:text-white transition-colors"
            >
              FAQs
            </Link>
            <Link to="/gst/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white">
        <div className="marquee-container relative w-full h-6 sm:h-8 overflow-hidden flex items-center">
          <div className="marquee flex whitespace-nowrap text-xs sm:text-sm md:text-base font-medium tracking-wide animate-marquee">
            <span className="px-6 sm:px-10 md:px-14 text-center">
              THIS IS A PRIVATE CONSULTANCY PORTAL FOR GST REGISTRATION. PORTAL FEES ARE CONSULTANCY CHARGES AND NOT GOVERNMENT FEES...
            </span>
            <span className="px-6 sm:px-10 md:px-14 text-center">
              THIS IS A PRIVATE CONSULTANCY PORTAL FOR GST REGISTRATION. PORTAL FEES ARE CONSULTANCY CHARGES AND NOT GOVERNMENT FEES...
            </span>
          </div>
        </div>
      </div>

      {/* Main Header with Logo + Text */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          
          {/* Logo + Title Section */}
          <Link to="/gst" className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center md:text-left group">
            {/* Logo */}
            <div className="relative">
              <img
                src={Logo}
                alt="GST Registration Portal"
                className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto object-contain drop-shadow-lg transition-transform group-hover:scale-105"
              />
            </div>

            {/* Title Text */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-blue-950">
                GST Registration Consultancy Portal
              </h1>
              <div className="mt-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-blue-950">
                  भारतीय जीएसटी पंजीकरण कंसल्टेंसी ऑनलाइन पोर्टल
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mt-1 text-blue-900">
                  INDIA'S GST REGISTRATION CONSULTANCY ONLINE PORTAL
                </p>
              </div>
            </div>
          </Link>

          {/* Swachh Bharat Image */}
          <div className="hidden md:block">
            <img
              src={Swach}
              alt="Swachh Bharat"
              className="w-28 sm:w-32 md:w-40 lg:w-48 h-auto object-contain opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}