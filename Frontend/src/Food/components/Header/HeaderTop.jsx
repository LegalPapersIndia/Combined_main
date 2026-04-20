// src/components/Header/HeaderTop.jsx
import { Link } from "react-router-dom";
import Logo from "../../Assest/Logo.png";
import Swach from "../../Assest/swach.png";

export default function HeaderTop({ handleScroll }) {
  return (
    <div className="bg-gradient-to-b from-[#FFB07A] via-[#FFD1A6] to-[#6BCF8B] text-white shadow-lg">
      <div className="bg-gradient-to-r from-[#FFB07A]/60 via-[#FFD1A6]/60 to-[#6BCF8B]/60 text-white text-xs sm:text-sm py-2 sm:py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <a
              href="mailto:info@incorpfast.org"
              className="flex items-center gap-2 hover:text-orange-100 transition-colors"
            >
              <span>📧</span>
              info@incorpfast.org
            </a>
            <span className="hidden sm:inline text-white/60">|</span>
            <a
              href="tel:+919211037448"
              className="flex items-center gap-2 hover:text-orange-100 transition-colors"
            >
              <span>📞</span>
              +91-9211037448
            </a>
          </div>

          <div className="flex gap-4 sm:gap-6 mt-1 sm:mt-0 font-medium">
            <Link
              to="#benefits"
              onClick={(e) => handleScroll(e, "#benefits")}
              className="hover:text-[#FFECD1] transition-colors"
            >
              Benefits
            </Link>
            <Link
              to="#faq"
              onClick={(e) => handleScroll(e, "#faq")}
              className="hover:text-[#FFECD1] transition-colors"
            >
              FAQs
            </Link>
            <Link
              to="/fssai-registration/contact"
              className="hover:text-[#FFECD1] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-gradient-to-r from-[#FF671F] via-[#FF8C3A] to-[#138808] text-white">
        <div className="marquee-container relative w-full h-6 sm:h-8 overflow-hidden flex items-center">
          <div className="marquee whitespace-nowrap text-xs sm:text-sm md:text-base font-medium tracking-wide">
            <span className="px-6 sm:px-10 md:px-14 text-center">
              A MANUFACTURER OF THE PACKED FOOD PRODUCTS AND IMPORT, EXPORT,
              E-COMMERCE ARE NOT ELIGIBLE FOR REGISTRATION...
            </span>

            <span className="px-6 sm:px-10 md:px-14 text-center">
              A MANUFACTURER OF THE PACKED FOOD PRODUCTS AND IMPORT, EXPORT,
              E-COMMERCE ARE NOT ELIGIBLE FOR REGISTRATION...
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
          {/* Logo + Text */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 md:gap-6 text-center md:text-left">
            <Link to="/fssai-registration">
              <div className="relative group">
                <img
                  src={Logo}
                  alt="IEC - Import Export Code India"
                  className="w-32 h-20 xs:w-40 xs:h-24 sm:w-48 sm:h-28 md:w-56 md:h-32 lg:w-64 lg:h-36 object-contain drop-shadow-lg mx-auto md:mx-0"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF8A4C]/40 to-[#2FA84F]/40 opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-xl"></div>
              </div>
            </Link>

            <div>
              <h1 className="text-xl xs:text-2xl sm:text-2.5xl md:text-3xl lg:text-4xl font-extrabold tracking-tight drop-shadow-lg leading-tight">
                INDIA'S FOOD SAFETY LICENSE CONSULTANCY ONLINE PORTAL
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mt-0.5 opacity-90">
                भारतीय खाद्य सुरक्षा लाइसेंस कंसल्टेंसी ऑनलाइन पोर्टल
              </p>
            </div>
          </div>

          {/* Swach */}
          <div className="hidden md:block relative group">
            <img
              src={Swach}
              alt="Swachh Bharat - Global Trade India"
              className="w-32 h-20 xs:w-40 xs:h-24 sm:w-48 sm:h-28 md:w-56 md:h-32 lg:w-64 lg:h-36 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
