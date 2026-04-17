import mongoose from "mongoose";
import Admin from "./models/Admin.js";
import dotenv from "dotenv";

dotenv.config();

const initializeAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/company_leads");
    console.log("✅ Connected to MongoDB");

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: "admin@company.com" });

    if (existingAdmin) {
      console.log("⚠️  Admin already exists. Skipping initialization.");
      process.exit(0);
    }

    // Create default admin
    const admin = new Admin({
      email: "admin@company.com",
      password: "admin123",
      name: "System Admin",
      role: "super_admin",
      permissions: ["view_leads", "edit_leads", "delete_leads", "manage_admins"]
    });

    await admin.save();

    console.log("✅ Admin user created successfully!");
    console.log("📧 Email: admin@gmail.com");
    console.log("🔐 Password: admin123");
    console.log("⚠️  PLEASE CHANGE THIS PASSWORD IN PRODUCTION!");

    process.exit(0);
  } catch (err) {
    console.error("❌ Initialization error:", err.message);
    process.exit(1);
  }
};

initializeAdmin();
