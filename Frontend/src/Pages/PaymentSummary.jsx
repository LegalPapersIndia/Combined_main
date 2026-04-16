import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Detail({ label, value }) {
  return (
    <div className="flex justify-between items-start py-3 border-b border-gray-200 last:border-0">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="text-blue-700 font-medium text-sm text-right max-w-[60%] break-words">
        {value || "—"}
      </span>
    </div>
  );
}

function AddressBlock({ data, isCompany }) {
  if (!data) return null;

  const getAddress = () => {
    const lines = [];
    if (data.address1) lines.push(data.address1);
    if (data.house_no) lines.push(data.house_no);
    if (data.area_locality) lines.push(data.area_locality);
    if (data.city) lines.push(data.city);
    if (data.district) lines.push(data.district);

    const statePin = [];
    if (data.state) statePin.push(data.state);
    if (data.pin) statePin.push(data.pin);

    if (statePin.length > 0) {
      lines.push(statePin.join(" - "));
    }

    return lines.length > 0 ? lines.join(", ") : "—";
  };

  return (
    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mt-6">
      <h3 className="text-blue-700 font-semibold mb-4">
        {isCompany ? "Registered Office Address" : "Business Address"}
      </h3>
      <p className="text-gray-700 leading-relaxed text-[15px]">
        {getAddress()}
      </p>
    </div>
  );
}

export default function PaymentSummary() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isCompany, setIsCompany] = useState(false);
  const [formType, setFormType] = useState(""); // "company" | "gst" | "iec"

  const navigate = useNavigate();

  useEffect(() => {
    let savedData = null;
    let source = "";

    // Check Company Incorporation
    savedData = sessionStorage.getItem("companySubmittedData");
    if (savedData) {
      source = "company";
    }

    // Check GST Registration
    if (!savedData) {
      savedData = sessionStorage.getItem("gstSubmittedData");
      if (savedData) source = "gst";
    }

    // Check IEC (fallback)
    if (!savedData) {
      savedData = sessionStorage.getItem("iecSubmittedData");
      if (savedData) source = "iec";
    }

    if (!savedData) {
      setError("No submitted data found. Redirecting...");
      setTimeout(() => navigate("/"), 2000);
      return;
    }

    try {
      const parsed = JSON.parse(savedData);

      // Optional: Check if data is too old (45 minutes)
      if (parsed._timestamp && Date.now() - parsed._timestamp > 45 * 60 * 1000) {
        throw new Error("Expired");
      }

      setData(parsed);
      setFormType(source);
      setIsCompany(source === "company");
    } catch (e) {
      setError("Session expired or invalid data. Redirecting...");
      setTimeout(() => navigate("/"), 2000);
    }
  }, [navigate]);

  const handlePay = () => {
    window.location.href =
      "https://www.instamojo.com/@LegalPapersIndia/l52d2d917f393479baf14f1e829a0a65c/";
  };

  const handleEdit = () => {
    if (formType === "company") navigate("/company-incorporation");
    else if (formType === "gst") navigate("/gst-registration");
    else if (formType === "iec") navigate("/iec-registration");
    else navigate("/");
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="bg-white border border-gray-200 p-10 rounded-3xl text-center shadow-md">
          <p className="text-red-500 text-lg">{error}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500">Loading your details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden py-16 px-4">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gray-200 blur-[120px] rounded-full"></div>

      <div className="max-w-5xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-gray-400 bg-clip-text text-transparent">
            {formType === "company" 
              ? "Company Incorporation" 
              : formType === "gst" 
                ? "GST Registration" 
                : "IEC Application"} Summary
          </h1>
          <p className="text-gray-500 mt-2">
            Please review your details before making payment
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 md:p-10">

          <div className="grid md:grid-cols-2 gap-8">

            {/* Left Column - Basic Details */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-blue-700 font-semibold mb-4">Basic Information</h3>

              <Detail 
                label="Application Type" 
                value={data.applicationType || data["ctl00$ContentPlaceHolder1$ddlApplicationType"] || "—"} 
              />
              <Detail 
                label="Applicant Name" 
                value={data.fullName || data.applicant_name || data.txtName || "—"} 
              />
              <Detail 
                label="Email" 
                value={data.email || data["ctl00$ContentPlaceHolder1$txtEmail"] || "—"} 
              />
              <Detail 
                label="Mobile" 
                value={data.mobile || data["ctl00$ContentPlaceHolder1$txtPhone1"] || "—"} 
              />

              {(formType === "company" || formType === "gst") && (
                <Detail 
                  label="Entity / Company Name" 
                  value={data.companyName || data.entity_name || "—"} 
                />
              )}
            </div>

            {/* Right Column - Additional Details */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-blue-700 font-semibold mb-4">Service Details</h3>

              {formType === "company" && (
                <>
                  <Detail label="Nature of Business" value={data.natureOfBusiness} />
                  <Detail label="Initial Capital" value={data.investment} />
                  <Detail label="No. of Directors/Members" value={data.members} />
                </>
              )}

              {formType === "gst" && (
                <>
                  <Detail label="Nature of Business" value={data.nature_of_business} />
                  <Detail label="Designation" value={data.designation} />
                  <Detail label="PAN" value={data.pan_number} />
                </>
              )}

              {formType === "iec" && (
                <>
                  <Detail label="PAN" value={data.txtPanNo} />
                  <Detail label="Business Type" value={data.ddlConstitution} />
                </>
              )}

              <Detail label="State" value={data.state} />
            </div>
          </div>

          {/* Address Section */}
          <AddressBlock data={data} isCompany={formType === "company"} />

          {/* Payment Section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl text-blue-700 mb-2">
              {formType === "company" ? "Company Registration Fee" : "Processing Fee"}
            </h3>

            <p className="text-5xl font-extrabold text-blue-600 mb-4">
              ₹ {formType === "company" ? "4,999" : formType === "gst" ? "2,499" : "1,950"}
            </p>

            <p className="text-gray-500 mb-8">
              One-time consultancy &amp; processing fee (Government fees extra)
            </p>

            <button
              onClick={handlePay}
              className="w-full md:w-auto px-12 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold text-lg shadow-lg hover:shadow-blue-300 transition-all active:scale-[0.98]"
            >
              🔒 Pay Securely Now
            </button>

            <p className="text-gray-500 text-sm mt-4">
              Secure payment powered by Instamojo
            </p>

            {/* Edit Button */}
            <div className="mt-10">
              <button
                onClick={handleEdit}
                className="text-gray-500 hover:text-blue-600 font-medium transition flex items-center gap-2 mx-auto"
              >
                ← Edit / Modify Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}