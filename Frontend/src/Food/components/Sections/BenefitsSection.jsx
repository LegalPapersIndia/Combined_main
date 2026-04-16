// src/components/Sections/FSSAIBenefitsSection.jsx

export default function FSSAIBenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-green-50"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14 md:mb-20 text-gray-800 underline decoration-4 decoration-green-500 underline-offset-8">
          Learn More About FSSAI Food License & Registration
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-12">

          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {[
              {
                title: "How does the consumer benefit from the FSSAI?",
                content: (
                  <>
                    <p>Consumer benefits include:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5">
                      <li>Availability of quality food</li>
                      <li>Better health standards</li>
                      <li>Reliable food safety information</li>
                      <li>Regulated entry into the food business</li>
                      <li>Compensation provision for poor-quality food complaints</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "What are the penalties for operating without an FSSAI license?",
                content: (
                  <>
                    <p>Operating without an FSSAI license violates the Food Safety and Standards Act, 2006.</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5">
                      <li>Monetary fines up to ₹5 lakh</li>
                      <li>Business closure for repeated violations</li>
                      <li>Legal action including imprisonment in severe cases</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "What are the licenses currently issued by the FSSAI?",
                content: (
                  <>
                    <p>FSSAI issues licenses based on annual turnover:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5">
                      <li>Basic Registration – Turnover below ₹12 lakh</li>
                      <li>State License – Turnover ₹12 lakh to ₹20 crore</li>
                      <li>Central License – Turnover above ₹20 crore</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "Are private laboratories part of the FSSAI network?",
                content:
                  "Yes. Apart from government laboratories, FSSAI also accredits private labs that are part of the national food safety testing network.",
              },
              {
                title: "What are the quality assurance functions of FSSAI?",
                content: (
                  <>
                    <p>FSSAI ensures food safety through:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5">
                      <li>Quality ingredients</li>
                      <li>Safe food manufacturing processes</li>
                      <li>Proper packaging standards</li>
                      <li>Safe storage facilities</li>
                      <li>Regulation of imported food items</li>
                    </ul>
                  </>
                ),
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-orange-50 transition-all duration-300 border border-green-100"
              >
                <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-semibold text-base md:text-lg text-gray-800 border-l-4 border-green-600">
                  {item.title}
                  <span className="text-3xl font-bold text-green-600 transform transition-transform duration-300 group-open:rotate-45">
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
                title: "Is FSSAI registration mandatory for home-based food businesses?",
                content:
                  "Yes. Even home-based food sellers, bakers, and small caterers must obtain FSSAI Basic Registration if their turnover is below ₹12 lakh.",
              },
              {
                title: "Does FSSAI investigate food-borne illness complaints?",
                content:
                  "Yes. FSSAI along with State Food Authorities investigates food safety complaints including food poisoning, contamination, or foreign object issues.",
              },
              {
                title: "Does FSSAI provide microbiological guidelines for food safety?",
                content:
                  "FSSAI provides microbiological standards and guidelines related to food safety to ensure hygiene and quality in food production.",
              },
              {
                title: "What laboratory infrastructure exists for food testing in India?",
                content:
                  "India has a large network of government and private laboratories approved by FSSAI to test food quality and safety standards.",
              },
              {
                title: "Can average people reach the FSSAI?",
                content: (
                  <>
                    <p>Yes. People can contact FSSAI through:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5">
                      <li>Telephone</li>
                      <li>Email</li>
                      <li>Online grievance portals</li>
                    </ul>
                  </>
                ),
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-orange-50 transition-all duration-300 border border-green-100"
              >
                <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-semibold text-base md:text-lg text-gray-800 border-l-4 border-green-600">
                  {item.title}
                  <span className="text-3xl font-bold text-green-600 transform transition-transform duration-300 group-open:rotate-45">
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