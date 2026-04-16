// src/components/Pages/GSTDisclaimerPage.jsx

export default function GSTDisclaimerPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-10 px-6 md:px-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Disclaimer Policy
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Important Information Regarding Our GST Consultancy Services
            </p>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 lg:p-12 text-gray-700 leading-relaxed">

            {/* Consultancy Notice */}
            <p className="text-lg mb-6">
              <strong className="text-blue-600">
                The fees charged on this website are purely consultancy fees
                for professional assistance and guidance related to GST
                registration and compliance.
              </strong>
            </p>

            {/* Main Legal Notice */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-md mb-8">
              <p className="font-semibold text-blue-900 text-lg">
                This website is a privately owned portal and is not affiliated
                with the Goods and Services Tax Network (GSTN) or any Government department.
              </p>
            </div>

            <div className="space-y-6">

              <p>
                This website is owned and operated by a private consultancy
                firm providing professional services related to GST registration
                and tax compliance. We do not represent or claim any official 
                association with the Goods and Services Tax Network (GSTN), 
                Central Board of Indirect Taxes and Customs (CBIC), or any 
                Government authority.
              </p>

              <p>
                This is <strong>not an official Government website</strong>.
                The forms available on this portal are designed only to collect
                basic information from individuals or businesses interested in
                GST registration services so that our consultants can provide
                appropriate guidance and assistance.
              </p>

              <p>
                Our consultancy services include assistance with the following
                GST-related services:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>New GST Registration</li>
                <li>GST Registration for Composition Scheme</li>
                <li>Regular GST Registration</li>
                <li>GST Modification / Amendment</li>
                <li>GST Cancellation</li>
                <li>GST Compliance &amp; Filing Guidance</li>
                <li>Application filing and documentation support</li>
              </ul>

              <div className="pt-6 border-t border-gray-200">
                <p className="italic text-gray-600">
                  All payments made through this portal are strictly for
                  consultancy and professional assistance services. These
                  charges do not include official Government fees, which may
                  need to be paid separately on the official GST Portal 
                  (gst.gov.in) if applicable.
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}