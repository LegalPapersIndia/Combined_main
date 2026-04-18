// src/components/PaymentSummary.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Detail({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between py-3 border-b border-gray-200 last:border-0">
      <span className="font-semibold text-gray-700 min-w-[180px]">{label}:</span>
      <span className="text-gray-900 font-medium break-words">{value || "—"}</span>
    </div>
  );
}

export default function PaymentSummary() {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [selectedBasicOption, setSelectedBasicOption] = useState(null);

  useEffect(() => {
    console.log("Payment page → reading sessionStorage");
    const saved = sessionStorage.getItem("fssaiSubmittedData");
    if (!saved) {
      setError("No submitted data found. Starting fresh...");
      setTimeout(() => {
        sessionStorage.removeItem("fssaiSubmittedData");
        navigate("/fssai-registration");
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
      sessionStorage.removeItem("fssaiSubmittedData");
      setTimeout(() => navigate("/fssai-registration"), 2500);
    }
  }, [navigate]);

  const handleEdit = () => {
    sessionStorage.setItem("fssaiEditFromPayment", "true");
    navigate("/fssai-registration");
  };

  const paymentOptions = {
    basic: [
      { validity: "1 Year", amount: "₹ 999", link: "https://www.instamojo.com/@LegalPapersIndia/l90faef71150c4bf4a5d9f40a1b4a0ae4/" },
      { validity: "2 Years", amount: "₹ 2,200", link: "https://www.instamojo.com/@LegalPapersIndia/lf95a0fb3a3a44059ad2e50db25490f9a/" },
      { validity: "3 Years", amount: "₹ 3,010", link: "https://www.instamojo.com/@LegalPapersIndia/l729c810d4b724e119dcda1795573ce79/" },
      { validity: "4 Years", amount: "₹ 3,510", link: "https://www.instamojo.com/@LegalPapersIndia/l975bfba2186b43d792099ea66329648d/" },
      { validity: "5 Years", amount: "₹ 4,010", link: "https://www.instamojo.com/@LegalPapersIndia/l44800ca41481430e82ba098f53da092a/" },
    ],
    state: {
      amount: "₹ 2,999",
      link: "https://www.instamojo.com/@LegalPapersIndia/l27946e6004c54ffc8bfc3af423a6085e/",
    },
    central: {
      amount: "₹ 4,999",
      link: "https://www.instamojo.com/@LegalPapersIndia/l99b05c9d999444e0aaf720802556f8b7/",
    },
  };

  const handlePay = (link) => {
    window.location.href = link;
  };

  const getValue = (longKey) => {
    if (!formData) return "—";
    return formData[longKey] || "—";
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
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-600"></div>
        <p className="ml-4 text-gray-600 text-lg">Loading your details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        
        <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-12 px-8 md:px-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">FSSAI Application Summary & Payment</h1>
          <p className="text-lg md:text-xl opacity-90">Please review before proceeding</p>
        </div>

        <div className="p-6 md:p-10 lg:p-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 lg:mb-10 text-center">
            Your Application Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 bg-gray-50 p-6 lg:p-8 rounded-2xl">
              <Detail label="Application Type" value={getValue("ctl00$ContentPlaceHolder1$ddlApplicationType")} />
              <Detail label="Applicant Name" value={getValue("ctl00$ContentPlaceHolder1$txtName")} />
              <Detail label="Email" value={getValue("ctl00$ContentPlaceHolder1$txtEmail")} />
              <Detail label="Mobile Number" value={getValue("ctl00$ContentPlaceHolder1$txtPhone1")} />
              <Detail label="Designation / Type" value={getValue("ctl00$ContentPlaceHolder1$ddlDesignition")} />
              <Detail label="Nature of Business" value={getValue("ctl00$ContentPlaceHolder1$ddlNatureBusiness")} />
            </div>

            <div className="space-y-6 bg-gray-50 p-6 lg:p-8 rounded-2xl">
              <Detail
                label="Full Address"
                value={[
                  getValue("ctl00$ContentPlaceHolder1$txtHOUSE"),
                  getValue("ctl00$ContentPlaceHolder1$txtAreaLocality"),
                  getValue("ctl00$ContentPlaceHolder1$txtCity"),
                  getValue("ctl00$ContentPlaceHolder1$txtDistrict"),
                  getValue("ctl00$ContentPlaceHolder1$ddlState"),
                  getValue("ctl00$ContentPlaceHolder1$txtPin") ? ` - ${getValue("ctl00$ContentPlaceHolder1$txtPin")}` : "",
                ].filter(Boolean).join(", ") || "—"}
              />
              <Detail label="Food Category" value={getValue("ctl00$ContentPlaceHolder1$ddlFoodCategory")} />
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10 lg:p-12 bg-white">
          <div className="text-center mb-10 md:mb-14 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Choose Your FSSAI Licence Type
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Select based on your annual turnover and business scale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
            {/* Basic Registration */}
<div className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-lg transition-all duration-300 flex flex-col h-full">
  <div className="h-1.5 bg-emerald-600 rounded-t-xl"></div>
  <div className="p-6 md:p-8 lg:p-9 flex flex-col flex-grow">
    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">
      Basic Registration
    </h3>
    <div className="flex justify-center mb-3">
      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-200">
        Turnover ≤ ₹12 Lakh
      </span>
    </div>

    <div className="mb-2 text-base">
      <p className="text-gray-700 font-medium mb-2">Best for:</p>
      <ul className="space-y-1 text-gray-600 list-disc pl-5 marker:text-emerald-600">
        <li>Street vendors & hawkers</li>
        <li>Small tea/snack stalls</li>
        <li>Retailer,Wholesaler and Distributor</li>
      </ul>
    </div>

    {/* New: Select validity with prices shown upfront */}
    <div className="mt-1 mb-1">
      <label className="block text-base font-medium text-gray-700 mb-1 text-center">
        Choose validity period & pay
      </label>

      <div className="space-y-1">
        {paymentOptions.basic.map((opt, i) => (
          <label
            key={i}
            className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors ${
              selectedBasicOption === opt.validity
                ? "border-emerald-500 bg-emerald-50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="basicValidity"
                value={opt.validity}
                checked={selectedBasicOption === opt.validity}
                onChange={() => setSelectedBasicOption(opt.validity)}
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
              />
              <span className="ml-3 text-gray-800 font-medium">
                {opt.validity}
              </span>
            </div>
            <span className="text-lg font-bold text-emerald-700">{opt.amount}</span>
          </label>
        ))}
      </div>
    </div>

    <div className="mt-auto pt-6 border-t border-gray-100 text-center">
      <button
        onClick={() => {
          const selected = paymentOptions.basic.find(opt => opt.validity === selectedBasicOption);
          if (selected) handlePay(selected.link);
        }}
        disabled={!selectedBasicOption}
        className={`w-full py-5 font-bold text-xl rounded-xl transition-all shadow-lg transform hover:scale-[1.02] ${
          selectedBasicOption
            ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white hover:shadow-xl"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {selectedBasicOption ? "Proceed to Payment" : "Select a validity first"}
      </button>
    </div>
  </div>
</div>

            {/* State Licence – Recommended */}
            <div className="bg-white rounded-xl border-2 border-amber-500 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full relative md:scale-105 z-10">
              <div className="h-1.5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-t-xl"></div>
              <div className="p-6 md:p-8 lg:p-9 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  State Licence
                </h3>
                <div className="flex justify-center mb-5">
                  <span className="inline-flex items-center px-5 py-2 rounded-full bg-amber-50 text-amber-800 text-base font-medium border border-amber-200">
                    ₹12 Lakh – ₹20 Crore
                  </span>
                </div>

                <div className="mb-8 text-base">
                  <p className="text-gray-700 font-medium mb-3">Ideal for:</p>
                  <ul className="space-y-2 text-gray-600 list-disc pl-5 marker:text-amber-600">
                    <li>Restaurants, cafes, dhabas</li>
                    <li>Hotels & catering services</li>
                    <li>Mid-scale manufacturers</li>
                    <li>Wholesalers & distributors</li>
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 text-center">
                  <div className="text-5xl lg:text-6xl font-black text-amber-700 mb-2">
                    {paymentOptions.state.amount}
                  </div>
                  <p className="text-base text-gray-600 mb-5">
                    One-time service fee
                  </p>

                  <button
                    onClick={() => handlePay(paymentOptions.state.link)}
                    className="w-full py-5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-xl rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    Proceed to Payment
                  </button>

                  <p className="text-sm text-gray-500 mt-5 italic">
                    + Govt. fee (depends on validity)
                  </p>
                </div>
              </div>
            </div>

            {/* Central Licence */}
            <div className="bg-white rounded-xl border border-teal-200 shadow hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="h-1.5 bg-teal-600 rounded-t-xl"></div>
              <div className="p-6 md:p-8 lg:p-9 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  Central Licence
                </h3>
                <div className="flex justify-center mb-5">
                  <span className="inline-flex items-center px-5 py-2 rounded-full bg-teal-50 text-teal-800 text-base font-medium border border-teal-200">
                    Turnover {">"} ₹20 Crore
                  </span>
                </div>

                <div className="mb-8 text-base">
                  <p className="text-gray-700 font-medium mb-3">Designed for:</p>
                  <ul className="space-y-2 text-gray-600 list-disc pl-5 marker:text-teal-600">
                    <li>Large food chains</li>
                    <li>Importers & exporters</li>
                    <li>Food e-commerce platforms</li>
                    <li>Multi-state operations</li>
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 text-center">
                  <div className="text-5xl lg:text-6xl font-black text-teal-700 mb-2">
                    {paymentOptions.central.amount}
                  </div>
                  <p className="text-base text-gray-600 mb-5">
                    One-time service fee
                  </p>

                  <button
                    onClick={() => handlePay(paymentOptions.central.link)}
                    className="w-full py-5 bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 text-white font-bold text-xl rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    Proceed to Payment
                  </button>

                  <p className="text-sm text-gray-500 mt-5 italic">
                    + Govt. fee (depends on validity)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-12 pb-12 flex justify-center">
          <button
            onClick={handleEdit}
            className="px-16 py-5 bg-gray-700 hover:bg-gray-800 text-white font-bold text-lg rounded-full shadow-xl transition-all hover:shadow-2xl"
          >
            ← Edit Details
          </button>
        </div>
      </div>
    </div>
  );
}
