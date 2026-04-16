import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-600 text-lg">
            Last Updated: April 09, 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12 mb-12">
            <p className="text-lg leading-relaxed text-slate-700">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or avail our company registration and compliance services.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Information We Collect</h2>
            <div className="space-y-6 text-slate-700">
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, PAN, Aadhaar, DIN, etc.</li>
                <li><strong>Business Information:</strong> Company name, registered office address, nature of business, and other details required for incorporation.</li>
                <li><strong>Payment Information:</strong> We do not store complete payment card or bank details. All payments are processed securely via third-party gateways.</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information, and cookies.</li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. How We Use Your Information</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold text-xl mt-1">•</span>
                To provide company registration, LLP, OPC, and other compliance services.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold text-xl mt-1">•</span>
                To communicate with you regarding your application status and service updates.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold text-xl mt-1">•</span>
                To process payments and generate invoices/receipts.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold text-xl mt-1">•</span>
                To improve our website and services.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold text-xl mt-1">•</span>
                To comply with legal and regulatory requirements (MCA, ROC, etc.).
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Information Sharing</h2>
            <p className="text-slate-700 mb-4">
              We <strong>do not sell or rent</strong> your personal information to third parties for marketing purposes.
            </p>
            <p className="text-slate-700">
              We may share your information only when necessary:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-700">
              <li>With government authorities (MCA, ROC, Income Tax Department) for registration and compliance.</li>
              <li>With trusted service providers who assist us under strict confidentiality agreements.</li>
              <li>When required by law or court order.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Data Security</h2>
            <p className="text-slate-700">
              We implement reasonable technical and organizational security measures to protect your personal information. 
              However, no method of transmission over the internet or electronic storage is 100% secure. 
              We cannot guarantee absolute security.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Cookies and Tracking</h2>
            <p className="text-slate-700">
              Our website uses cookies to enhance user experience, analyze traffic, and remember your preferences. 
              You can manage cookie preferences through your browser settings.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Access, update, or correct your personal information</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="bg-slate-900 text-white rounded-3xl p-10 md:p-12 mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-center">Have Questions About Your Privacy?</h3>
            <p className="text-center text-slate-300 mb-8">
              If you have any questions or concerns regarding this Privacy Policy, feel free to contact us:
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-center md:text-left">
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-blue-400">info@incorpfast.org</p>
              </div>
              <div>
                <p className="font-medium">Phone:</p>
                <p className="text-blue-400">+91-9211037448</p>
              </div>
            </div>
          </div>

          <div className="text-center text-slate-500 text-sm mt-12">
            © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;