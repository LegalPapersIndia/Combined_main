import express from "express";
import Lead from "../models/Lead.js";

const router = express.Router();

// POST - Save Lead from any form
router.post("/submit", async (req, res) => {
  try {
    const payload = req.body;

    // Extract key fields from payload
    const lead = new Lead({
      serviceCategory: payload.serviceCategory || payload.service_category || "unknown",
      leadSource: payload.leadSource || payload.lead_source || "website",
      
      // Try to extract from various payload formats
      applicationType: payload.application_type || payload.applicationType || payload["ctl00$ContentPlaceHolder1$ddlApplicationType"] || payload.ddlApplicationType,
      applicantName: payload.applicant_name || payload.applicantName || payload["ctl00$ContentPlaceHolder1$txtName"] || payload.txtBusinesEntity || payload["ctl00$ContentPlaceHolder1$txtCompanyName"] || payload.business_entity || payload.entity_name || payload.fullName,
      fullName: payload.fullName || payload.applicant_name || payload.applicantName || payload["ctl00$ContentPlaceHolder1$txtName"] || payload.txtBusinesEntity || payload.business_entity || payload.entity_name,
      email: payload.email || payload.emailAddress || payload["ctl00$ContentPlaceHolder1$txtEmail"] || payload.txtemail || payload.txtEmail,
      mobile: payload.mobile || payload.phone || payload.contact_no || payload["ctl00$ContentPlaceHolder1$txtPhone1"] || payload.txtphone,
      
      companyName: payload.companyName || payload.businessName || payload["ctl00$ContentPlaceHolder1$txtCompanyName"] || payload.txtBusinesEntity || payload.business_entity || payload.entity_name,
      businessName: payload.businessName || payload.companyName || payload.txtBusinesEntity || payload.business_entity || payload.entity_name,
      natureOfBusiness: payload.nature_of_business || payload.natureOfBusiness || payload["ctl00$ContentPlaceHolder1$ddlNatureBusiness"] || payload.txtdescriptionbusiness || payload.business_activity,
      designation: payload.designation || payload["ctl00$ContentPlaceHolder1$ddlDesignition"] || payload.job_title,
      businessType: payload.businessType || payload.ddlConstitution || payload["ctl00$ContentPlaceHolder1$ddlConstitution"] || payload.constitution,
      
      // Address
      state: payload.state || payload["ctl00$ContentPlaceHolder1$ddlState"] || payload.txtpstate,
      city: payload.city || payload["ctl00$ContentPlaceHolder1$txtCity"] || payload.txtpcity,
      district: payload.district || payload["ctl00$ContentPlaceHolder1$txtDistrict"],
      pin: payload.pin || payload.pincode || payload["ctl00$ContentPlaceHolder1$txtPin"] || payload.txtppincode,
      address1: payload.address1 || payload.house_no || payload["ctl00$ContentPlaceHolder1$txtHOUSE"] || payload.txtpaddress,
      address2: payload.address2 || payload["ctl00$ContentPlaceHolder1$txtAddress2"] || payload.txtpaddress2,
      
      // Food/GST/IEC specific
      foodCategory: payload.food_category || payload.foodCategory || payload["ctl00$ContentPlaceHolder1$ddlFoodCategory"],
      investment: payload.investment || payload.businessInvestment || payload.additionalInvestment,
      businessInvestment: payload.businessInvestment || payload.investment,
      members: payload.members || payload["ctl00$ContentPlaceHolder1$ddlNoOfDirectors"],
      panNumber: payload.panNumber || payload.pan || payload.txtPanNo || payload["ctl00$ContentPlaceHolder1$txtPAN"],
      gstinNumber: payload.gstinNumber || payload.gstin,
      
      // Payment
      paymentStatus: "pending",
      applicationStatus: "pending",
      
      // Store entire payload for reference
      rawPayload: payload
    });

    await lead.save();

    res.status(201).json({ 
      success: true, 
      message: "Lead saved successfully",
      leadId: lead._id
    });
  } catch (err) {
    console.error("Lead save error:", err);
    res.status(500).json({ 
      success: false,
      error: err.message 
    });
  }
});

// GET - Get all leads (for testing)
router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json({ success: true, data: leads });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST - Update payment status when initiated
router.post("/payment-initiated", async (req, res) => {
  try {
    const { email, serviceCategory, amount, status } = req.body;

    if (!email) {
      return res.status(400).json({ 
        success: false,
        message: "Email is required"
      });
    }

    // Find the most recent lead for this email and update its payment status
    const lead = await Lead.findOneAndUpdate(
      { email: email.toLowerCase() },
      { 
        paymentStatus: status || "payment_initiated",
        paymentAmount: amount,
        paymentInitiatedAt: new Date()
      },
      { sort: { createdAt: -1 }, new: true }
    );

    if (!lead) {
      return res.status(404).json({ 
        success: false,
        message: "Lead not found for this email"
      });
    }

    res.json({ 
      success: true,
      message: "Payment status updated",
      leadId: lead._id
    });
  } catch (err) {
    console.error("Payment status update error:", err);
    res.status(500).json({ 
      success: false,
      error: err.message 
    });
  }
});

export default router;