// src/components/Sections/FSSAIFAQSection.jsx

export default function FSSAIFAQSection() {
  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-green-50"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-10">
          FSSAI License – Frequently Asked Questions
        </h2>

        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center text-gray-600 mb-16 leading-relaxed">
          <p>
            Food safety is extremely important because it directly impacts
            public health. In India, the Food Safety and Standards Authority of
            India (FSSAI) ensures that food consumed by the public meets safety
            and quality standards. Because of its importance in the food
            industry, many businesses and individuals have questions regarding
            FSSAI regulations, licensing, and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {[
              {
                title:
                  "What is the role of the Quality Assurance/Lab Division in FSSAI?",
                content:
                  "The Quality Assurance/Lab Division is responsible for testing food products and collecting data for analysis. This information supports law enforcement, policy development, and food safety awareness. Testing is conducted in FSSAI-approved government and private laboratories.",
              },
              {
                title: "What are the different types of FSSAI licenses?",
                content: (
                  <>
                    <p>FSSAI issues three types of licenses:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>
                        <b>Basic Registration:</b> Up to ₹12 lakh turnover
                      </li>
                      <li>
                        <b>State License:</b> ₹12 lakh – ₹20 crore turnover
                      </li>
                      <li>
                        <b>Central License:</b> Above ₹20 crore or multi-state
                        operations
                      </li>
                    </ul>
                  </>
                ),
              },
              {
                title: "What does the HR Division of FSSAI do?",
                content:
                  "The HR Division manages recruitment, payroll, and employee administration within FSSAI. It focuses on internal organizational management rather than direct food safety regulation.",
              },
              {
                title: "Which laws were repealed with the creation of FSSAI?",
                content: (
                  <>
                    <p>The Food Safety and Standards Act, 2006 replaced:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Prevention of Food Adulteration Act, 1954</li>
                      <li>Fruit Products Order, 1955</li>
                      <li>Meat Food Products Order, 1973</li>
                      <li>Vegetable Oil Products Order, 1947</li>
                      <li>Edible Oils Packaging Order, 1998</li>
                      <li>Solvent Extracted Oil Order, 1967</li>
                      <li>Milk and Milk Products Order, 1992</li>
                    </ul>
                  </>
                ),
              },
              {
                title:
                  "What is the responsibility of the Standards Division of FSSAI?",
                content:
                  "The Standards Division develops and maintains food safety standards. These standards guide food production, testing procedures, and regulatory enforcement across the country.",
              },
              {
                title: "How can I check the validity of my FSSAI license?",
                content:
                  "You can verify your license on the official FSSAI website by entering your 14-digit license number under the License/Registration verification section.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-green-100 rounded-2xl shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-orange-50 transition-all duration-300"
              >
                <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-semibold text-gray-800 border-l-4 border-green-600">
                  {faq.title}
                  <span className="text-2xl font-bold text-green-600 transform transition-transform duration-300 group-open:rotate-45">
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
                title: "Does FSSAI regulate GM or organic foods?",
                content:
                  "Currently, FSSAI does not regulate genetically modified foods. Organic food labeling is mainly handled through third-party certifications.",
              },
              {
                title: "What are the penalties under FSSAI regulations?",
                content:
                  "Under Section 39 of the FSS Act, violations can attract penalties up to ₹1,00,000. Filing false complaints may lead to penalties between ₹50,000 and ₹1,00,000.",
              },
              {
                title: "What are FSSAI’s research responsibilities?",
                content: (
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Improving food safety research methods</li>
                    <li>Developing new testing standards</li>
                    <li>Addressing emerging food safety risks</li>
                  </ul>
                ),
              },
              {
                title: "Is FSSAI license mandatory for food businesses?",
                content:
                  "Yes. Every food business operator involved in manufacturing, packaging, storage, distribution, or sale of food must obtain an FSSAI license or registration.",
              },

              {
                title: "Who are the members of FSSAI and what is their tenure?",
                content:
                  "Members include representatives from government ministries, scientists, state authorities, consumer organizations, and industry bodies. Non-official members usually serve a 3-year term.",
              },
              {
                title:
                  "Can I transfer my FSSAI license to another person or entity?",
                content:
                  "No. FSSAI licenses are non-transferable. However, in case of the license holder’s death, legal heirs may apply for transfer through proper documentation.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-green-100 rounded-2xl shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-orange-50 transition-all duration-300"
              >
                <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-semibold text-gray-800 border-l-4 border-green-600">
                  {faq.title}
                  <span className="text-2xl font-bold text-green-600 transform transition-transform duration-300 group-open:rotate-45">
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
