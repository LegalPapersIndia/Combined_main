import { FaUsers, FaCertificate, FaBuilding, FaChalkboardTeacher, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function GSTAboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            About EASQUES
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Your trusted private consultancy partner for GST Registration, Compliance, 
            Business Certifications, Company Incorporation & Professional Training.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Simplifying GST & Business Compliance Across India
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              EASQUES is a professional private consultancy firm specializing in 
              <strong> GST Registration and Compliance Services</strong>, along with 
              company incorporation, various business certifications, and practical training programs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We help startups, small businesses, and established enterprises navigate the complexities 
              of GST law with ease. From new registration and scheme selection to filing, modification, 
              and cancellation — our expert team provides complete end-to-end support.
            </p>
          </div>
        </div>

        {/* Our Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* GST Services */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto">
                <FaUsers size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">GST Services</h3>
              <p className="text-gray-600">
                New GST Registration, Composition Scheme, Regular Scheme, 
                Modification, Cancellation, Return Filing, and complete GST compliance support.
              </p>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-sky-100 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-sky-100 text-sky-600 rounded-full mb-6 mx-auto">
                <FaCertificate size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Certifications</h3>
              <p className="text-gray-600">
                Assistance with ISO, GST-related certifications, and other regulatory approvals 
                to strengthen your business credibility.
              </p>
            </div>

            {/* Company Incorporation */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-indigo-100 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-6 mx-auto">
                <FaBuilding size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Company Incorporation</h3>
              <p className="text-gray-600">
                Hassle-free registration of Private Limited Company, LLP, One Person Company (OPC), 
                and other business structures with full documentation support.
              </p>
            </div>

            {/* Training Programs */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-cyan-100 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full mb-6 mx-auto">
                <FaChalkboardTeacher size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Training & Webinars</h3>
              <p className="text-gray-600">
                Practical GST training, compliance workshops, Import-Export sessions, 
                and business skill development programs through live webinars and offline classes.
              </p>
            </div>

          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-blue-600 to-sky-700 text-white rounded-3xl p-10 md:p-14 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Businesses Choose EASQUES</h2>
              <ul className="space-y-6 text-lg">
                <li className="flex gap-4">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong>Expert Team:</strong> Experienced professionals who stay updated with latest GST rules and notifications.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong>End-to-End Support:</strong> From registration to ongoing compliance and return filing.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong>Flexible Training:</strong> Learn GST and business skills through convenient online webinars or offline sessions.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong>Pan-India Service:</strong> Supporting businesses across every state in India.
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <p className="italic text-xl leading-relaxed opacity-95">
                "We simplify GST complexities so you can focus on growing your business with confidence and peace of mind."
              </p>
              <p className="mt-6 text-sky-200 font-medium">— Team EASQUES</p>
            </div>
          </div>
        </div>

        {/* Contact Teaser */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-md mx-auto mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <FaPhoneAlt className="text-blue-600" />
              <span className="font-medium">+91 9211037448</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-blue-600" />
              <span className="font-medium break-all">info@gstindia-registration.org</span>
            </div>
          </div>
          
          <Link 
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-300 text-lg"
          >
            Visit Our GST Contact Page
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-gray-500 max-w-2xl mx-auto">
          <p>
            EASQUES is a <strong>private consultancy firm</strong> providing professional assistance 
            for GST registration, compliance, certifications, company incorporation, and training programs. 
            We are not affiliated with the Government of India or any GST portal. All services are consultancy-based.
          </p>
        </div>

      </div>
    </div>
  );
}