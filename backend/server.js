const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Mongo connection (FIXED)
mongoose
  .connect(process.env.MONGO_URI) // ← remove extra options
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// Routes
const analyticsRoutes = require("./routes/analytics");
app.use("/api/analytics", analyticsRoutes);

// Root
app.get("/", (req, res) => {
  res.send("E-Commerce Analytics API is running");
});

//data
const dataRoutes = require("./routes/data");
app.use("/api/data", dataRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
