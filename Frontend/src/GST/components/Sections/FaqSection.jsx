// src/components/Sections/GSTFAQSection.jsx

export default function GSTFAQSection() {
  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-sky-50"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-10">
          GST Registration – Frequently Asked Questions
        </h2>

        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center text-gray-600 mb-16 leading-relaxed">
          <p>
            Goods and Services Tax (GST) is one of the most important tax reforms in India. 
            It has simplified the indirect taxation system and brought transparency in business operations. 
            Many businesses and individuals have common questions regarding GST registration, compliance, 
            and filing procedures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {[
              {
                title: "Who is required to register under GST?",
                content:
                  "Any person or business whose annual turnover exceeds ₹20 lakh (₹10 lakh in special category states) must register for GST. Inter-state suppliers, e-commerce operators, and those liable to pay tax under reverse charge are also required to register.",
              },
              {
                title: "What are the different types of GST registration?",
                content: (
                  <>
                    <p>There are mainly three types of GST registration:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><b>Regular Registration</b> – Standard GST registration</li>
                      <li><b>Composition Scheme</b> – For small businesses with turnover up to ₹1.5 crore</li>
                      <li><b>Voluntary Registration</b> – Even if turnover is below the threshold</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "What is the difference between Regular and Composition Scheme?",
                content:
                  "Under Regular GST, you can charge GST to customers and claim Input Tax Credit (ITC). Under Composition Scheme, you pay a fixed percentage of turnover as tax, cannot charge GST separately, and cannot claim ITC.",
              },
              {
                title: "How long does it take to get GST registration?",
                content:
                  "Once the application is submitted with correct documents, GST registration is usually granted within 3 to 7 working days, subject to approval by the GST officer.",
              },
              {
                title: "Can I claim Input Tax Credit after GST registration?",
                content:
                  "Yes. Registered taxpayers under the regular scheme can claim Input Tax Credit on GST paid on business purchases, raw materials, and services used for taxable supplies.",
              },
              {
                title: "Is GST registration mandatory for service providers?",
                content:
                  "Yes. Service providers whose annual turnover exceeds ₹20 lakh (₹10 lakh in special category states) are required to register under GST.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 transition-all duration-300"
              >
                <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-semibold text-gray-800 border-l-4 border-blue-600">
                  {faq.title}
                  <span className="text-2xl font-bold text-blue-600 transform transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="px-6 pb-6 pt-2 text-gray-700 text-sm md:text-base leading-relaxed">
                  {faq.content}
                </div>
              </details>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {[
              {
                title: "What documents are required for GST registration?",
                content: (
                  <>
                    <p>Commonly required documents include:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>PAN Card of the applicant/business</li>
                      <li>Aadhaar Card</li>
                      <li>Proof of business address</li>
                      <li>Bank account details &amp; cancelled cheque</li>
                      <li>Photographs of proprietor / directors / partners</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "Can I cancel my GST registration?",
                content:
                  "Yes. You can apply for cancellation of GST registration if your business is closed, turnover falls below the threshold limit, or for any other valid reason as per GST rules.",
              },
              {
                title: "What are the penalties for not registering under GST?",
                content:
                  "Failure to register when required can attract a penalty of 10% of the tax due or ₹10,000 (whichever is higher), along with interest on unpaid tax.",
              },
              {
                title: "Do I need separate GST registration for each state?",
                content:
                  "Yes. If you operate your business in multiple states, you are generally required to obtain separate GST registration in each state where you have a place of business.",
              },
              {
                title: "Is GST registration mandatory for e-commerce sellers?",
                content:
                  "Yes. E-commerce operators and sellers supplying goods/services through e-commerce platforms are required to register under GST irrespective of their turnover in many cases.",
              },
              {
                title: "Can I transfer my GST registration to another person?",
                content:
                  "No. GST registration is non-transferable. In case of death of the proprietor or change in constitution, you may need to apply for fresh registration or amendment as per rules.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 transition-all duration-300"
              >
                <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-semibold text-gray-800 border-l-4 border-blue-600">
                  {faq.title}
                  <span className="text-2xl font-bold text-blue-600 transform transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="px-6 pb-6 pt-2 text-gray-700 text-sm md:text-base leading-relaxed">
                  {faq.content}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}