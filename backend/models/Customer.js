const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number },
    region: { type: String }, // "North", "South", etc.
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", CustomerSchema);
