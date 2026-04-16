import express from "express";
import Lead from "../models/Lead.js";

const router = express.Router();

// POST - Save Lead
router.post("/submit", async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();

    res.status(201).json({ success: true, message: "Lead saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;