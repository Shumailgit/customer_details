// routes/customerRoutes.js
const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

// POST: Create new customer
router.post("/customers", async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ message: "Error saving customer", error });
  }
});

// GET: Fetch all customers
router.get("/customers", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching customers", error });
  }
});

module.exports = router;
