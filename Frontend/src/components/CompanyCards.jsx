import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Building2, 
  User, 
  Users, 
  ShieldCheck, 
  Handshake 
} from "lucide-react";

const companyTypes = [
  {
    id: 1,
    name: "Private Limited",
    Icon: Building2,           // Capital 'I' - better naming convention
    color: "text-blue-600",
    desc: [
      "Company Name Approval",
      "Certificate of Incorporation",
      "PAN & TAN Number",
      "2 DIN of Directors",
      "2 DSC of Directors",
      "eMOA & eAOA",
      "PF & ESI Registration",
      "Current Account Opening"
    ]
  },
  {
    id: 2,
    name: "OPC Pvt Ltd",
    Icon: User,
    color: "text-emerald-600",
    desc: [
      "Company Name Approval",
      "Certificate of Incorporation",
      "PAN & TAN Number",
      "DIN of Director",
      "DSC of Director",
      "eMOA & eAOA",
      "PF & ESI Registration",
      "Current Account Opening"
    ]
  },
  {
    id: 3,
    name: "LLP Firm",
    Icon: Handshake,
    color: "text-amber-600",
    desc: [
      "Approval of Company Name",
      "Certificate of Incorporation",
      "PAN & TAN Registration",
      "2 DIN of Partners",
      "2 DSC of Partners",
      "LLP Deed Draft",
      "PF & ESI Registration",
      "Current Account Opening"
    ]
  },
  {
    id: 4,
    name: "Section 8 Company",
    Icon: ShieldCheck,
    color: "text-violet-600",
    desc: [
      "Company Name Approval",
      "Certificate of Incorporation",
      "PAN & TAN Registration",
      "2 DIN of Members",
      "2 DSC of Members",
      "eMOA & eAOA",
      "PF & ESI Registration",
      "Current Account Opening"
    ]
  },
  {
    id: 5,
    name: "Partnership Firm",
    Icon: Users,
    color: "text-rose-600",
    desc: [
      "Basic Name Availability Check",
      "Partnership Deed Draft",
      "PAN & TAN Registration",
      "GST Registration",
      "Udyam Registration",
      "Shop Establishment Certificate",
      "Current Account Opening"
    ]
  },
];

const CompanyCards = () => {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    const slug = type.toLowerCase().replace(/\s+/g, "-");
    navigate(`/company-incorporation/${slug}`);
  };

  return (
    <section id="Card" className="relative py-20 bg-white">
      {/* Light Background Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {companyTypes.map((type) => {
            const IconComponent = type.Icon;   // ← This is the correct way

            return (
              <div
                key={type.id}
                onClick={() => handleCardClick(type.name)}
                className="group relative cursor-pointer rounded-3xl p-[1px] bg-gradient-to-b from-blue-600/20 to-transparent hover:from-blue-600/30 transition-all duration-500"
              >
                <div className="h-full rounded-3xl bg-white p-8 text-center border border-slate-200 group-hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col">
                  
                  {/* Professional Icon Container */}
                  <div className={`mx-auto mb-6 p-4 rounded-2xl bg-slate-100 group-hover:bg-blue-50 transition-colors`}>
                    <IconComponent 
                      size={52} 
                      strokeWidth={1.8} 
                      className={`${type.color} transition-all duration-500 group-hover:scale-110`} 
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold mb-5 text-slate-900">
                    {type.name}
                  </h3>

                  {/* Bullet Points */}
                  <ul className="text-left text-slate-600 text-sm leading-relaxed space-y-2 mb-10 flex-1">
                    {type.desc.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1 text-lg leading-none">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(type.name);
                    }}  
                    className="mt-auto w-full py-4 px-6 rounded-2xl bg-blue-600 text-white font-semibold text-sm tracking-wide
                               hover:bg-blue-700 active:bg-blue-800 
                               transition-all duration-300 flex items-center justify-center gap-2
                               group-hover:shadow-lg group-hover:shadow-blue-500/30
                               hover:scale-[1.03] active:scale-[0.98]"
                  >
                    Start Incorporation
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>

                  {/* Subtle Hover Glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-blue-500/5 to-transparent pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyCards;