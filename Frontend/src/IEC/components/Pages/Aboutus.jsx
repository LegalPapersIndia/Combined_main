// src/components/Pages/AboutUsPage.jsx
import { FaGraduationCap, FaGlobe, FaUsers, FaLightbulb } from 'react-icons/fa';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Empowering businesses to go global through expert Import-Export training and guidance.
          </p>
        </div>

        {/* Company Introduction */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Welcome to EASRISE LEGALPAPERS MANAGEMENT (OPC) PRIVATE LIMITED
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are a dedicated consultancy firm specializing in <strong>Import and Export Training Programs</strong>. 
              Our mission is to equip startups and established businesses with the knowledge, skills, and practical strategies 
              needed to succeed in international trade and global business.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you are just starting your import-export journey or looking to expand your existing business globally, 
              we provide comprehensive training through both <strong>online and offline modes</strong> — making learning flexible, 
              accessible, and result-oriented.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-orange-100">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-6 mx-auto">
                <FaGraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                Expert Training Programs
              </h3>
              <p className="text-gray-600 text-center">
                Step-by-step guidance on how to start, manage, and scale import-export businesses. 
                Covering documentation, compliance, logistics, international marketing, and more.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-orange-100">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto">
                <FaGlobe size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                Global Business Focus
              </h3>
              <p className="text-gray-600 text-center">
                Practical knowledge to help you enter international markets confidently. 
                We train you on global trade practices, buyer-seller networking, and cross-border opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <FaLightbulb className="text-4xl text-amber-500" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To become the most trusted partner for Indian businesses aspiring to succeed in global trade by providing 
              world-class import-export education and support.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <FaUsers className="text-4xl text-emerald-500" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To simplify the complexities of international business through practical, hands-on training and make 
              global opportunities accessible to every motivated entrepreneur and business in India.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Why Choose EASRISE Legalpapers Management?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">📚</div>
              <h4 className="font-semibold text-lg mb-2">Practical & Updated Curriculum</h4>
              <p className="text-gray-600 text-sm">Real-world knowledge aligned with current DGFT, customs, and global trade rules.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🌐</div>
              <h4 className="font-semibold text-lg mb-2">Flexible Learning Modes</h4>
              <p className="text-gray-600 text-sm">Learn through online live sessions or offline classroom training as per your convenience.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="font-semibold text-lg mb-2">Dedicated Support</h4>
              <p className="text-gray-600 text-sm">Personal guidance from experienced professionals to help you implement what you learn.</p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            At EASRISE Legalpapers Management (OPC) Private Limited, we don’t just teach import-export — 
            we prepare you to build a successful global business with confidence.
          </p>
        </div>

      </div>
    </div>
  );
}