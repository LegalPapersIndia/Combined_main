export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden py-20 px-6">

      {/* Soft Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gray-200 blur-[120px] rounded-full"></div>

      <div className="max-w-4xl mx-auto relative animate-[fadeIn_0.6s_ease]">

        {/* Header */}
        <div className="text-center mb-16">
<h1 className="text-5xl font-extrabold text-blue-700 mb-3">
  Refund Policy
</h1>
          <p className="text-gray-500 text-sm">
            Last Updated: April 06, 2026
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">

          {/* Commitment */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-700 leading-relaxed text-[15px]">
              We maintain a transparent refund policy for all company incorporation
              consultancy services. Refunds are processed only in cases where we
              are unable to deliver the committed service due to issues from our
              side.
            </p>
          </div>

          {/* Non Refund */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">
              When Refund is Not Possible
            </h2>

            <div className="space-y-5">

              <div className="flex items-start gap-4">
                <span className="text-red-500 text-xl">✕</span>
                <p className="text-gray-700 text-sm">
                  If name approval is completed or incorporation process has
                  already started on the MCA portal
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-red-500 text-xl">✕</span>
                <p className="text-gray-700 text-sm">
                  If client fails to provide required documents or information
                  within the given timeline
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-red-500 text-xl">✕</span>
                <p className="text-gray-700 text-sm">
                  Government fees such as MCA charges, stamp duty, etc. once paid
                  are non-refundable
                </p>
              </div>

            </div>
          </div>

          {/* Refund Process */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">
              How to Request Refund
            </h2>

            <div className="space-y-4">

              <div className="flex gap-4">
                <span className="text-blue-600 font-bold">1.</span>
                <p className="text-gray-700 text-sm">
                  Email us at <span className="text-blue-600">info@incorpfast.org</span> with your Application ID and reason
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-blue-600 font-bold">2.</span>
                <p className="text-gray-700 text-sm">
                  Our team will review your request within 48 hours
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-blue-600 font-bold">3.</span>
                <p className="text-gray-700 text-sm">
                  If approved, the refund will be processed within 5–7 working days
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-500 text-xs">
          For any queries, feel free to contact our support team.
        </div>

      </div>
    </div>
  );
}