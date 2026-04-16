// src/components/Form/GSTRegistrationForm.jsx

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "./FormField";
import GradientButton from "../common/GradientButton";

const applicationTypes = ["New Registration", "Modification", "Cancellation"];

const businessTypes = [
  "Manufacturer", "Trader", "Wholesaler", "Retailer", "Importer", "Exporter",
  "Service Provider", "Distributor", "E-commerce Seller", "Job Worker",
  "Supplier", "Hotel / Restaurant", "Professional Services", "Freelancer", "Others",
];

const designationOptions = [
  "INDIVIDUAL", "Proprietorship", "Partnership Firm", "Limited Liability Partnership (LLP)",
  "Private Limited Company", "One Person Company (OPC)", "Public Limited Company",
  "Hindu Undivided Family (HUF)", "Trust", "Society", "Section 8 Company", "Govt. Undertaking",
];

const indianStates = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
  "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const initialFormData = {
  application_type: "",
  applicant_name: "",
  entity_name: "",
  pan_number: "",
  email: "",
  mobile: "",
  nature_of_business: "",
  designation: "",
  address1: "",
  house_no: "",
  area_locality: "",
  city: "",
  district: "",
  state: "",
  pin: "",
};

export default function RegistrationForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [formAlert, setFormAlert] = useState(null);
  const firstErrorRef = useRef(null);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === "mobile") processedValue = value.replace(/\D/g, "").slice(0, 10);
    if (name === "pin") processedValue = value.replace(/\D/g, "").slice(0, 6);
    if (name === "pan_number") processedValue = value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10);

    setFormData((prev) => ({ ...prev, [name]: processedValue }));

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (formAlert) setFormAlert(null);
  };

  // Auto-save draft
  useEffect(() => {
    sessionStorage.setItem("gstFormDraft", JSON.stringify(formData));
  }, [formData]);

  // Load draft
  useEffect(() => {
    const draft = sessionStorage.getItem("gstFormDraft");
    if (draft) {
      try {
        setFormData((prev) => ({ ...prev, ...JSON.parse(draft) }));
      } catch (e) {
        console.warn("Invalid draft data", e);
      }
    }
  }, []);

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setFormAlert(null);
    setSubmitStatus({ type: "", message: "" });
    sessionStorage.removeItem("gstFormDraft");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.application_type) newErrors.application_type = "Required";
    if (!formData.applicant_name.trim()) newErrors.applicant_name = "Required";
    if (!formData.address1.trim()) newErrors.address1 = "Address 1 is required";
    if (!formData.email) newErrors.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    
    if (!formData.mobile) newErrors.mobile = "Required";
    else if (!/^[6-9]\d{9}$/.test(formData.mobile))
      newErrors.mobile = "10 digits starting with 6-9";

    if (!formData.nature_of_business) newErrors.nature_of_business = "Required";
    if (!formData.designation) newErrors.designation = "Required";
    if (!formData.state) newErrors.state = "State is required";   // ← Clear error message

    if (formData.pin && !/^\d{6}$/.test(formData.pin))
      newErrors.pin = "6 digits required";

    if (formData.pan_number && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan_number))
      newErrors.pan_number = "Invalid PAN format (e.g. ABCDE1234F)";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const first = Object.keys(newErrors)[0];
      const el = document.querySelector(`[name="${first}"]`);
      if (el) firstErrorRef.current = el;
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormAlert(null);

    if (!validateForm()) {
      setFormAlert({
        type: "error",
        message: "Please fill all required fields correctly.",
      });
      setTimeout(() => {
        if (firstErrorRef.current) {
          firstErrorRef.current.focus();
          firstErrorRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 150);
      return;
    }

    setLoading(true);

    const payload = {
      "ctl00$ContentPlaceHolder1$ddlApplicationType": formData.application_type || "",
      "ctl00$ContentPlaceHolder1$txtName": formData.applicant_name.trim() || "",
      "ctl00$ContentPlaceHolder1$txtEntityName": formData.entity_name.trim() || "",
      "ctl00$ContentPlaceHolder1$txtPAN": formData.pan_number || "",
      "ctl00$ContentPlaceHolder1$txtAddress1": formData.address1.trim() || "",
      "ctl00$ContentPlaceHolder1$txtEmail": formData.email.trim() || "",
      "ctl00$ContentPlaceHolder1$txtPhone1": formData.mobile || "",
      "ctl00$ContentPlaceHolder1$ddlNatureBusiness": formData.nature_of_business || "",
      "ctl00$ContentPlaceHolder1$ddlDesignition": formData.designation || "",
      "ctl00$ContentPlaceHolder1$txtHOUSE": formData.house_no.trim() || "",
      "ctl00$ContentPlaceHolder1$txtAreaLocality": formData.area_locality.trim() || "",
      "ctl00$ContentPlaceHolder1$txtCity": formData.city.trim() || "",
      "ctl00$ContentPlaceHolder1$txtDistrict": formData.district.trim() || "",
      "ctl00$ContentPlaceHolder1$ddlState": formData.state || "",
      "ctl00$ContentPlaceHolder1$txtPin": formData.pin || "",
      "ctl00$ContentPlaceHolder1$txtDate": new Date().toISOString().slice(0, 19).replace("T", " "),

      serviceCategory: "gstReg",
      leadSource: "gstregistration.org",
      _timestamp: Date.now(),
      _formVersion: "2026-04",
    };

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    try {
      const backendPromise = fetch(`${API_URL}/leadRoutes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(err => {
        console.warn("⚠️ Backend save failed:", err);
        return { ok: false };
      });

      const crmPromise = fetch("https://legalpapers.konceptsoftwaresolutions.com/leadRoutes", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload).toString(),
      }).catch(err => {
        console.warn("⚠️ CRM submission failed:", err);
        return { ok: false };
      });

      const [backendRes, crmRes] = await Promise.all([backendPromise, crmPromise]);

      if (!backendRes.ok && !crmRes.ok) {
        throw new Error("Both backend and CRM failed");
      }

      sessionStorage.setItem("gstSubmittedData", JSON.stringify(payload));
      sessionStorage.removeItem("gstFormDraft");

      setSubmitStatus({
        type: "success",
        message: "Application submitted successfully!",
      });

      setTimeout(() => {
        navigate("/payment-summary");
      }, 1000);

    } catch (err) {
      console.error("Submission failed:", err);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="registration-form" className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/80 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-6 text-center text-2xl md:text-3xl font-bold tracking-wide shadow-md">
        GST REGISTRATION FORM
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-10 lg:p-12 space-y-8">
        {formAlert && (
          <div className={`p-5 rounded-xl border-l-4 shadow-sm ${
            formAlert.type === "success" ? "bg-green-50 border-green-500 text-green-800" : "bg-red-50 border-red-500 text-red-800"
          }`}>
            <strong className="block mb-1">{formAlert.type === "success" ? "Success!" : "Error!"}</strong>
            {formAlert.message}
          </div>
        )}

        {submitStatus.message && (
          <div className={`p-5 rounded-xl border-l-4 text-center shadow-sm ${
            submitStatus.type === "success" ? "bg-green-50 border-green-500 text-green-800" : "bg-red-50 border-red-500 text-red-800"
          }`}>
            {submitStatus.message}
          </div>
        )}

        <FormField
          label="1. Application Type (आवेदन का प्रकार)"
          name="application_type"
          type="select"
          options={applicationTypes}
          value={formData.application_type}
          onChange={handleChange}
          required
          error={errors.application_type}
        />

        <FormField
          label="2. Applicant Name (आवेदक का नाम)"
          name="applicant_name"
          value={formData.applicant_name}
          onChange={handleChange}
          required
          placeholder="Full name as per PAN"
          error={errors.applicant_name}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="3. Entity Name (Optional)"
            name="entity_name"
            value={formData.entity_name}
            onChange={handleChange}
            placeholder="Company / Firm / Business Name"
          />

          <FormField
            label="4. PAN Number (Optional)"
            name="pan_number"
            value={formData.pan_number}
            onChange={handleChange}
            placeholder="ABCDE1234F"
            maxLength={10}
            error={errors.pan_number}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="5. Email ID"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="yourname@example.com"
            error={errors.email}
          />

          <FormField
            label="6. Mobile Number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            placeholder="10-digit number"
            maxLength={10}
            error={errors.mobile}
          />
        </div>

        <FormField
          label="7. Nature of Business (व्यवसाय की प्रकृति)"
          name="nature_of_business"
          type="select"
          options={businessTypes}
          value={formData.nature_of_business}
          onChange={handleChange}
          required
          error={errors.nature_of_business}
        />

        <FormField
          label="8. Designation / Type of Organization (संगठन का प्रकार)"
          name="designation"
          type="select"
          options={designationOptions}
          value={formData.designation}
          onChange={handleChange}
          required
          error={errors.designation}
        />

        {/* Business Address Section */}
        <div className="space-y-6 bg-gray-50 p-6 rounded-xl border border-gray-200">
          <label className="block text-lg font-semibold text-gray-800">
            9. Business Address (व्यवसाय का पता)
          </label>

          <FormField
            label="Address Line 1"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            required
            placeholder="Flat No. / Shop No. / Building Name / Street"
            error={errors.address1}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Address Line 2"
              name="house_no"
              placeholder="House / Shop No. / Flat No."
              value={formData.house_no}
              onChange={handleChange}
            />
            <FormField
              label="Area / Locality"
              name="area_locality"
              placeholder="Area / Locality / Street / Village"
              value={formData.area_locality}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FormField
              name="city"
              placeholder="City / Town"
              value={formData.city}
              onChange={handleChange}
            />
            <FormField
              name="district"
              placeholder="District"
              value={formData.district}
              onChange={handleChange}
            />
            <FormField
              label="State"          
              name="state"
              type="select"
              options={indianStates}
              value={formData.state}
              onChange={handleChange}
              required
              error={errors.state}
            />
            <FormField
              name="pin"
              placeholder="Pincode"
              value={formData.pin}
              onChange={handleChange}
              maxLength={6}
              error={errors.pin}
            />
          </div>
        </div>

        <div className="pt-8 flex justify-center">
          <GradientButton type="submit" disabled={loading} className="text-lg py-4 px-20">
            {loading ? "Processing..." : "Submit Application →"}
          </GradientButton>
        </div>
      </form>
    </div>
  );
}