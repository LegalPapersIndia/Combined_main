import { Link, useNavigate } from "react-router-dom";
import { FaArrowUp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import Logo from "../../Assest/Fssai-footer.png";
import azadi from "../../Assest/azadi.png";

export default function MainFooter() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-b from-[#0f244a] via-[#142e4f] to-[#0d1b3a] text-gray-300 pt-12 pb-10 relative overflow-hidden">
      {/* Tricolor Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Notice */}
          <div className="space-y-5">
            <h3 className="text-orange-400 font-bold text-xl tracking-wide">
              Important Notice
            </h3>

            <p className="text-sm leading-relaxed opacity-90">
              This is a{" "}
              <span className="font-semibold text-yellow-400">
                PRIVATE CONSULTANCY
              </span>{" "}
              portal. We provide professional assistance for{" "}
              <b>FSSAI Food License Registration</b>, application filling,
              document preparation and compliance support.
            </p>

            <p className="text-xs opacity-80 mt-4">
              © {new Date().getFullYear()} FSSAI Food License Portal. All Rights
              Reserved.
            </p>
          </div>

{/* Quick Links */}
<div className="space-y-5">
  <h3 className="text-orange-400 font-bold text-xl tracking-wide">
    Quick Links
  </h3>

  <ul className="space-y-2.5 text-sm">
    {[
      { name: "Apply Certificate", to: "/fssai-registration#registration-form" },
      { name: "Apply Renewal", to: "/fssai-registration#registration-form" },
      { name: "Registration Modification", to: "/fssai-registration#registration-form" },
      { name: "Training", to: "/fssai-registration#training" },
      { name: "Procedure", to: "/fssai-registration#procedure" },
      { name: "Benefits", to: "/fssai-registration#benefits" },
      { name: "FAQs", to: "/fssai-registration#faq" },
    ].map((item) => (
      <li key={item.name}>
        <button
          onClick={() => navigate(item.to)}
          className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 hover:translate-x-1 text-left w-full bg-transparent border-none cursor-pointer p-0"
        >
          <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
          {item.name}
        </button>
      </li>
    ))}
  </ul>
</div>

          {/* Policies */}
          <div className="space-y-5">
            <h3 className="text-orange-400 font-bold text-xl tracking-wide">
              Policies & Contact
            </h3>

            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Contact Us", path: "/fssai-registration/contact" },
                { name: "Refund Policy", path: "/fssai-registration/refund-policy" },
                { name: "Terms & Conditions", path: "/fssai-registration/term-condition" },
                { name: "About Us", path: "/fssai-registration/about" },
                { name: "Privacy Policy", path: "/fssai-registration/privacy-policy" },
                { name: "Disclaimer", path: "/fssai-registration/disclaimer" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2.5 text-sm">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-orange-400 text-lg" />
               info@incorpfast.org
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-400 text-lg" />
                +91-9211037448
              </p>
            </div>
          </div>

          {/* Trusted Logos */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <h3 className="text-orange-400 font-bold text-xl tracking-wide md:self-start">
              Trusted By
            </h3>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">
              <div className="relative group">
                <img
                  src={azadi}
                  alt="Azadi Ka Amrit Mahotsav"
                  className="h-20 w-20 sm:h-26 sm:w-26 md:h-30 md:w-30 lg:h-36 lg:w-36 object-contain"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-70 transition-opacity rounded-full blur-sm"></div>
              </div>

              <div className="relative group">
                <img
                  src={Logo}
                  alt="FSSAI Registration Portal"
                  className="h-20 w-20 sm:h-26 sm:w-26 md:h-30 md:w-30 lg:h-36 lg:w-36 object-contain"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-70 transition-opacity rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 pt-8 border-t border-gray-600/50 text-center text-sm opacity-80">
          <p>
            This is not a Government run website and the form is not the actual
            registration form, it is just to collect information from our
            clients so that our expert can easily understand their business or
            needs. By proceeding forward with this website you are aware that we
            are a private company managing this website and providing assistance
            based on the request from our customers and the fee collected on
            this website is a consultancy fee.
          </p>
        </div>

        {/* New Copyright Line - Added as requested */}
        <div className="mt-6 pt-4 border-t border-gray-600/30 text-center">
          <p className="text-xs text-gray-400">
            Copyright © 2026 EASQUES | All Rights Reserved | Website Design,
            Developed &amp; Google Promotion by{" "}
            <span className="text-gray-300 font-medium">EASQUES</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
