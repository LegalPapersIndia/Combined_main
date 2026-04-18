// src/components/Sections/FSSAITrainingWebinarSection.jsx

import { 
  FaChalkboardTeacher, 
  FaVideo, 
  FaShieldAlt, 
  FaGlobe, 
  FaCertificate, 
  FaClock, 
  FaHandsHelping, 
  FaUtensils, 
  FaFileAlt, 
  FaCheckCircle 
} from 'react-icons/fa';

export default function FSSAITrainingWebinarSection() {
  return (
    <section
      id="training"
      className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-green-50"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading with decorative icon */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-orange-100 rounded-3xl mb-6 shadow-inner">
            <FaChalkboardTeacher className="text-5xl text-green-600" aria-hidden="true" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Training &amp; Webinars
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert-led training programs and informative webinars designed to help food businesses 
            understand FSSAI rules, food safety practices, and compliance requirements.
          </p>
        </div>

        {/* Training Programs */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-10 flex items-center justify-center gap-3">
            <FaChalkboardTeacher className="text-green-600" aria-hidden="true" />
            Our Training Programs
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 group">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaShieldAlt size={28} aria-hidden="true" title="Food Safety Shield" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Food Safety &amp; Compliance</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Complete guide to FSSAI licensing, documentation, FSMS implementation, 
                and how to stay compliant with current regulations.
              </p>
              <div className="flex items-center gap-2 text-sm text-green-700">
                <FaClock aria-hidden="true" /> <span>4 Hours • Interactive Session</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 group">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaHandsHelping size={28} aria-hidden="true" title="Hygiene Practices" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Good Hygiene Practices &amp; GMP</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Practical training on personal hygiene, sanitation, pest control, 
                and implementing Good Manufacturing Practices in food operations.
              </p>
              <div className="flex items-center gap-2 text-sm text-green-700">
                <FaClock aria-hidden="true" /> <span>3 Hours • Hands-on Approach</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 group">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaGlobe size={28} aria-hidden="true" title="Global Trade" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Import-Export Compliance</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Detailed session covering import clearance, export documentation, 
                labeling requirements, and international food trade regulations.
              </p>
              <div className="flex items-center gap-2 text-sm text-green-700">
                <FaClock aria-hidden="true" /> <span>3.5 Hours • Case Studies</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 group">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaUtensils size={28} aria-hidden="true" title="HACCP System" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">HACCP Implementation</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Learn the 7 principles of HACCP and how to develop and implement 
                an effective food safety management system.
              </p>
              <div className="flex items-center gap-2 text-sm text-green-700">
                <FaClock aria-hidden="true" /> <span>4 Hours • Practical Examples</span>
              </div>
            </div>
          </div>
        </div>

        {/* Webinars Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-10 flex items-center justify-center gap-3">
            <FaVideo className="text-orange-600" aria-hidden="true" />
            Regular Webinars
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaFileAlt className="text-orange-600" size={26} aria-hidden="true" title="Step by Step Guide" />,
                title: "Food Registration – Step by Step",
                desc: "Clear explanation of the entire licensing process with latest requirements and common mistakes to avoid."
              },
              {
                icon: <FaHandsHelping className="text-orange-600" size={26} aria-hidden="true" title="Small Business Safety" />,
                title: "Food Safety for Small & Home Businesses",
                desc: "Specially designed for home bakers, cloud kitchens, and small vendors to understand basic compliance."
              },
              {
                icon: <FaShieldAlt className="text-orange-600" size={26} aria-hidden="true" title="Latest Updates" />,
                title: "Latest Food Registration Updates & Amendments",
                desc: "Stay updated with recent notifications, new standards, and important regulatory changes."
              },
              {
                icon: <FaCheckCircle className="text-orange-600" size={26} aria-hidden="true" title="Inspection Ready" />,
                title: "How to Face Food Registration Inspection Confidently",
                desc: "Practical tips on record keeping, premises preparation, and what inspectors usually check."
              },
              {
                icon: <FaCertificate className="text-orange-600" size={26} aria-hidden="true" title="Awareness Program" />,
                title: "Food Safety Awareness Program",
                desc: "Basic food hygiene, contamination prevention, and best practices for all food handlers."
              }
            ].map((webinar, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 group"
              >
                <div className="mb-6">
                  {webinar.icon}
                </div>
                <h4 className="font-semibold text-xl text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                  {webinar.title}
                </h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {webinar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Training Highlights - Graphic Icons Row */}
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-green-100">
          <h4 className="text-2xl font-semibold text-center text-gray-800 mb-10 flex items-center justify-center gap-3">
            <FaCertificate className="text-green-600" aria-hidden="true" />
            Training Highlights
          </h4>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-4">
                <FaVideo size={28} aria-hidden="true" title="Live Online" />
              </div>
              <strong className="block text-lg text-gray-800">Live Online</strong>
              <p className="text-sm text-gray-600 mt-1">Interactive webinars from anywhere</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-4">
                <FaChalkboardTeacher size={28} aria-hidden="true" title="Expert Trainers" />
              </div>
              <strong className="block text-lg text-gray-800">Expert Trainers</strong>
              <p className="text-sm text-gray-600 mt-1">Industry professionals with real experience</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-4">
                <FaCertificate size={28} aria-hidden="true" title="Certificate" />
              </div>
              <strong className="block text-lg text-gray-800">Certificate</strong>
              <p className="text-sm text-gray-600 mt-1">Participation certificate on completion</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-4">
                <FaClock size={28} aria-hidden="true" title="Flexible Timing" />
              </div>
              <strong className="block text-lg text-gray-800">Flexible Timing</strong>
              <p className="text-sm text-gray-600 mt-1">2–4 hour sessions with recordings available</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}