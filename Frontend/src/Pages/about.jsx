// src/components/Pages/AboutUsPage.jsx
import React from 'react';
import { 
  FaRocket, 
  FaShieldAlt, 
  FaUsers, 
  FaHandshake, 
  FaLightbulb, 
  FaGraduationCap, 
  FaGlobe 
} from 'react-icons/fa';

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
            <h1 className="text-5xl font-bold text-slate-900">About IncorpFast</h1>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Expert Training Programs for Import-Export, Company Formation &amp; Business Compliance in India
          </p>
        </div>

        {/* Introduction Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Welcome to IncorpFast
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We are a leading training and consultancy platform specializing in <strong>Import-Export Business Training</strong>, 
              Company Registration Guidance, and Business Compliance Education.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our practical, hands-on training programs are designed to help entrepreneurs, startups, and professionals 
              successfully start and grow their businesses in India and globally.
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
                <FaGraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Import-Export Training</h3>
              <p className="text-slate-600">
                Complete practical training on documentation, DGFT, customs clearance, logistics, 
                international marketing, and export incentives.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <FaRocket size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Company Formation Training</h3>
              <p className="text-slate-600">
                Step-by-step guidance on how to register Private Limited, LLP, OPC, and other business structures legally and efficiently.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <FaGlobe size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Global Business Skills</h3>
              <p className="text-slate-600">
                Learn international trade practices, buyer-seller networking, compliance, and strategies to scale your business globally.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Why Choose IncorpFast Training?
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            
            <div>
              <div className="text-5xl mb-4">📚</div>
              <h4 className="font-semibold text-xl mb-3 text-slate-900">Practical &amp; Updated Curriculum</h4>
              <p className="text-slate-600">Real-world knowledge aligned with current DGFT, MCA, Customs, and global trade rules.</p>
            </div>

            <div>
              <div className="text-5xl mb-4">🌐</div>
              <h4 className="font-semibold text-xl mb-3 text-slate-900">Flexible Learning Modes</h4>
              <p className="text-slate-600">Learn through online live sessions or offline classroom training as per your convenience.</p>
            </div>

            <div>
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="font-semibold text-xl mb-3 text-slate-900">Expert Mentorship</h4>
              <p className="text-slate-600">Personal guidance from experienced professionals and industry experts.</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <FaLightbulb className="text-4xl text-amber-500" />
              <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              To become India’s most trusted training platform that empowers entrepreneurs with practical knowledge 
              to successfully start, register, and grow their businesses in India and international markets.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <FaHandshake className="text-4xl text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              To simplify complex business and trade procedures through high-quality, result-oriented training 
              so every motivated individual can confidently launch and scale their dream business.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-3xl p-12 shadow-xl">
          <p className="text-2xl font-medium max-w-2xl mx-auto">
            Join thousands of successful entrepreneurs who transformed their careers 
            through IncorpFast professional training programs.<br />
            <span className="font-semibold">Start your journey today.</span>
          </p>
        </div>

      </div>
    </div>
  );
}