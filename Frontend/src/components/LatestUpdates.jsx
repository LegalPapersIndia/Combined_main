import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const updates = [
  {
    title: "MCA Introduces New SPICe+ Form Updates (2026)",
    desc: "Ministry of Corporate Affairs has updated SPICe+ forms for faster company incorporation and improved validation.",
    link: "https://www.mca.gov.in/",
    date: "March 2026",
  },
  {
    title: "Mandatory PAN & TAN Integration for New Companies",
    desc: "PAN and TAN are now automatically issued with company incorporation via SPICe+ Part B.",
    link: "https://www.incometax.gov.in/",
    date: "Feb 2026",
  },
  {
    title: "Digital Signature (DSC) Mandatory for All Directors",
    desc: "All directors must obtain DSC before filing incorporation documents on MCA portal.",
    link: "https://www.mca.gov.in/",
    date: "Jan 2026",
  },
  {
    title: "New LLP Compliance Rules Updated",
    desc: "MCA has revised LLP filing timelines and penalties for late submissions.",
    link: "https://www.mca.gov.in/",
    date: "Dec 2025",
  },
];

const LatestUpdates = () => {
  return (
    <section className="relative py-24 bg-white text-slate-800 overflow-hidden">
      
      {/* Light Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Latest <span className="text-blue-600">Updates</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Stay updated with the latest MCA rules, compliance changes and company registration updates
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {updates.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl p-[1px] bg-gradient-to-br from-blue-600/10 to-transparent hover:from-blue-600/20 transition-all duration-500"
            >
              <div className="h-full rounded-2xl bg-white p-6 border border-slate-200 group-hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-blue-500/10">
                
                {/* Date */}
                <span className="text-xs text-slate-500 font-medium">
                  {item.date}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold mt-2 mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* CTA */}
                <div className="mt-5 flex items-center gap-2 text-blue-600 text-sm font-medium group-hover:text-blue-700">
                  Read More
                  <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestUpdates;