export default function InstructionsSidebar() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 sticky top-6">
      <h2 className="text-2xl font-bold text-green-800 mb-8 text-center md:text-left">
        Important Instructions
      </h2>

      <ol className="space-y-5 text-sm md:text-base text-gray-800 list-decimal pl-6 leading-relaxed">
        <li>
          <strong>Application Type :</strong> Select the type of application you are applying for — 
          <strong> Registration</strong>, <strong>Modification</strong>, or <strong>Renewal</strong>.
        </li>

        <li>
          <strong>Name of Applicant/Company :</strong> Enter the full name of the individual / business / enterprise 
          exactly as it should appear on the FSSAI Certificate / License.
        </li>

        <li>
          <strong>Email Id :</strong> Provide a correct and active email address of the applicant. 
          All important communications and updates will be sent here.
        </li>

        <li>
          <strong>Phone No :</strong> Enter the correct 10-digit mobile number of the applicant. 
          This number will be used for verification and updates.
        </li>

        <li>
          <strong>Nature Of Business :</strong> Choose the nature/type of your food business activity 
          from the given list (Manufacturer, Retailer, Hotel, Restaurant, etc.).
        </li>

        <li>
          <strong>Name of the Food Category :</strong> Select the most appropriate food category(ies) 
          under which your products/business falls (as per FSSAI classification).
        </li>

        <li>
          <strong>Select Designation :</strong> Choose the correct constitution/type of your organization 
          (INDIVIDUAL, PROPRIETOR, PARTNER, PVT LTD/LLP/OPC, SOCIETY, OTHERS).
        </li>

        <li>
          <strong>Address of Business :</strong> Fill in the complete and accurate premises address where 
          the food business activity is carried out — this address will be printed on the FSSAI Certificate.
        </li>

        <li>
          <strong>Number of Years :</strong> Select how many years you have been engaged in this particular 
          food business activities (helps determine eligibility & type of registration/license).
        </li>
      </ol>

      <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-600">
        <p className="italic">
          Note: This is a consultancy assisted form — not the official FSSAI FoSCoS portal. 
          Ensure all information matches your official documents exactly to avoid rejection or delay.
        </p>
        <p className="mt-2 italic">
          Double-check name, address, mobile & email before submission.
        </p>
      </div>
    </div>
  );
}