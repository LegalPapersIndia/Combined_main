// src/components/Pages/AboutUsPage.jsx
import React from 'react';
import { FaRocket, FaShieldAlt, FaUsers, FaHandshake, FaRegClock, FaLightbulb } from 'react-icons/fa';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg text-white">
              📋
            </div>
            <h1 className="text-5xl font-bold text-slate-900">About EASQUES</h1>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Making company registration fast, simple, and 100% reliable across India.
          </p>
        </div>

        {/* Introduction Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Welcome to IncorpFast
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We are a trusted <strong>MCA Registered Partner</strong> helping entrepreneurs and startups 
              incorporate their businesses quickly and hassle-free in India.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              From Private Limited Companies to LLP, OPC, Section 8, and Partnership Firms — 
              we handle the entire company registration process so you can focus on building your dream business.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FaRocket size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Fast Registration</h3>
              <p className="text-slate-600">
                Complete your company incorporation in the shortest possible time with our streamlined process and expert team.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <FaShieldAlt size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">100% Compliance</h3>
              <p className="text-slate-600">
                All registrations are done as per latest MCA, ROC, and Government guidelines. Zero legal complications.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <FaUsers size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Expert Support</h3>
              <p className="text-slate-600">
                Dedicated company secretary and legal experts guide you at every step — from name approval to certificate issuance.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values / Why Choose Us */}
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Why Choose IncorpFast?
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            
            <div>
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="font-semibold text-xl mb-3 text-slate-900">Speed & Efficiency</h4>
              <p className="text-slate-600">Most registrations completed within 7–15 working days.</p>
            </div>

            <div>
              <div className="text-5xl mb-4">💰</div>
              <h4 className="font-semibold text-xl mb-3 text-slate-900">Transparent Pricing</h4>
              <p className="text-slate-600">No hidden charges. Clear breakup of government + consultancy fees.</p>
            </div>

            <div>
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="font-semibold text-xl mb-3 text-slate-900">End-to-End Support</h4>
              <p className="text-slate-600">From documentation to post-registration compliance — we’ve got you covered.</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <FaLightbulb className="text-4xl text-amber-500" /> {/* You can import FaLightbulb if needed */}
              <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              To become India’s most preferred platform for hassle-free company registration, empowering every entrepreneur 
              to turn their business idea into a legal entity within days.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <FaHandshake className="text-4xl text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              To simplify the complex process of company incorporation through technology, expert guidance, 
              and transparent services so every startup and business can focus on growth instead of paperwork.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-3xl p-12 shadow-xl">
          <p className="text-2xl font-medium max-w-2xl mx-auto">
            Thousands of entrepreneurs have already trusted IncorpFast to bring their business ideas to life.<br />
            <span className="font-semibold">Now it’s your turn.</span>
          </p>
        </div>

      </div>
    </div>
  );
}