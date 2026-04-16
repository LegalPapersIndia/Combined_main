// src/components/Footer/MainFooter.jsx

import { Link, useNavigate } from "react-router-dom";
import { FaArrowUp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import Logo from "../../Assest/Bottom.png";   
import azadi from "../../Assest/azadi.png";

export default function MainFooter() {
  const navigate = useNavigate();
  return (
    <footer className="bg-gradient-to-b from-[#0f244a] via-[#142e4f] to-[#0d1b3a] text-gray-300 pt-12 pb-10 relative overflow-hidden">
      {/* Blue Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-600"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Important Notice */}
          <div className="space-y-5">
            <h3 className="text-blue-400 font-bold text-xl tracking-wide">
              Important Notice
            </h3>

            <p className="text-sm leading-relaxed opacity-90">
              This is a{" "}
              <span className="font-semibold text-sky-400">
                PRIVATE CONSULTANCY
              </span>{" "}
              portal Owned by <b>EASQUES</b>. We provide professional assistance for{" "}
              <b>GST Registration</b>, application filing,
              document preparation and compliance support.
            </p>

          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-blue-400 font-bold text-xl tracking-wide">
              Quick Links
            </h3>

<ul className="space-y-2.5 text-sm">
          {[
            { name: "Apply for GST Registration", path: "/gst/#registration-form" },
            { name: "GST Modification", path: "/gst/#registration-form" },
            { name: "GST Renewal / Update", path: "/gst/#registration-form" },
            { name: "Procedure", path: "/gst/#procedure" },
            { name: "Documents Required", path: "/gst/#documents" },
            { name: "Benefits", path: "/gst/#benefits" },
            { name: "FAQs", path: "/gst/#faq" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 hover:translate-x-1 text-left w-full"
              >
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
          </div>

          {/* Policies & Contact */}
          <div className="space-y-5">
            <h3 className="text-blue-400 font-bold text-xl tracking-wide">
              Policies & Contact
            </h3>

            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Contact Us", path: "/gst/contact" },
                { name: "Refund Policy", path: "/gst/refund-policy" },
                { name: "Terms & Conditions", path: "/gst/term-condition" },
                { name: "About Us", path: "/gst/about" },
                { name: "Privacy Policy", path: "/gst/privacy-policy" },
                { name: "Disclaimer", path: "/gst/disclaimer" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2.5 text-sm">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400 text-lg" />
                info@incorpfast.org
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400 text-lg" />
                +91-9211037448
              </p>
            </div>
          </div>

          {/* Trusted Logos */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <h3 className="text-blue-400 font-bold text-xl tracking-wide md:self-start">
              Trusted By
            </h3>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">
              <div className="relative group">
                <img
                  src={azadi}
                  alt="Azadi Ka Amrit Mahotsav"
                  className="h-20 w-20 sm:h-26 sm:w-26 md:h-30 md:w-30 lg:h-36 lg:w-36 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-70 transition-opacity rounded-full blur-sm"></div>
              </div>

              <div className="relative group">
                <img
                  src={Logo}
                  alt="GST Registration Portal"
                  className="h-20 w-20 sm:h-26 sm:w-26 md:h-30 md:w-30 lg:h-36 lg:w-36 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-70 transition-opacity rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 pt-8 border-t border-gray-600/50 text-center text-sm opacity-80">
          <p>
            This is not a Government run website. The form is not the actual 
            government registration form. It is only to collect information from our 
            clients so that our experts can easily understand their business needs. 
            By proceeding with this website, you acknowledge that we are a private 
            consultancy providing assistance and the fee collected is a consultancy fee.
          </p>
        </div>

        {/* Copyright Line */}
        <div className="mt-6 pt-4 border-t border-gray-600/30 text-center">
          <p className="text-xs text-gray-400">
            Copyright © 2026 GST Registration Portal | All Rights Reserved | 
            Website Design, Developed &amp; Google Promotion by{" "}
            <span className="text-gray-300 font-medium">EASQUES</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}