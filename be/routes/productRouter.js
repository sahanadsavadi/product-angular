const express = require("express");
const Product = require("../models/productModel");
const router = express();
router.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  return res.send(product);
});

router.get("/products", async (req, res) => {
  const products = await Product.find();
  return res.send(products);
});

router.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  return res.send(product);
});

router.put("/products/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body);
  return res.send(product);
});

router.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  return res.send({ message: 'Product deleted successfully' });
});
module.exports = router;
