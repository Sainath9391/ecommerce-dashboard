const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const Product = require("../models/Product");
const Customer = require("../models/Customer");

// Helper for month names
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * GET /api/analytics/overview
 * -> { totalOrders, totalUnits, totalRevenue, totalProfit }
 */
router.get("/overview", async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalOrders: { $sum: 1 },
          totalUnits: { $sum: "$quantity" },
          totalRevenue: {
            $sum: {
              $multiply: ["$sellingPrice", "$quantity"],
            },
          },
          totalProfit: {
            $sum: {
              $multiply: [
                { $subtract: ["$sellingPrice", "$costPrice"] },
                "$quantity",
              ],
            },
          },
        },
      },
    ]);

    const stats = result[0] || {
      totalOrders: 0,
      totalUnits: 0,
      totalRevenue: 0,
      totalProfit: 0,
    };

    res.json(stats);
  } catch (err) {
    console.error("Error in /overview:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * GET /api/analytics/monthly-sales
 * -> [ { month: "Jan", revenue: 12345 }, ... ]
 */
router.get("/monthly-sales", async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$orderDate" },
            month: { $month: "$orderDate" },
          },
          revenue: {
            $sum: {
              $multiply: ["$sellingPrice", "$quantity"],
            },
          },
        },
      },
      {
        $sort: { "_id.year": 1, "_id.month": 1 },
      },
    ]);

    const formatted = result.map((item) => ({
      month: MONTH_NAMES[item._id.month - 1] + " " + item._id.year,
      revenue: item.revenue,
    }));

    res.json(formatted);
  } catch (err) {
    console.error("Error in /monthly-sales:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * GET /api/analytics/customer-demographics
 * -> [ { label: "North", value: 123 }, ... ]
 * (Based on Customer.region)
 */
router.get("/customer-demographics", async (req, res) => {
  try {
    const result = await Customer.aggregate([
      {
        $group: {
          _id: "$region",
          count: { $sum: 1 },
        },
      },
      {
        $sort: { count: -1 },
      },
    ]);

    const formatted = result.map((item) => ({
      label: item._id || "Unknown",
      value: item.count,
    }));

    res.json(formatted);
  } catch (err) {
    console.error("Error in /customer-demographics:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * GET /api/analytics/top-products
 * -> [ { name, unitsSold, revenue }, ... ]
 */
router.get("/top-products", async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        $group: {
          _id: "$productId",
          unitsSold: { $sum: "$quantity" },
          revenue: {
            $sum: {
              $multiply: ["$sellingPrice", "$quantity"],
            },
          },
        },
      },
      {
        $sort: { revenue: -1 },
      },
      {
        $limit: 5,
      },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $unwind: "$product",
      },
      {
        $project: {
          _id: 0,
          name: "$product.name",
          unitsSold: 1,
          revenue: 1,
        },
      },
    ]);

    res.json(result);
  } catch (err) {
    console.error("Error in /top-products:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
