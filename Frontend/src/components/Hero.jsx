import React from "react";
import CompanyCards from "./CompanyCards";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-white py-28 overflow-hidden">
      
      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-100 blur-[160px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Top Content */}
        <div className="text-center mb-20">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-sm font-medium mb-6 border border-blue-100">
            ✅ Trusted by 10000+ Entrepreneurs
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-gray-900">
            Register Your Dream Company <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-400">
              in Just 7 Days
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Private Limited • LLP • OPC • Section 8 • Partnership <br />
            MCA Compliant • Expert CA/CS Support • 100% Digital Process
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <Link to="#Card">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300">
                Start Registration
              </button>
            </Link>

            <Link to="/contact">
              <button className="px-8 py-4 rounded-xl border border-gray-300 text-gray-700 font-medium hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
                Talk to Expert
              </button>
            </Link>

          </div>

          {/* Trust Line */}
          <p className="text-sm text-gray-500 mt-6">
            ⚡ Fast Approval • 💯 No Hidden Charges • 🛡️ Expert Support
          </p>
        </div>

        {/* Company Cards */}
        <CompanyCards />
      </div>
    </section>
  );
};

export default Hero;