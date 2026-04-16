// src/components/PaymentSummary.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Detail({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between py-3 border-b border-gray-200 last:border-0">
      <span className="font-semibold text-gray-700 min-w-[180px]">{label}:</span>
      <span className="text-gray-900 font-medium break-words text-right sm:text-left">
        {value || "—"}
      </span>
    </div>
  );
}

export default function PaymentSummary() {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = sessionStorage.getItem("gstSubmittedData");
    if (!saved) {
      setError("No submitted data found. Starting fresh...");
      setTimeout(() => {
        sessionStorage.removeItem("gstSubmittedData");
        navigate("/");
      }, 2500);
      return;
    }

    try {
      const parsed = JSON.parse(saved);
      const isTooOld = parsed._timestamp && Date.now() - parsed._timestamp > 30 * 60 * 1000;
      if (isTooOld) {
        throw new Error("Session expired");
      }
      setFormData(parsed);
    } catch (e) {
      console.error("Parse / validation error:", e);
      setError("Invalid or expired data found. Starting fresh...");
      sessionStorage.removeItem("gstSubmittedData");
      setTimeout(() => navigate("/"), 2500);
    }
  }, [navigate]);

  const handleEdit = () => {
    sessionStorage.setItem("gstEditFromPayment", "true");
    navigate("/");
  };

  // Single Payment Option for GST
  const paymentOption = {
    amount: "₹ 5,999",
    link: "#",                    // ← Replace with your actual Razorpay / Instamojo link
    title: "Complete GST Registration Package"
  };

  const handlePay = () => {
    if (paymentOption.link === "#") {
      alert("Payment link will be activated soon. Please contact support for instant payment.");
      return;
    }
    window.location.href = paymentOption.link;
  };

  const getValue = (key) => {
    if (!formData) return "—";
    return formData[key] || "—";
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-10 bg-white rounded-2xl shadow-xl max-w-md w-full">
          <p className="text-red-600 text-xl font-semibold mb-4">{error}</p>
          <p className="text-gray-600">Redirecting in a few seconds...</p>
        </div>
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
        <p className="ml-4 text-gray-600 text-lg">Loading your details...</p>
      </div>
    );
  }

  // Build full address
  const fullAddress = [
    getValue("ctl00$ContentPlaceHolder1$txtAddress1"),     // New: Address Line 1 (Mandatory)
    getValue("ctl00$ContentPlaceHolder1$txtHOUSE"),        // Address Line 2
    getValue("ctl00$ContentPlaceHolder1$txtAreaLocality"),
    getValue("ctl00$ContentPlaceHolder1$txtCity"),
    getValue("ctl00$ContentPlaceHolder1$txtDistrict"),
    getValue("ctl00$ContentPlaceHolder1$ddlState"),
    getValue("ctl00$ContentPlaceHolder1$txtPin") 
      ? `Pin: ${getValue("ctl00$ContentPlaceHolder1$txtPin")}` 
      : "",
  ].filter(Boolean).join(", ");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-12 px-8 md:px-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            GST Application Summary & Payment
          </h1>
          <p className="text-lg md:text-xl opacity-90">Please review your details before proceeding</p>
        </div>

        <div className="p-6 md:p-10 lg:p-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 lg:mb-10 text-center">
            Your GST Application Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Personal & Business Info */}
            <div className="space-y-6 bg-gray-50 p-6 lg:p-8 rounded-2xl">
              <Detail label="Application Type" value={getValue("ctl00$ContentPlaceHolder1$ddlApplicationType")} />
              <Detail label="Applicant Name" value={getValue("ctl00$ContentPlaceHolder1$txtName")} />
              <Detail label="Entity Name" value={getValue("ctl00$ContentPlaceHolder1$txtEntityName")} />
              <Detail label="PAN Number" value={getValue("ctl00$ContentPlaceHolder1$txtPAN")} />
              <Detail label="Email ID" value={getValue("ctl00$ContentPlaceHolder1$txtEmail")} />
              <Detail label="Mobile Number" value={getValue("ctl00$ContentPlaceHolder1$txtPhone1")} />
              <Detail label="Designation / Type of Organization" value={getValue("ctl00$ContentPlaceHolder1$ddlDesignition")} />
              <Detail label="Nature of Business" value={getValue("ctl00$ContentPlaceHolder1$ddlNatureBusiness")} />
            </div>

            {/* Right Column - Address */}
            <div className="space-y-6 bg-gray-50 p-6 lg:p-8 rounded-2xl">
              <Detail 
                label="Business Address" 
                value={fullAddress || "—"} 
              />
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="p-8 md:p-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete GST Registration Package
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Includes document preparation, filing, and departmental follow-up
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-10 md:p-12 border border-gray-100">
              <div className="text-6xl md:text-7xl font-black text-blue-700 mb-4">
                {paymentOption.amount}
              </div>
              <p className="text-gray-500 mb-8">One-time Consultancy & Service Fee</p>

              <button
                onClick={handlePay}
                className="w-full py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-2xl rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Proceed to Payment →
              </button>

              <p className="text-sm text-gray-500 mt-6">
                + Applicable Government Fee (if any)
              </p>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <div className="pb-12 flex justify-center">
          <button
            onClick={handleEdit}
            className="px-16 py-5 bg-gray-700 hover:bg-gray-800 text-white font-bold text-lg rounded-full shadow-xl transition-all hover:shadow-2xl"
          >
            ← Edit Application Details
          </button>
        </div>
      </div>
    </div>
  );
}