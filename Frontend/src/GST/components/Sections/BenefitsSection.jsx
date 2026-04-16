// src/components/Sections/GSTBenefitsSection.jsx

export default function GSTBenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-sky-50"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14 md:mb-20 text-gray-800 underline decoration-4 decoration-blue-600 underline-offset-8">
          Learn More About GST Registration in India
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-12">

          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {[
              {
                title: "Who needs to register for GST?",
                content: (
                  <>
                    <p>GST registration is mandatory if:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5">
                      <li>Your annual turnover exceeds ₹20 lakh (₹10 lakh in special category states)</li>
                      <li>You are engaged in inter-state supply of goods or services</li>
                      <li>You are an e-commerce operator or aggregator</li>
                      <li>You are required to pay tax under reverse charge mechanism</li>
                      <li>You are a casual taxable person or non-resident taxable person</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "What are the penalties for not registering under GST?",
                content: (
                  <>
                    <p>Operating without GST registration when required can attract heavy penalties:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5">
                      <li>Penalty of 10% of tax due or ₹10,000 (whichever is higher)</li>
                      <li>Interest on unpaid tax</li>
                      <li>Possible legal action and prosecution in serious cases</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "What are the types of GST registration?",
                content: (
                  <>
                    <p>GST offers different registration types based on your business needs:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5">
                      <li><strong>Regular Registration</strong> – For businesses with turnover above threshold</li>
                      <li><strong>Composition Scheme</strong> – For small businesses (turnover up to ₹1.5 crore)</li>
                      <li><strong>Voluntary Registration</strong> – Even if turnover is below threshold</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "Can I claim Input Tax Credit (ITC) after GST registration?",
                content:
                  "Yes. Once registered under GST, you can claim Input Tax Credit on GST paid on business purchases, raw materials, and services, which helps reduce your tax liability.",
              },
              {
                title: "What documents are required for GST registration?",
                content: (
                  <>
                    <p>Common documents needed include:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5">
                      <li>PAN Card of the applicant / business</li>
                      <li>Aadhaar Card</li>
                      <li>Proof of business address (rent agreement, electricity bill, etc.)</li>
                      <li>Bank account details</li>
                      <li>Photographs of proprietor / directors</li>
                    </ul>
                  </>
                ),
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 transition-all duration-300 border border-blue-100"
              >
                <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-semibold text-base md:text-lg text-gray-800 border-l-4 border-blue-600">
                  {item.title}
                  <span className="text-3xl font-bold text-blue-600 transform transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="px-6 pb-6 pt-3 text-gray-700 leading-relaxed text-[15px] md:text-base">
                  {item.content}
                </div>
              </details>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {[
              {
                title: "What is the difference between Regular and Composition Scheme?",
                content:
                  "Under Regular Scheme, you charge GST to customers and claim Input Tax Credit. Under Composition Scheme, you pay a fixed percentage of turnover as tax and cannot charge GST or claim ITC.",
              },
              {
                title: "Is GST registration mandatory for service providers?",
                content:
                  "Yes. Service providers with turnover exceeding ₹20 lakh (₹10 lakh in special category states) must register under GST.",
              },
              {
                title: "How long does it take to get GST registration?",
                content:
                  "Usually, GST registration is granted within 3 to 7 working days after successful submission of application and documents, subject to approval by the GST department.",
              },
              {
                title: "Can I cancel my GST registration?",
                content:
                  "Yes. You can apply for GST cancellation if your business is closed, turnover falls below threshold, or for any other valid reason as per GST rules.",
              },
              {
                title: "Do I need separate GST registration for each state?",
                content: (
                  <>
                    <p>Yes. If you have business operations in multiple states, you generally need to obtain separate GST registration in each state.</p>
                  </>
                ),
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 transition-all duration-300 border border-blue-100"
              >
                <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-semibold text-base md:text-lg text-gray-800 border-l-4 border-blue-600">
                  {item.title}
                  <span className="text-3xl font-bold text-blue-600 transform transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="px-6 pb-6 pt-3 text-gray-700 leading-relaxed text-[15px] md:text-base">
                  {item.content}
                </div>
              </details>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}