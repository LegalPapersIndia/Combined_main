// src/components/Sections/GSTTrainingWebinarSection.jsx

import { 
  FaChalkboardTeacher, 
  FaVideo, 
  FaBalanceScale, 
  FaFileInvoice, 
  FaGlobe, 
  FaClock, 
  FaCertificate, 
  FaCheckCircle, 
  FaFileAlt, 
  FaHandsHelping 
} from 'react-icons/fa';

export default function GSTTrainingWebinarSection() {
  return (
    <section
      id="training"
      className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-sky-50"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading with Icon */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-sky-100 rounded-3xl mb-6 shadow-inner">
            <FaChalkboardTeacher className="text-5xl text-blue-600" aria-hidden="true" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Training &amp; Webinars
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert-led GST training programs and informative webinars to help businesses 
            understand GST rules, compliance, filing procedures, and best practices.
          </p>
        </div>

        {/* Training Programs */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-10 flex items-center justify-center gap-3">
            <FaChalkboardTeacher className="text-blue-600" aria-hidden="true" />
            Our GST Training Programs
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-9 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaFileInvoice size={32} aria-hidden="true" title="GST Registration" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">GST Registration &amp; Compliance</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Complete training on GST registration process, choosing between Regular and Composition Scheme, 
                documentation, and maintaining ongoing compliance.
              </p>
              <div className="flex items-center gap-2 text-sm text-blue-700">
                <FaClock aria-hidden="true" /> <span>4 Hours • Practical Session</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-9 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaBalanceScale size={32} aria-hidden="true" title="Return Filing" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Return Filing &amp; Reconciliation</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Hands-on training on filing GSTR-1, GSTR-3B, GSTR-9 and performing accurate reconciliation 
                to avoid notices and penalties.
              </p>
              <div className="flex items-center gap-2 text-sm text-blue-700">
                <FaClock aria-hidden="true" /> <span>3.5 Hours • Live Filing Demo</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-9 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaGlobe size={32} aria-hidden="true" title="Input Tax Credit" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Input Tax Credit (ITC) Mastery</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                In-depth session on claiming Input Tax Credit correctly, blocked credits, 
                reconciliation with GSTR-2A/2B, and latest rules.
              </p>
              <div className="flex items-center gap-2 text-sm text-blue-700">
                <FaClock aria-hidden="true" /> <span>3 Hours • Case Studies</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl p-9 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaFileAlt size={32} aria-hidden="true" title="E-commerce & Export" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">GST for E-commerce &amp; Export</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Special training covering rules for online sellers, LUT filing, 
                zero-rated supplies, and export refunds.
              </p>
              <div className="flex items-center gap-2 text-sm text-blue-700">
                <FaClock aria-hidden="true" /> <span>4 Hours • Real Examples</span>
              </div>
            </div>
          </div>
        </div>

        {/* Webinars Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-10 flex items-center justify-center gap-3">
            <FaVideo className="text-sky-600" aria-hidden="true" />
            Popular Webinars
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaFileAlt className="text-sky-600" size={28} aria-hidden="true" title="Registration Guide" />,
                title: "How to Register for GST in 2026",
                desc: "Step-by-step guide for new GST registration with latest requirements and common mistakes to avoid."
              },
              {
                icon: <FaBalanceScale className="text-sky-600" size={28} aria-hidden="true" title="Scheme Comparison" />,
                title: "Composition Scheme vs Regular Scheme",
                desc: "Clear comparison to help small businesses choose the right GST scheme."
              },
              {
                icon: <FaFileInvoice className="text-sky-600" size={28} aria-hidden="true" title="Latest Updates" />,
                title: "Latest GST Updates & Notifications",
                desc: "Monthly webinar covering recent changes, new rules, and important government notifications."
              },
              {
                icon: <FaCheckCircle className="text-sky-600" size={28} aria-hidden="true" title="Notice Handling" />,
                title: "How to Handle GST Notices Effectively",
                desc: "Practical tips on responding to GST notices, SCN, and avoiding penalties."
              },
              {
                icon: <FaCertificate className="text-sky-600" size={28} aria-hidden="true" title="Beginner Session" />,
                title: "GST Basics for Beginners & Startups",
                desc: "Easy-to-understand session specially designed for new entrepreneurs and small businesses."
              }
            ].map((webinar, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100 group"
              >
                <div className="mb-6">
                  {webinar.icon}
                </div>
                <h4 className="font-semibold text-xl text-gray-900 mb-4 group-hover:text-sky-600 transition-colors">
                  {webinar.title}
                </h4>
                <p className="text-gray-600 text-[15.5px] leading-relaxed">
                  {webinar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Training Highlights */}
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-blue-100">
          <h4 className="text-2xl font-semibold text-center text-gray-900 mb-10 flex items-center justify-center gap-3">
            <FaCertificate className="text-blue-600" aria-hidden="true" />
            Why Join Our GST Training?
          </h4>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <FaVideo size={28} aria-hidden="true" title="Live Sessions" />
              </div>
              <strong className="block text-lg text-gray-800">Live Interactive</strong>
              <p className="text-sm text-gray-600 mt-1">Real-time doubt clearing sessions</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <FaHandsHelping size={28} aria-hidden="true" title="Expert Guidance" />
              </div>
              <strong className="block text-lg text-gray-800">Expert Trainers</strong>
              <p className="text-sm text-gray-600 mt-1">Professionals with practical GST experience</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <FaCertificate size={28} aria-hidden="true" title="Certificate" />
              </div>
              <strong className="block text-lg text-gray-800">Certificate</strong>
              <p className="text-sm text-gray-600 mt-1">Participation certificate provided</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <FaClock size={28} aria-hidden="true" title="Flexible Duration" />
              </div>
              <strong className="block text-lg text-gray-800">Flexible Timing</strong>
              <p className="text-sm text-gray-600 mt-1">2 to 4 hour sessions with recordings</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}