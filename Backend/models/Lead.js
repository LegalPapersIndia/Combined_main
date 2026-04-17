import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  // Service Type - which website form (food, gst, iec, etc)
  serviceCategory: String,
  leadSource: String,

  // Application Details
  applicationType: String,
  applicationStatus: {
    type: String,
    enum: ["pending", "in-progress", "completed", "rejected"],
    default: "pending"
  },

  // Personal Info
  fullName: String,
  applicantName: String,
  email: String,
  mobile: String,
  phone: String,

  // Company Info
  companyName: String,
  businessName: String,
  natureOfBusiness: String,
  businessType: String,
  designation: String,

  // Address
  state: String,
  address1: String,
  address2: String,
  city: String,
  district: String,
  pinCode: String,
  pin: String,

  // GST Specific
  annualTurnover: String,
  panNumber: String,
  gstinNumber: String,
  businessInvestment: String,
  businessIncome: String,
  composition: String,

  // Food/IEC Specific
  foodCategory: String,
  investment: String,
  members: String,
  
  // Raw payload for any unstructured data
  rawPayload: mongoose.Schema.Types.Mixed,

  // Payment Status
  paymentStatus: {
    type: String,
    enum: ["pending", "payment_initiated", "completed", "failed"],
    default: "pending"
  },
  paymentId: String,
  orderId: String,
  amount: Number,
  paymentAmount: Number,
  paymentInitiatedAt: Date,

  // Admin Notes
  adminNotes: String,
  assignedTo: String,

  // Timestamps
  submittedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// Index for better queries
leadSchema.index({ email: 1 });
leadSchema.index({ mobile: 1 });
leadSchema.index({ serviceCategory: 1 });
leadSchema.index({ applicationStatus: 1 });
leadSchema.index({ createdAt: -1 });

export default mongoose.model("Lead", leadSchema);