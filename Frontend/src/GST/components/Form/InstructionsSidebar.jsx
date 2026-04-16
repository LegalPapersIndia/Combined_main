// src/components/Form/InstructionsSidebar.jsx

export default function InstructionsSidebar() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 sticky top-6">
      <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center md:text-left">
        Important Instructions
      </h2>

      <ol className="space-y-5 text-sm md:text-base text-gray-800 list-decimal pl-6 leading-relaxed">
        <li>
          <strong>Application Type :</strong> Select the type of application you are applying for — 
          <strong> New Registration</strong>, <strong>Modification</strong>, or <strong>Renewal</strong>.
        </li>

        <li>
          <strong>Name of Applicant/Company :</strong> Enter the full legal name of the individual / 
          business / company exactly as it appears on your PAN Card and other legal documents.
        </li>

        <li>
          <strong>Email Id :</strong> Provide a valid and active email address of the applicant / 
          authorized signatory. All GST communications, OTPs, and updates will be sent here.
        </li>

        <li>
          <strong>Mobile Number :</strong> Enter the correct 10-digit mobile number linked with your Aadhaar / PAN. 
          This number will be used for OTP verification and important updates.
        </li>

        <li>
          <strong>Constitution of Business :</strong> Select the correct constitution/type of your business 
          (Sole Proprietorship, Partnership Firm, LLP, Private Limited Company, OPC, HUF, Trust, Society, etc.).
        </li>

        <li>
          <strong>Nature of Business Activity :</strong> Choose the appropriate nature of your business 
          (Manufacturer, Trader, Wholesaler, Retailer, Importer, Exporter, Service Provider, E-commerce, etc.).
        </li>

        <li>
          <strong>PAN Number :</strong> Enter the valid 10-digit Permanent Account Number (PAN) of the applicant / company.
        </li>

        <li>
          <strong>Address of Principal Place of Business :</strong> Fill in the complete and accurate address 
          of your principal place of business. This address will appear on your GST Certificate.
        </li>

        <li>
          <strong>State & District :</strong> Select your state and district carefully as it determines 
          the jurisdictional GST office and proper officer.
        </li>
      </ol>

      <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-600">
        <p className="italic">
          Note: This is a private consultancy assisted form — not the official GST Portal (gst.gov.in). 
          The fees charged on this portal are consultancy charges and not government fees.
        </p>
        <p className="mt-3 italic">
          Ensure all information entered matches exactly with your PAN, Aadhaar, Bank details, 
          and other official documents to avoid rejection or delay in GST registration.
        </p>
      </div>
    </div>
  );
}