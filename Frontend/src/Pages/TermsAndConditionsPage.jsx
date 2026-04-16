export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden py-20 px-6">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gray-200 blur-[120px] rounded-full"></div>

      <div className="max-w-4xl mx-auto relative animate-[fadeIn_0.6s_ease]">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-gray-400 bg-clip-text text-transparent mb-3">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 text-sm">
            Last Updated: April 06, 2026
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 md:p-12 space-y-10 text-gray-700 text-[15px] leading-relaxed">

          {/* About */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-3">
              1. About Us
            </h2>
            <p>
              IncorpFast is a private consultancy platform assisting entrepreneurs
              with company incorporation services. We are not affiliated with
              the Ministry of Corporate Affairs (MCA) or any government body.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-3">
              2. Our Services
            </h2>
            <p>
              We provide professional assistance and guidance for Private Limited
              Company, LLP, OPC, Section 8 Company, and Partnership Firm
              registration including documentation, filing, and compliance support.
            </p>
          </div>

          {/* Liability */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-3">
              3. Limitation of Liability
            </h2>
            <p>
              We are not responsible for delays, rejections, or issues arising
              from MCA processes, government regulations, or incomplete/incorrect
              information provided by the client.
            </p>
          </div>

          {/* Highlight Warning */}
          <div className="bg-yellow-50 border border-yellow-300 border-l-4 border-yellow-500 p-5 rounded-xl">
            <p className="text-yellow-700 text-sm">
              Please ensure that all documents and details provided are accurate
              and complete to avoid delays in your application process.
            </p>
          </div>

          {/* Agreement */}
          <div className="pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">
              By using IncorpFast services, you agree to these Terms & Conditions.
            </p>
          </div>

        </div>

        {/* Footer Note */}
        <div className="text-center mt-10 text-gray-500 text-xs">
          For further clarification, please contact our support team.
        </div>

      </div>
    </div>
  );
}