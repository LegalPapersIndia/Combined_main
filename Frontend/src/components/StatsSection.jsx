import React, { useEffect, useState } from "react";

const StatsSection = () => {
  const companyTypes = [
    { icon: "🏢", name: "Private Limited" },
    { icon: "🤝", name: "LLP" },
    { icon: "🛡️", name: "Section 8" },
    { icon: "👥", name: "Partnership" },
    { icon: "👤", name: "OPC" },
  ];

  // Animated Counter Hook
  const useCounter = (end, duration = 1500) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end, duration]);

    return count;
  };

  const stats = [
    { value: 50000, label: "Total Enquiries" },
    { value: 5000, label: "Companies Incorporated" },
    { value: 3100, label: "Private Limited" },
    { value: 1000, label: "LLP Applications" },
    { value: 600, label: "One Person Company" },
    { value: 500, label: "Section 8 Company" },
    { value: 6000, label: "Name Reservations" },
    { value: 4000, label: "Annual Compliances" },
  ];

  // ✅ Comparison Table Data (Correct Name)
  const comparisonFeatures = [
    { feature: "Legal Identity", pvt: "Separate legal entity", opc: "Separate legal entity", llp: "Separate legal entity", section8: "Separate legal entity", partnership: "No separate legal identity" },
    { feature: "Liability", pvt: "Limited to shareholding", opc: "Limited to shareholding", llp: "Limited to agreed contribution", section8: "Limited", partnership: "Unlimited personal liability" },
    { feature: "Minimum Members", pvt: "2", opc: "1", llp: "2", section8: "2", partnership: "2" },
    { feature: "Ownership & Control", pvt: "Shareholders", opc: "Single owner", llp: "Partners share management", section8: "Members / Trustees", partnership: "Partners share responsibility" },
    { feature: "Compliance Level", pvt: "High", opc: "Medium", llp: "Medium to High", section8: "High", partnership: "Low" },
    { feature: "Fundraising", pvt: "Easy (Equity & Debt)", opc: "Limited", llp: "Moderate", section8: "Difficult (Non-profit)", partnership: "Limited" },
    { feature: "Credibility", pvt: "Very High", opc: "High", llp: "High", section8: "High", partnership: "Moderate" },
    { feature: "Suitability", pvt: "Expansion & Scaling", opc: "Solo Entrepreneurs", llp: "Professional Services", section8: "Non-profit / Charity", partnership: "Small Businesses" },
  ];

  return (
    <section
      id="stats"
      className="relative py-16 md:py-24 bg-white text-slate-800 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-500/10 blur-[120px] md:blur-[140px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
            Our Journey & <span className="text-blue-600">Live Stats</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Real-time company incorporation insights across India
          </p>
        </div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">
          {stats.map((stat, i) => {
            const count = useCounter(stat.value);
            return (
              <div
                key={i}
                className="group rounded-2xl p-[1px] bg-gradient-to-br from-blue-600/10 to-transparent hover:from-blue-600/20 transition-all duration-500"
              >
                <div className="rounded-2xl bg-white p-6 md:p-8 text-center border border-slate-200 group-hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {count.toLocaleString()}+
                  </div>
                  <div className="text-slate-600 text-sm md:text-base font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== COMPARISON TABLE ==================== */}
        <div className="mb-12 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-slate-900">
            Difference Between Private Limited Company and Other Business Structures
          </h3>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full min-w-[900px] text-sm md:text-base">
              <thead>
                <tr className="bg-gradient-to-r from-blue-700 to-blue-600 text-white">
                  <th className="text-left p-5 font-semibold rounded-tl-3xl">Aspect</th>
                  <th className="text-center p-5 font-semibold">Private Limited</th>
                  <th className="text-center p-5 font-semibold">OPC</th>
                  <th className="text-center p-5 font-semibold">LLP</th>
                  <th className="text-center p-5 font-semibold">Section 8</th>
                  <th className="text-center p-5 font-semibold rounded-tr-3xl">Partnership</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonFeatures.map((row, index) => (   // ← Fixed: Now using comparisonFeatures
                  <tr key={index} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-5 font-medium text-slate-700 border-r border-slate-100">
                      {row.feature}
                    </td>
                    <td className="p-5 text-center text-slate-700">{row.pvt}</td>
                    <td className="p-5 text-center text-slate-700">{row.opc}</td>
                    <td className="p-5 text-center text-slate-700">{row.llp}</td>
                    <td className="p-5 text-center text-slate-700">{row.section8}</td>
                    <td className="p-5 text-center text-slate-700">{row.partnership}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          
          {/* Applications This Month */}
          <div className="rounded-3xl p-[1px] bg-gradient-to-br from-blue-600/10 to-transparent">
            <div className="rounded-3xl bg-white p-6 md:p-8 border border-slate-200 h-full">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-slate-900">
                Applications This Month
              </h3>
              <div className="space-y-6 md:space-y-8">
                {companyTypes.map((type, i) => {
                  const value = 20 + Math.floor(Math.random() * 35);
                  return (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl md:text-3xl">{type.icon}</span>
                          <span className="text-slate-700 font-medium text-base md:text-lg">
                            {type.name}
                          </span>
                        </div>
                        <span className="text-blue-600 font-semibold text-lg">+{value}</span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(value * 2.2, 98)}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* MCA Portal Insights */}
          <div className="rounded-3xl p-[1px] bg-gradient-to-br from-blue-600/10 to-transparent">
            <div className="rounded-3xl bg-white p-6 md:p-8 border border-slate-200 h-full">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-slate-900">
                MCA Portal Insights
              </h3>
              <div className="space-y-5 md:space-y-6 text-sm md:text-base">
                <div className="flex justify-between border-b border-slate-200 pb-4">
                  <span className="text-slate-600">Total Companies in India</span>
                  <span className="font-mono text-slate-900 font-semibold">18,47,392</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-4">
                  <span className="text-slate-600">New Registrations Today</span>
                  <span className="font-mono text-emerald-600 font-semibold">1,284</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-4">
                  <span className="text-slate-600">LLP Filings This Week</span>
                  <span className="font-mono text-slate-900 font-semibold">3,927</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">SPICe+ Applications (Today)</span>
                  <span className="font-mono text-amber-600 font-semibold">892</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;