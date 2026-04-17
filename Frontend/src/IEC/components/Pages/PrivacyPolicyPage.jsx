// src/components/Pages/PrivacyPolicyPage.jsx
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Last Updated: April 08, 2026
          </p>
        </div>

        {/* Important Summary Banner */}
        <div className="bg-gradient-to-r from-orange-100 to-blue-100 border-l-4 border-orange-500 p-6 md:p-8 rounded-xl mb-12 text-gray-800 shadow-md">
          <p className="text-lg font-semibold mb-3">
            Your Privacy Matters
          </p>
          <p className="leading-relaxed">
            We are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our services.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-10">
          
          {/* Introduction */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              www.india-iecregistration.org is a privately owned online portal operated by a professional consultancy firm. 
              This Privacy Policy governs the collection, use, and disclosure of your personal information when you visit our website or avail our consultancy services for IEC Registration and related services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Personal Information:</strong> Name, email address, phone number, PAN card number, GSTIN, business name, address, and other details you provide in the registration form.</li>
              <li><strong>Business Information:</strong> Details related to your import/export business required for IEC application.</li>
              <li><strong>Payment Information:</strong> We do not store complete payment card details. Payments are processed securely through third-party payment gateways.</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information, and usage data collected through cookies.</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 text-xl font-bold mt-1">•</span>
                <span>To provide consultancy services for IEC Registration, modification, renewal, and related assistance.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 text-xl font-bold mt-1">•</span>
                <span>To communicate with you regarding your application and service updates.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 text-xl font-bold mt-1">•</span>
                <span>To process payments and issue invoices/receipts.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 text-xl font-bold mt-1">•</span>
                <span>To improve our website and services.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 text-xl font-bold mt-1">•</span>
                <span>To comply with legal obligations, if required.</span>
              </li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Information Sharing &amp; Disclosure
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do <strong>not</strong> sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We may share your information only in the following cases:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>With trusted service providers who assist us in delivering our consultancy services (under strict confidentiality agreements).</li>
              <li>When required by law or government authorities for IEC-related processing.</li>
              <li>To protect our rights, privacy, safety, or property.</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We take reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. 
              However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          {/* Cookies */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website uses cookies to enhance user experience, analyze website traffic, and remember your preferences. 
              You can control cookie settings through your browser. However, disabling cookies may affect some functionalities of the website.
            </p>
          </section>

          {/* Your Rights */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access, update, or correct your personal information</li>
              <li>Request deletion of your data (subject to legal and legitimate business requirements)</li>
              <li>Withdraw consent for processing your data (where applicable)</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          {/* Contact Us */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy, or wish to exercise your rights, please contact us:
            </p>
            <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
              <p className="font-medium text-gray-800">
                Email: <strong>info@india-iecregistration.org</strong><br />
                Phone: <strong>+91-9211037448</strong>
              </p>
            </div>
          </section>

          {/* Final Note */}
          <section className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-8 text-center border border-orange-200">
            <p className="text-lg text-gray-800 font-medium">
              We are committed to safeguarding your privacy and building long-term trust with our clients. 
              Thank you for trusting us with your IEC registration needs.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}