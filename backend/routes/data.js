const express = require("express");
const router = express.Router();

const Product = require("../models/Product");
const Customer = require("../models/Customer");
const Order = require("../models/Order");

// ---------- PRODUCTS ----------

// Add a new product
router.post("/products", async (req, res) => {
  try {
    const { name, category } = req.body;
    if (!name) return res.status(400).json({ message: "Product name required" });

    const product = await Product.create({ name, category });
    res.status(201).json(product);
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all products (for dropdowns)
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find().sort({ name: 1 });
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ---------- CUSTOMERS ----------

// Add a new customer
router.post("/customers", async (req, res) => {
  try {
    const { name, age, region } = req.body;
    if (!name) return res.status(400).json({ message: "Customer name required" });

    const customer = await Customer.create({ name, age, region });
    res.status(201).json(customer);
  } catch (err) {
    console.error("Error creating customer:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all customers (for dropdowns)
router.get("/customers", async (req, res) => {
  try {
    const customers = await Customer.find().sort({ name: 1 });
    res.json(customers);
  } catch (err) {
    console.error("Error fetching customers:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ---------- ORDERS ----------

// Add a new order
router.post("/orders", async (req, res) => {
  try {
    const {
      productId,
      customerId,
      quantity,
      sellingPrice,
      costPrice,
      orderDate,
    } = req.body;

    if (!productId || !customerId || !quantity || !sellingPrice || !costPrice) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const order = await Order.create({
      productId,
      customerId,
      quantity,
      sellingPrice,
      costPrice,
      orderDate: orderDate ? new Date(orderDate) : new Date(),
    });

    res.status(201).json(order);
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// (Optional) Get all orders – for debugging
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("productId", "name")
      .populate("customerId", "name region");
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
