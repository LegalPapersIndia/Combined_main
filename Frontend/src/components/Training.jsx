// src/components/Sections/TrainingWebinarSection.jsx

import React from "react";
import { 
  GraduationCap, 
  Video, 
  FileText, 
  Users, 
  Globe, 
  Award, 
  Clock, 
  Building2 
} from "lucide-react";

const trainingPrograms = [
  {
    icon: Building2,
    title: "Company Incorporation Process",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    description: "Complete step-by-step training on how to register a Private Limited Company, OPC, LLP, or Section 8 Company in India.",
    duration: "4 Hours"
  },
  {
    icon: FileText,
    title: "Documents & Compliance Requirements",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    description: "Detailed guidance on required documents, digital signatures (DSC), Director Identification Number (DIN), and post-incorporation compliances.",
    duration: "3 Hours"
  },
  {
    icon: Users,
    title: "LLP vs Private Limited Company",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    description: "In-depth comparison between LLP, Private Limited, OPC, and Partnership Firm to help you choose the right business structure.",
    duration: "3.5 Hours"
  },
  {
    icon: Globe,
    title: "Import-Export & International Business Setup",
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    description: "Training on setting up a company for import-export business, IEC registration, and related compliances.",
    duration: "4 Hours"
  }
];

const webinars = [
  {
    icon: Video,
    title: "How to Start a Company in India in 2026",
    description: "Complete roadmap from name approval to incorporation certificate with latest MCA requirements."
  },
  {
    icon: FileText,
    title: "Documents Required for Company Registration",
    description: "Detailed session covering all mandatory and supporting documents for different company types."
  },
  {
    icon: Users,
    title: "Choosing the Right Business Structure",
    description: "LLP vs Pvt Ltd vs OPC vs Partnership – Which one is best for your business?"
  },
  {
    icon: Award,
    title: "Post Incorporation Compliances",
    description: "What to do after getting the incorporation certificate – PAN, TAN, GST, Bank Account, etc."
  },
  {
    icon: Building2,
    title: "Company Registration for Startups & Beginners",
    description: "Easy-to-understand guide specially designed for first-time entrepreneurs and startups."
  }
];

const TrainingWebinarSection = () => {
  return (
    <section className="relative py-24 bg-white text-slate-800 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-3xl mb-6">
            <GraduationCap className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Training &amp; Webinars
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Expert-led training programs and informative webinars to help entrepreneurs 
            understand company incorporation, compliance, and business setup in India.
          </p>
        </div>

        {/* Training Programs */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center text-slate-800 mb-12 flex items-center justify-center gap-3">
            <GraduationCap className="w-7 h-7 text-blue-600" />
            Our Training Programs
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-blue-600/10 to-transparent hover:from-blue-600/20 transition-all duration-500"
                >
                  <div className="h-full rounded-3xl bg-white border border-slate-200 group-hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden">
                    
                    {/* Icon Header */}
                    <div className="px-8 pt-8 pb-6">
                      <div className={`w-16 h-16 ${program.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={38} className={program.color} />
                      </div>
                      <h4 className="text-2xl font-semibold text-slate-900 mb-4">
                        {program.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-[15.5px]">
                        {program.description}
                      </p>
                    </div>

                    {/* Duration Footer */}
                    <div className="border-t border-slate-100 px-8 py-5 flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration} • Interactive Session</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Popular Webinars */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center text-slate-800 mb-12 flex items-center justify-center gap-3">
            <Video className="w-7 h-7 text-blue-600" />
            Popular Webinars
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => {
              const IconComponent = webinar.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-500/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                    <IconComponent size={28} className="text-blue-600" />
                  </div>
                  
                  <h4 className="font-semibold text-xl text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {webinar.title}
                  </h4>
                  
                  <p className="text-slate-600 text-[15px] leading-relaxed">
                    {webinar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-slate-50 rounded-3xl p-10 md:p-14 border border-slate-100">
          <h4 className="text-2xl font-semibold text-center text-slate-900 mb-10">
            Training Highlights
          </h4>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4">
                <Video className="w-8 h-8 text-blue-600" />
              </div>
              <strong className="text-lg text-slate-800">Live Interactive</strong>
              <p className="text-sm text-slate-600 mt-1">Real-time doubt clearing sessions</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <strong className="text-lg text-slate-800">Expert Trainers</strong>
              <p className="text-sm text-slate-600 mt-1">Experienced professionals &amp; consultants</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <strong className="text-lg text-slate-800">Certificate</strong>
              <p className="text-sm text-slate-600 mt-1">Participation certificate provided</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <strong className="text-lg text-slate-800">Flexible Timing</strong>
              <p className="text-sm text-slate-600 mt-1">2 to 4 hour sessions with recordings</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrainingWebinarSection;