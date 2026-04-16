import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-white text-slate-600 pt-20 pb-10 border-t border-slate-200 overflow-hidden">
      
      {/* Light Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg text-white">
                📋
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">IncorpFast</h2>
                <p className="text-xs text-slate-500">MCA Registered Partner</p>
              </div>
            </div>

            <p className="text-slate-600 max-w-sm leading-relaxed">
              Making company registration fast, simple and reliable across India.
              Trusted by startups and entrepreneurs nationwide.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a 
                href="tel:+919211037448" 
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-slate-200 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                <FaPhoneAlt />
              </a>
              <a 
                href="mailto:info@incorpfast.org" 
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-slate-200 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-semibold mb-5">Company</h4>
            <ul className="space-y-3 text-slate-600">
              <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition">Contact Us</Link></li>
              <li><Link to="/disclaimer" className="hover:text-blue-600 transition">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-semibold mb-5">Legal</h4>
            <ul className="space-y-3 text-slate-600">
              <li><Link to="/refund-policy" className="hover:text-blue-600 transition">Refund Policy</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-600 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600 transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-semibold mb-5">Services</h4>
            <ul className="space-y-3 text-slate-600">
              <li><Link to="/company-incorporation/private-limited" className="hover:text-blue-600 transition cursor-pointer">Private Limited Company</Link></li>
              <li><Link to="/company-incorporation/llp" className="hover:text-blue-600 transition cursor-pointer">LLP Registration</Link></li>
              <li><Link to="/company-incorporation/opc" className="hover:text-blue-600 transition cursor-pointer">OPC Registration</Link></li>
              <li><Link to="/company-incorporation/section-8" className="hover:text-blue-600 transition cursor-pointer">Section 8 Company</Link></li>
              <li><Link to="/company-incorporation/partnership" className="hover:text-blue-600 transition cursor-pointer">Partnership Firm</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-semibold mb-5">Get In Touch</h4>
            <div className="space-y-4 text-slate-600 text-sm">
              <p>
                <span className="block text-slate-500 font-medium">Phone / WhatsApp</span>
                +91 92110 37448
              </p>
              <p>
                <span className="block text-slate-500 font-medium">Email</span>
                info@incorpfast.org
              </p>
              <p className="text-slate-500 mt-4">
                Mon - Sat: 10:00 AM - 6:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Important Disclaimer - Added as requested */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs leading-relaxed text-slate-500">
              This is not a Government run website and the form is not the actual registration form. 
              It is only to collect information from our clients so that our experts can easily understand 
              their business needs. By proceeding with this website, you acknowledge that we are a 
              <span className="font-medium text-slate-600"> private company</span> providing consultancy 
              and assistance services. The fee collected on this website is a 
              <span className="font-medium text-slate-600"> consultancy fee</span>.
            </p>
          </div>
        </div>


        <div className="mt-6 pt-4 border-t border-slate-100">
          <p className="text-center text-[10px] text-slate-900">
            Copyright © 2026 EASQUES | All Rights Reserved | 
            Website Design, Developed &amp; Google Promotion by{" "}
            <span className="text-slate-950 font-medium">EASQUES</span>.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;