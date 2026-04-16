// src/components/Pages/RefundPolicyPage.jsx

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Refund Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Last Updated: March 07, 2026
          </p>
        </div>

        {/* Summary Banner */}
        <div className="bg-gradient-to-r from-blue-100 to-sky-100 border-l-4 border-blue-600 p-6 md:p-8 rounded-xl mb-12 text-gray-800 shadow-md">
          <p className="text-lg font-semibold mb-3">
            Quick Summary
          </p>

          <p className="leading-relaxed mb-4">
            We offer a fair and transparent refund policy for our consultancy services related to 
            <strong> GST registration and tax compliance services</strong>.
            Refunds are processed only if we are unable to deliver the committed service due to our fault.
          </p>

          <p className="leading-relaxed">
            Our grievance team aims to review refund requests and resolve them within 
            <strong> 7 working days</strong>.
          </p>
        </div>

        {/* Main Policy */}
        <div className="space-y-10">

          {/* Refund Commitment */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Refund Commitment
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              You can easily reach us with your grievance. Our refund department will assess the matter and if it finds
              non-catering of services on our part, we will gladly refund your payment within 
              <strong> 7 working days</strong> from the date of refund request.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We follow a <strong>money-back guarantee policy</strong> if we are unable to process your 
              GST registration or compliance service as committed by us.
            </p>
          </section>

          {/* Important Notes */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Important Notes
            </h2>

            <ul className="space-y-4 text-gray-700">

              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold mt-1">•</span>
                <span>
                  <strong>No refund shall be issued</strong> if you have already availed any complimentary
                  service or discount offer attached to the paid service.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold mt-1">•</span>
                <span>
                  <strong>INR 300 administrative charges</strong> will be deducted if the application cannot
                  be processed due to non-submission of required documents, non-cooperation, or failure to
                  follow government guidelines.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold mt-1">•</span>
                <span>
                  <strong>No refund</strong> shall be issued if the application has been processed as per 
                  government guidelines but the GST registration or certificate issuance is delayed by 
                  GST authorities.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold mt-1">•</span>
                <span>
                  Any <strong>government fee, challan, or statutory charges</strong> paid during the
                  processing of GST registration will be deducted from the refund amount.
                </span>
              </li>

            </ul>
          </section>

          {/* Refund Request */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How to Request a Refund
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              If you believe you are eligible for a refund:
            </p>

            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>
                Contact us via email at <strong>info@gstindia-registration.org</strong> or call 
                <strong> +91-9211037448</strong>.
              </li>

              <li>
                Provide your order/reference number, payment date, and the reason for the refund request.
              </li>

              <li>
                Our team will review your request within <strong>2–3 working days</strong>.
              </li>

              <li>
                If approved, the refund will be processed to your original payment method within 
                <strong> 7 working days</strong>.
              </li>
            </ol>
          </section>

          {/* Final Note */}
          <section className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-8 text-center border border-blue-200">
            <p className="text-lg text-gray-800 font-medium">
              We value your trust and are committed to providing transparent and reliable 
              consultancy services for GST registration and tax compliance.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}