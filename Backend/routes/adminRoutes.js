import express from "express";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import Lead from "../models/Lead.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔐 Admin Login - Issue JWT Token
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // Check admin in database
    const admin = await Admin.findOne({ email: email.toLowerCase(), isActive: true });

    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare passwords
    const isPasswordMatch = await admin.comparePassword(password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { adminId: admin._id, email: admin.email, role: admin.role },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "7d" }
    );

    // Update last login
    admin.lastLogin = new Date();
    await admin.save();

    res.json({
      success: true,
      token,
      admin: {
        id: admin._id,
        email: admin.email,
        name: admin.name,
        role: admin.role
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

// 📊 Get All Leads (Protected) - with filters
router.get("/leads", protect, async (req, res) => {
  try {
    const { status, serviceCategory, page = 1, limit = 20 } = req.query;

    let filter = {};
    if (status) filter.applicationStatus = status;
    if (serviceCategory) filter.serviceCategory = serviceCategory;

    const skip = (page - 1) * limit;

    const leads = await Lead.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Lead.countDocuments(filter);

    res.json({
      success: true,
      data: leads,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching leads", error: err.message });
  }
});

// 📋 Get Single Lead
router.get("/leads/:id", protect, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }
    res.json({ success: true, data: lead });
  } catch (err) {
    res.status(500).json({ message: "Error fetching lead", error: err.message });
  }
});

// ✏️ Update Lead Status/Notes (Protected)
router.put("/leads/:id", protect, async (req, res) => {
  try {
    const { applicationStatus, adminNotes, assignedTo, paymentStatus } = req.body;

    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      {
        applicationStatus,
        adminNotes,
        assignedTo,
        paymentStatus,
        updatedAt: new Date()
      },
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    res.json({ success: true, message: "Lead updated", data: lead });
  } catch (err) {
    res.status(500).json({ message: "Error updating lead", error: err.message });
  }
});

// 🗑️ Delete Lead (Protected)
router.delete("/leads/:id", protect, async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }
    res.json({ success: true, message: "Lead deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting lead", error: err.message });
  }
});

// 📊 Dashboard Stats
router.get("/stats", protect, async (req, res) => {
  try {
    const totalLeads = await Lead.countDocuments();
    const pendingLeads = await Lead.countDocuments({ applicationStatus: "pending" });
    const completedLeads = await Lead.countDocuments({ applicationStatus: "completed" });
    const byService = await Lead.aggregate([
      { $group: { _id: "$serviceCategory", count: { $sum: 1 } } }
    ]);

    res.json({
      success: true,
      stats: {
        totalLeads,
        pendingLeads,
        completedLeads,
        byService
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching stats", error: err.message });
  }
});

export default router;