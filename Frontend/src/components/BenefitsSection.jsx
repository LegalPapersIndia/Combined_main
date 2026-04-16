import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      emoji: "⚡",
      title: "7-Day Fast Incorporation",
      desc: "Name approval to final certificate in 5-7 days with dedicated MCA follow-up",
    },
    {
      emoji: "💰",
      title: "Zero Hidden Charges",
      desc: "Transparent pricing with full breakup. Government fees + professional charges only",
    },
    {
      emoji: "📱",
      title: "100% Digital & Paperless",
      desc: "SPICe+ Part A & B, PAN, TAN, EPFO, ESIC — everything online",
    },
    {
      emoji: "🛡️",
      title: "Expert CA & CS Support",
      desc: "Chartered Accountant + Company Secretary guidance from start to finish",
    },
    {
      emoji: "🔄",
      title: "Post Incorporation Support",
      desc: "GST, Bank A/c, Accounting, ROC Compliances & Annual Filing assistance",
    },
    {
      emoji: "🏆",
      title: "98% First Attempt Success",
      desc: "1200+ successful incorporations with high name approval rate",
    },
  ];

  return (
    <section
      id="benefits"
      className="relative py-24 bg-white text-slate-800 overflow-hidden"
    >
      {/* Background Glow - Light version */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-slate-900">
            Why Choose{" "}
            <span className="text-blue-600">IncorpFast</span>?
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We simplify the entire MCA company registration process for entrepreneurs across India
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-blue-600/20 to-transparent hover:from-blue-600/30 transition-all duration-500"
            >
              <div className="h-full rounded-3xl bg-white p-10 text-center border border-slate-200 group-hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10">
                
                {/* Icon */}
                <div className="text-6xl mb-6 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                  {benefit.emoji}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                  {benefit.title}
                </h3>

                {/* Divider */}
                <div className="w-10 h-[2px] bg-blue-600 mx-auto mb-4 opacity-80 group-hover:w-16 transition-all duration-300"></div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;