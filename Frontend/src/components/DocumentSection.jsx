import React from "react";

const DocumentsSection = () => {
  const documents = [
    {
      type: "Private Limited / OPC",
      docs: [
        "PAN Card of all Directors",
        "Aadhaar Card of all Directors",
        "Bank Statement / Cancelled Cheque",
        "Latest Electricity Bill / Rent Agreement (for address proof)",
        "Passport Size Photos",
        "Email ID and Mobile Number of Directors",
      ],
      color: "from-blue-600 to-cyan-500",
    },
    {
      type: "LLP",
      docs: [
        "PAN Card of all Partners",
        "Aadhaar Card of all Partners",
        "Bank Statement / Cancelled Cheque",
        "Address Proof of Registered Office",
        "Digital Signature Certificate (DSC)",
        "Partnership Deed (if already exists)",
      ],
      color: "from-emerald-600 to-teal-500",
    },
    {
      type: "Section 8 Company",
      docs: [
        "PAN & Aadhaar of all Directors",
        "MoA & AoA Draft",
        "Objects of the Company (Non-Profit)",
        "Bank Statement",
        "Address Proof",
        "No Objection Certificate (if required)",
      ],
      color: "from-amber-600 to-orange-500",
    },
    {
      type: "Partnership Firm",
      docs: [
        "PAN Card of all Partners",
        "Aadhaar Card of all Partners",
        "Partnership Deed",
        "Bank Account Details",
        "Address Proof of Office",
        "Photos of Partners",
      ],
      color: "from-violet-600 to-purple-500",
    },
  ];

  return (
    <section className="relative py-24 bg-white text-slate-800 overflow-hidden">
      
      {/* Light Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Documents <span className="text-blue-600">Required</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Get your company registered faster by keeping these documents ready
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {documents.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-blue-600/10 to-transparent hover:from-blue-600/20 transition-all duration-500"
            >
              <div className="h-full rounded-3xl bg-white border border-slate-200 group-hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
                
                {/* Header */}
                <div className={`bg-gradient-to-r ${item.color} px-8 py-6`}>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {item.type}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-8">
                  <ul className="space-y-4">
                    {item.docs.map((doc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-600 group-hover:text-slate-800 transition-colors duration-300"
                      >
                        {/* Custom Check Icon */}
                        <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs font-bold">
                          ✓
                        </div>

                        <span className="text-sm md:text-base leading-relaxed">
                          {doc}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Note */}
                  <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500">
                    Note: All documents should be self-attested. Scanned copies in PDF/JPG format required.
                  </div>
                </div>

                {/* Hover Glow Overlay */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-blue-500/5 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center mt-14">
          <p className="text-slate-500 text-sm">
            Not sure which documents you need? Our experts will guide you after form submission.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;