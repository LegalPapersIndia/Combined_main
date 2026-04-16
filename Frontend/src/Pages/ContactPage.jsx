import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden py-16 md:py-20 px-4 sm:px-6">

      {/* Soft Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-blue-100 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gray-100 blur-[100px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Have questions about Company Incorporation, Private Limited, LLP, OPC or any MCA service? 
            Our team is ready to assist you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {/* Phone */}
          <div className="group bg-white border border-gray-200 rounded-3xl p-8 md:p-10 text-center hover:scale-[1.03] hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-blue-100">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
              <FaPhoneAlt size={34} />
            </div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Call Us</h3>
            <p className="text-xl text-gray-700 mb-1 font-medium">+91 92110 37448</p>
            <p className="text-gray-500 text-sm">Mon - Sat | 10:00 AM - 7:00 PM</p>
          </div>

          {/* Email */}
          <div className="group bg-white border border-gray-200 rounded-3xl p-8 md:p-10 text-center hover:scale-[1.03] hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-blue-100">
            <div className="w-20 h-20 bg-gray-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
              <FaEnvelope size={34} />
            </div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Email Us</h3>
            <p className="text-gray-700 text-lg break-all font-medium">info@incorpfast.org</p>
            <p className="text-gray-500 text-sm mt-2">We reply within 2-4 business hours</p>
          </div>

          {/* Address */}
          <div className="group bg-white border border-gray-200 rounded-3xl p-8 md:p-10 text-center hover:scale-[1.03] hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-amber-100 lg:col-span-1">
            <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
              <FaMapMarkerAlt size={34} />
            </div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">Our Office</h3>
            
            <div className="text-gray-700 text-base leading-relaxed">
              <p>F-2, Sector 8,</p>
              <p>Noida, Uttar Pradesh </p>
              <p>201301</p>
            </div>

            <p className="text-gray-500 text-sm mt-4">India</p>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-gray-700 text-lg mb-6">
            Need quick assistance? Call us directly during business hours.
          </p>

          <a
            href="tel:+919211037448"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-blue-300"
          >
            📞 Call Now: +91 92110 37448
          </a>
        </div>

      </div>
    </div>
  );
}