const express = require("express");
require("dotenv").config();
require("express-async-errors");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const productRouter = require("./routes/productRouter");
// Middleware
app.use(express.json());
app.use(cors())
// Routes
app.use(productRouter);
app.use((err, req, res, next) => {
  res.status(500).send("Internal Server Error");
});
// Start Server
app.listen(process.env.PORT, async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log(`Mongodb is connect url is : ${process.env.MONGODB_URL}`);
    console.log(`Server is run in port:${process.env.PORT}`);
  } catch (error) {
    throw error;
  }
});
