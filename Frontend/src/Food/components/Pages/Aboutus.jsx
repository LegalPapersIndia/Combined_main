import { FaUsers, FaCertificate, FaBuilding, FaChalkboardTeacher, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            About EASQUES
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Your trusted private consultancy partner for FSSAI compliance, business certifications, 
            company incorporation, and professional training programs across India.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Empowering Indian Businesses with Compliance & Growth
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              EASQUES is a dedicated private consultancy firm committed to simplifying regulatory compliance 
              and helping businesses thrive. We specialize in <strong>FSSAI Food License Registration & Renewal</strong>, 
              various business certifications, company incorporation, and skill-building training programs 
              delivered through webinars and classroom sessions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're a food business owner, startup entrepreneur, or an established company looking 
              to expand, our expert team provides end-to-end support — from documentation and application 
              filing to compliance guidance and professional development.
            </p>
          </div>
        </div>

        {/* Our Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* FSSAI Services */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-green-100 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6 mx-auto">
                <FaUsers size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">FSSAI Compliance</h3>
              <p className="text-gray-600">
                Basic Registration, State License, Central License, Renewal, Modification, 
                and full food safety compliance support for restaurants, manufacturers, traders, and more.
              </p>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-emerald-100 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-6 mx-auto">
                <FaCertificate size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Certifications</h3>
              <p className="text-gray-600">
                Expert assistance with ISO, HACCP, GMP, and other industry-specific certifications 
                to help your business meet national and international standards.
              </p>
            </div>

            {/* Company Incorporation */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-teal-100 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-full mb-6 mx-auto">
                <FaBuilding size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Company Incorporation</h3>
              <p className="text-gray-600">
                Hassle-free Private Limited, LLP, OPC, and other business entity registrations 
                with complete documentation and legal support.
              </p>
            </div>

            {/* Training Programs */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-orange-100 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-6 mx-auto">
                <FaChalkboardTeacher size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Training & Webinars</h3>
              <p className="text-gray-600">
                Practical Import-Export training, food safety awareness, compliance workshops, 
                and skill development programs — available online (live webinars) and offline.
              </p>
            </div>

          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl p-10 md:p-14 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Businesses Trust EASQUES</h2>
              <ul className="space-y-6 text-lg">
                <li className="flex gap-4">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong>Expert Guidance:</strong> Experienced consultants who understand real-world business challenges.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong>End-to-End Support:</strong> From application filing to final approval and ongoing compliance.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong>Flexible Learning:</strong> Training through live webinars, recorded sessions, and classroom programs.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong>Pan-India Service:</strong> Supporting food businesses and entrepreneurs across the country.
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <p className="italic text-xl leading-relaxed opacity-95">
                "At EASQUES, we don't just help you get licensed or certified — we empower your business to grow confidently in a regulated environment."
              </p>
              <p className="mt-6 text-emerald-200 font-medium">— Team EASQUES</p>
            </div>
          </div>
        </div>

        {/* Office & Contact Teaser */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch With Us</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-md mx-auto">
            <div className="flex items-center gap-3 text-gray-700">
              <FaPhoneAlt className="text-green-600" />
              <span className="font-medium">+91 9211037448</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-green-600" />
              <span className="font-medium">info@incorpfast.org</span>
            </div>
          </div>
          <Link 
            to="/food/contact"
            className="mt-8 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-300 text-lg"
          >
            Visit Our Full Contact Page
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-gray-500 max-w-2xl mx-auto">
          <p>
            EASQUES is a <strong>private consultancy firm</strong> (operated under EASQUES / EASRISE Legalpapers Management). 
            We provide professional assistance for regulatory compliance, certifications, incorporation, and training. 
            All services are consultancy-based and not affiliated with any government department.
          </p>
        </div>

      </div>
    </div>
  );
}