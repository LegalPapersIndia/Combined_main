import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Lead from "../models/Lead.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

const ADMIN = {
  email: "admin@gmail.com",
  password: "admin123" // simple password
};

// 🔐 Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (email !== ADMIN.email) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

const isMatch = password === ADMIN.password;

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.json({ token });
});

// 📊 Get All Leads (Protected)
router.get("/leads", protect, async (req, res) => {
  const leads = await Lead.find().sort({ createdAt: -1 });
  res.json(leads);
});

export default router;