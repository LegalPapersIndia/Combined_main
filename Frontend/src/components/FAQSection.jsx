import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is the difference between Private Limited and LLP?",
      a: "Private Limited offers limited liability, perpetual succession and is best for raising funds. LLP is flexible with low compliance and suitable for professionals."
    },
    {
      q: "Is minimum capital required for company incorporation?",
      a: "No minimum capital required for Pvt Ltd, LLP, OPC & Partnership as per Companies Act 2013."
    },
    {
      q: "How long does MCA company registration take?",
      a: "Usually 7–15 working days including name approval, incorporation, PAN & TAN."
    },
    {
      q: "Can NRI or Foreign National register a company in India?",
      a: "Yes, NRIs and foreign nationals can register a company with proper documentation and compliance."
    },
    {
      q: "Do I need a physical office for company registration?",
      a: "No, you only need a registered office address. Home or virtual office is acceptable."
    },
    {
      q: "What documents are required for directors?",
      a: "PAN, Aadhaar, bank statement, and address proof are required for all directors."
    },
    {
      q: "Is GST registration mandatory after incorporation?",
      a: "GST is required only if your turnover exceeds threshold or for certain businesses."
    },
    {
      q: "Can I change company name later?",
      a: "Yes, company name can be changed by filing necessary forms with MCA."
    },
  ];

  const mid = Math.ceil(faqs.length / 2);
  const leftFAQs = faqs.slice(0, mid);
  const rightFAQs = faqs.slice(mid);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderFAQ = (faqList, offset = 0) =>
    faqList.map((faq, index) => {
      const actualIndex = index + offset;
      const isOpen = openIndex === actualIndex;

      return (
        <div
        id="faq"
          key={actualIndex}
          onClick={() => toggleFAQ(actualIndex)}
          className="group cursor-pointer rounded-2xl p-[1px] bg-gradient-to-br from-blue-600/10 to-transparent hover:from-blue-600/20 transition-all duration-500"
        >
          <div className="rounded-2xl bg-white p-6 border border-slate-200 group-hover:border-blue-500/40 transition-all duration-500 hover:shadow-lg">
            
            {/* Question */}
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-lg text-slate-900">
                {faq.q}
              </h3>

              {/* Icon */}
              <span className="text-blue-600 text-2xl font-light transition-all duration-300">
                {isOpen ? "−" : "+"}
              </span>
            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen ? "max-h-40 mt-4" : "max-h-0"
              }`}
            >
              <p className="text-slate-600 text-sm leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        </div>
      );
    });

  return (
    <section className="py-24 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-slate-600 mt-4 text-lg">
            Everything you need to know about company registration
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {renderFAQ(leftFAQs, 0)}
          </div>

          <div className="space-y-6">
            {renderFAQ(rightFAQs, mid)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;