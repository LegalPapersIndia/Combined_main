// src/components/Sections/DocumentsRequiredSection.jsx

import { useState } from "react";
import pan from "../../Assest/Pan.jpg";
import aadhar from "../../Assest/aadhaar.jpg";
import photo from "../../Assest/profile.jpg";
import business from "../../Assest/Bussiness.webp";
import address from "../../Assest/address.webp";

const categories = [
  {
    id: "proprietorship",
    label: "Proprietorship",
    documents: [
      { title: "PAN Card of the Owner", icon: pan },
      { title: "Aadhaar Card of the Owner", icon: aadhar },
      { title: "Photograph of the Owner", note: "(JPG, max 100 KB)", icon: photo },
      { title: "Business Address Proof", icon: address, note: "(Electricity bill / Rent agreement / Property tax receipt)" },
      { title: "Bank Account Details", icon: business, note: "(Cancelled cheque / Bank statement)" },
    ],
  },
  {
    id: "partnership",
    label: "Partnership Firm",
    documents: [
      { title: "PAN Card of the Firm", icon: pan },
      { title: "PAN & Aadhaar of All Partners", icon: aadhar },
      { title: "Partnership Deed (Notarised)", icon: business },
      { title: "Photograph of All Partners", note: "(JPG, max 100 KB)", icon: photo },
      { title: "Business Address Proof", icon: address, note: "(Rent agreement / NOC / Utility bill)" },
    ],
  },
  {
    id: "llp",
    label: "LLP Firm",
    documents: [
      { title: "PAN Card of the LLP", icon: pan },
      { title: "Certificate of Incorporation", icon: business },
      { title: "LLP Agreement", icon: business },
      { title: "PAN & Aadhaar of Designated Partners", icon: aadhar },
      { title: "Photograph of Partners / Authorised Signatory", note: "(JPG, max 100 KB)", icon: photo },
      { title: "Business Address Proof", icon: address },
    ],
  },
  {
    id: "company",
    label: "OPC / Pvt Limited / Section 8",
    documents: [
      { title: "PAN Card of the Company", icon: pan },
      { title: "Certificate of Incorporation", icon: business },
      { title: "MoA & AoA", icon: business, note: "(For Pvt Ltd & Section 8)" },
      { title: "PAN & Aadhaar of Directors", icon: aadhar },
      { title: "Photograph of Directors", note: "(JPG, max 100 KB)", icon: photo },
      { title: "Board Resolution / Authorisation Letter", icon: business },
      { title: "Business Address Proof", icon: address },
    ],
  },
];

export default function DocumentsRequiredSection() {
  const [activeCategory, setActiveCategory] = useState("proprietorship");

  const currentCategory = categories.find((cat) => cat.id === activeCategory);

  return (
    <section id="documents" className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-5 py-2 rounded-full mb-4">
            📋 REQUIRED DOCUMENTS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Documents Required for<br />GST Registration
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Select your business type to see the exact documents needed.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-semibold text-sm md:text-base transition-all ${
                activeCategory === category.id
                  ? "bg-blue-700 text-white shadow-lg"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-blue-300"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Documents Grid for Selected Category */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {currentCategory.documents.map((doc, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Gradient Top Bar */}
                <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-700" />

                <div className="p-8 pb-10 flex flex-col items-center text-center">
                  
                  {/* Icon */}
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-white rounded-2xl flex items-center justify-center mb-7 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={doc.icon} 
                      alt={doc.title}
                      className="w-16 h-16 object-contain drop-shadow-sm" 
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight mb-2">
                    {doc.title}
                  </h3>

                  {/* Note */}
                  {doc.note && (
                    <p className="text-sm text-cyan-700 font-medium mt-1">
                      {doc.note}
                    </p>
                  )}
                </div>

                {/* Decorative bottom element */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 text-gray-600 bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 max-w-2xl">
            <span className="text-2xl">ℹ️</span>
            <p className="text-base">
              All documents must be clear, recent, and in the prescribed digital format. 
              Government fees and bank details may also be required during filing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}