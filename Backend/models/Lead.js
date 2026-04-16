import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  applicationType: String,
  fullName: String,
  email: String,
  mobile: String,

  companyName: String,
  natureOfBusiness: String,
  investment: String,
  members: String,

  state: String,
  address1: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Lead", leadSchema);