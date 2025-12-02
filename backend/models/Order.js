const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    quantity: { type: Number, required: true },
    sellingPrice: { type: Number, required: true }, // per unit
    costPrice: { type: Number, required: true }, // per unit
    orderDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
