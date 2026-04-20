// src/components/Form/FssaiRegistrationForm.jsx
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "./FormField";
import GradientButton from "../common/GradientButton";

const applicationTypes = ["Registration", "Modification", "Renewal"];

const businessTypes = [
  "Manufacturer",
  "Importers",
  "Exporters",
  "Cold Storage",
  "Wholesaler",
  "Retailer",
  "Distributor",
  "Food Vending Agency",
  "Supplier",
  "Caterer",
  "Dhaba / Food Stall",
  "Club / Canteen",
  "Hotel",
  "Restaurant",
  "Transporter",
  "Marketer",
  "Hawker",
  "Petty Retailers of Snacks/ tea shops",
];

const foodCategories = [
  "Dairy products and analogues, excluding products of food category 2.0",
  "Fats and oils, and fat emulsions",
  "Edible ices, including sherbet and sorbe",
  "Fruits and vegetables (including mushrooms and fungi, roots and tubers, pulses and legumes, and aloe vera), seaweeds, and nuts and seeds",
  "Confectionery",
  "Cereals and cereal products, derived from cereal grains, from roots and tubers, pulses, legumes and pith or soft core of palm tree, excluding bakery wares of food category 7.0",
  "Bakery products",
  "Meat and meat products including poultry",
  "Fish and fish products, including molluscs, crustaceans, and echinoderms",
  "Eggs and egg products",
  "Sweeteners, including honey",
  "Salts, spices, soups, sauces, salads and protein products",
  "Foodstuffs intended for particular nutritional uses",
  "Beverages, excluding dairy products",
  "Ready-to-eat savouries",
  "Prepared Foods",
  "Substances added to food",
];

const designationOptions = [
  "INDIVIDUAL",
  "Proprietorship",
  "Partnership Firm",
  "Limited Liability Partnership",
  "Private Limited",
  "OPC",
  "Public Limited",
  "Govt. Undertaking",
  "Section 8 Company",
  "Registered Society",
  "Trust",
  "HUF",
];

const indianStates = [
  "ANDAMAN AND NICOBAR ISLANDS",
  "ANDHRA PRADESH",
  "ARUNACHAL PRADESH",
  "ASSAM",
  "BIHAR",
  "CHANDIGARH",
  "CHHATTISGARH",
  "DADRA AND NAGAR HAVELI AND DAMAN AND DIU",
  "DELHI",
  "GOA",
  "GUJARAT",
  "HARYANA",
  "HIMACHAL PRADESH",
  "JHARKHAND",
  "KARNATAKA",
  "KERALA",
  "LAKSHADWEEP",
  "MADHYA PRADESH",
  "MAHARASHTRA",
  "ODISHA",
  "PUNJAB",
  "RAJASTHAN",
  "TAMIL NADU",
  "TELANGANA",
  "TRIPURA",
  "UTTAR PRADESH",
  "UTTARAKHAND",
  "WEST BENGAL",
];

const initialFormData = {
  application_type: "",
  applicant_name: "",
  email: "",
  mobile: "",
  nature_of_business: "",
  food_category: "",
  designation: "",
  house_no: "",
  area_locality: "",
  city: "",
  district: "",
  state: "",
  pin: "",
};

export default function FssaiRegistrationForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [formAlert, setFormAlert] = useState(null);
  const firstErrorRef = useRef(null);
  const navigate = useNavigate();

  // Handle input changes + formatting
  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;
    if (name === "mobile") processedValue = value.replace(/\D/g, "").slice(0, 10);
    if (name === "pin") processedValue = value.replace(/\D/g, "").slice(0, 6);
    setFormData((prev) => ({ ...prev, [name]: processedValue }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (formAlert) setFormAlert(null);
  };

  // Clean up very old submitted data
  useEffect(() => {
    const saved = sessionStorage.getItem("fssaiSubmittedData");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed._timestamp && Date.now() - parsed._timestamp > 30 * 60 * 1000) {
          sessionStorage.removeItem("fssaiSubmittedData");
        }
      } catch {}
    }
  }, []);

  // Load draft (unsaved changes)
  useEffect(() => {
    const draft = sessionStorage.getItem("fssaiFormDraft");
    if (draft) {
      try {
        setFormData((prev) => ({ ...prev, ...JSON.parse(draft) }));
      } catch (e) {
        console.warn("Invalid draft data", e);
      }
    }
  }, []);

  // Auto-save draft
  useEffect(() => {
    sessionStorage.setItem("fssaiFormDraft", JSON.stringify(formData));
  }, [formData]);

  // Restore submitted data when coming from Edit button
  useEffect(() => {
    const isEditMode = sessionStorage.getItem("fssaiEditFromPayment") === "true";
    if (isEditMode) {
      const submitted = sessionStorage.getItem("fssaiSubmittedData");
      if (submitted) {
        try {
          const parsed = JSON.parse(submitted);
          if (parsed._timestamp && Date.now() - parsed._timestamp > 60 * 60 * 1000) {
            throw new Error("Edit session expired");
          }

          setFormData({
            application_type: parsed["ctl00$ContentPlaceHolder1$ddlApplicationType"] || "",
            applicant_name: parsed["ctl00$ContentPlaceHolder1$txtName"]?.trim() || "",
            email: parsed["ctl00$ContentPlaceHolder1$txtEmail"]?.trim() || "",
            mobile: parsed["ctl00$ContentPlaceHolder1$txtPhone1"] || "",
            nature_of_business: parsed["ctl00$ContentPlaceHolder1$ddlNatureBusiness"] || "",
            food_category: parsed["ctl00$ContentPlaceHolder1$ddlFoodCategory"] || "",
            designation: parsed["ctl00$ContentPlaceHolder1$ddlDesignition"] || "",
            house_no: parsed["ctl00$ContentPlaceHolder1$txtHOUSE"]?.trim() || "",
            area_locality: parsed["ctl00$ContentPlaceHolder1$txtAreaLocality"]?.trim() || "",
            city: parsed["ctl00$ContentPlaceHolder1$txtCity"]?.trim() || "",
            district: parsed["ctl00$ContentPlaceHolder1$txtDistrict"]?.trim() || "",
            state: parsed["ctl00$ContentPlaceHolder1$ddlState"] || "",
            pin: parsed["ctl00$ContentPlaceHolder1$txtPin"] || "",
          });

          sessionStorage.removeItem("fssaiEditFromPayment");
          sessionStorage.removeItem("fssaiFormDraft");

          setFormAlert({
            type: "success",
            message: "Previous details loaded for editing.",
          });
        } catch (e) {
          console.warn("Failed to restore edit data", e);
          setFormAlert({
            type: "error",
            message: "Could not load previous data. Please start fresh.",
          });
        }
      }
    }
  }, []);

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setFormAlert(null);
    setSubmitStatus({ type: "", message: "" });
    sessionStorage.removeItem("fssaiFormDraft");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.application_type) newErrors.application_type = "Required";
    if (!formData.applicant_name.trim()) newErrors.applicant_name = "Required";
    if (!formData.email) newErrors.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.mobile) newErrors.mobile = "Required";
    else if (!/^[6-9]\d{9}$/.test(formData.mobile))
      newErrors.mobile = "10 digits starting with 6-9";
    if (!formData.nature_of_business) newErrors.nature_of_business = "Required";
    if (!formData.designation) newErrors.designation = "Required";
    if (!formData.state) newErrors.state = "Required";
    if (formData.pin && !/^\d{6}$/.test(formData.pin))
      newErrors.pin = "6 digits required";

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
      "ctl00$ContentPlaceHolder1$txtEmail": formData.email.trim() || "",
      "ctl00$ContentPlaceHolder1$txtPhone1": formData.mobile || "",
      "ctl00$ContentPlaceHolder1$ddlNatureBusiness": formData.nature_of_business || "",
      "ctl00$ContentPlaceHolder1$ddlFoodCategory": formData.food_category || "",
      "ctl00$ContentPlaceHolder1$ddlDesignition": formData.designation || "",
      "ctl00$ContentPlaceHolder1$txtHOUSE": formData.house_no.trim() || "",
      "ctl00$ContentPlaceHolder1$txtAreaLocality": formData.area_locality.trim() || "",
      "ctl00$ContentPlaceHolder1$txtCity": formData.city.trim() || "",
      "ctl00$ContentPlaceHolder1$txtDistrict": formData.district.trim() || "",
      "ctl00$ContentPlaceHolder1$ddlState": formData.state || "",
      "ctl00$ContentPlaceHolder1$txtPin": formData.pin || "",
      "ctl00$ContentPlaceHolder1$ddlyears": "",
      "ctl00$ContentPlaceHolder1$txtDate": new Date().toISOString().slice(0, 19).replace("T", " "),
      serviceCategory: "fssaiReg",
      leadSource: "foodindia-registration.org",
      _timestamp: Date.now(),
      _formVersion: "2025-03",
    };

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

try {
  // 🔹 1. Save to YOUR backend (MongoDB)
  const backendRes = await fetch(`${API_URL}/api/leads/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!backendRes.ok) {
    throw new Error("Backend save failed");
  }

  // 🔹 2. Send to CRM (non-blocking)
  fetch("https://legalpapers.konceptsoftwaresolutions.com/leadRoutes", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(payload).toString(),
  }).catch(() => {
    console.warn("CRM failed but data saved in DB");
  });

  // ✅ Success flow
  sessionStorage.setItem("fssaiSubmittedData", JSON.stringify(payload));
  sessionStorage.removeItem("fssaiFormDraft");

  setSubmitStatus({
    type: "success",
    message: "Application submitted successfully!",
  });

  setTimeout(() => {
    navigate("/fssai-registration/payment-summary");
  }, 1200);

} catch (err) {
  console.error("Submission failed:", err);

  setSubmitStatus({
    type: "error",
    message: "Something went wrong. Please try again.",
  });
} finally {
  setLoading(false);
}
  };

  return (
    <div id="registration-form" className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/80 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-green-700 to-emerald-900 text-white py-6 text-center text-2xl md:text-3xl font-bold tracking-wide shadow-md">
         REGISTRATION FORM
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
          placeholder="Full name as per ID"
          error={errors.applicant_name}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="3. Email ID (ईमेल आईडी)"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="yourname@example.com"
            error={errors.email}
          />

          <FormField
            label="4. Mobile Number (मोबाइल नंबर)"
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
          label="5. Nature of Business (व्यापार की प्रकृति)"
          name="nature_of_business"
          type="select"
          options={businessTypes}
          value={formData.nature_of_business}
          onChange={handleChange}
          required
          error={errors.nature_of_business}
        />

        <FormField
          label="6. Food Category (if applicable) (खाद्य श्रेणी)"
          name="food_category"
          type="select"
          options={foodCategories}
          value={formData.food_category}
          onChange={handleChange}
          placeholder="Select main food category (optional)"
        />

        <FormField
          label="7. Designation / Type of Organization (पदनाम / संगठन का प्रकार)"
          name="designation"
          type="select"
          options={designationOptions}
          value={formData.designation}
          onChange={handleChange}
          required
          error={errors.designation}
        />

        <div className="space-y-6 bg-gray-50 p-6 rounded-xl border border-gray-200">
          <label className="block text-lg font-semibold text-gray-800">
            8. Premises Address (परिसर का पता)
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              name="house_no"
              placeholder="House / Shop No. / Flat No."
              value={formData.house_no}
              onChange={handleChange}
            />
            <FormField
              name="area_locality"
              placeholder="Area / Locality / Street / Village"
              value={formData.area_locality}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FormField
              name="city"
              placeholder="City / Town / Village"
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
            {loading ? "Processing..." : "Submit Application"}
          </GradientButton>
        </div>
      </form>
    </div>
  );
}
