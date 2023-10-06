const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    image: { type: String },
    title: { type: String, required: true },
    subtitle: { type: String, default: null },
    seller: { type: String, required: true },
    location: { type: String, required: true },
    ability: {
      type: Object,
      required: true,
      properties: {
        paymentOnSpot: { type: Boolean, required: true },
        purchaseInPerson: { type: Boolean, required: true },
      },
    },
    productLoadingType: {
      type: String,
      required: true,
    },
    numberOfProducts: { type: Number, required: true },
    remainingProducts: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
