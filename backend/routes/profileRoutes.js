const express = require("express");
const router = express.Router();
const profiles = require("../data/profiles.json");

// GET all profiles
router.get("/", (req, res) => {
  res.json(profiles);
});

// GET profile by ID
router.get("/:id", (req, res) => {
  const profile = profiles.find(p => p.id === req.params.id);

  if (!profile) {
    return res.status(404).json({ message: "Profile not found" });
  }

  res.json(profile);
});

module.exports = router;
