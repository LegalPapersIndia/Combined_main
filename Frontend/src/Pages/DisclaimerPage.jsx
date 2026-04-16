export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden py-20 px-6">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gray-200 blur-[120px] rounded-full"></div>

      <div className="max-w-4xl mx-auto relative animate-[fadeIn_0.6s_ease]">

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-gray-400 text-white py-12 px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
              Disclaimer
            </h1>
            <p className="text-lg opacity-90">
              Important Information for Company Incorporation Services
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 text-gray-700 leading-relaxed space-y-8 text-[15px]">

            {/* Highlight Box */}
            <div className="bg-blue-50 border border-blue-200 border-l-4 border-blue-500 p-6 rounded-xl">
              <p className="font-semibold text-lg text-blue-900">
                This is a{" "}
                <span className="text-blue-600">private consultancy platform</span>{" "}
                and is{" "}
                <span className="text-red-500">not affiliated</span>{" "}
                with the Ministry of Corporate Affairs (MCA) or any Government department.
              </p>
            </div>

            {/* Paragraphs */}
            <p>
              IncorpFast provides professional assistance and guidance for Company
              Incorporation including Private Limited, LLP, OPC, Section 8 and
              Partnership firms. The fees charged are purely for consultancy and
              professional services.
            </p>

            <p>
              This website is{" "}
              <strong className="text-blue-700">
                not an official Government portal
              </strong>. We assist in documentation, name approval, SPICe+ filing,
              and post-incorporation compliance support to simplify the process
              for our clients.
            </p>

            {/* Divider Section */}
            <div className="pt-6 border-t border-gray-200">
              <p className="italic text-gray-500">
                All payments made on this platform are for consultancy and
                professional services only. Government fees such as MCA fees,
                stamp duty, and statutory charges are paid separately on the
                official MCA portal.
              </p>
            </div>

            {/* Trust Note */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-start gap-3">
              <span className="text-green-500 text-xl">✔</span>
              <p className="text-sm text-gray-600">
                We ensure transparency, compliance, and professional guidance
                throughout your company registration journey.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-10 text-gray-500 text-sm">
          © {new Date().getFullYear()} IncorpFast. All rights reserved.
        </div>

      </div>
    </div>
  );
}