const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Product = require("./models/Product");
const app = express();

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/productDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Routes

// GET all products
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// POST new product
app.post("/api/products", async (req, res) => {
  const { name, price, description } = req.body;
  const product = new Product({ name, price, description });
  await product.save();
  res.json(product);
});

// GET single product
app.get("/api/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// PUT update product
app.put("/api/products/:id", async (req, res) => {
  const { name, price, description } = req.body;
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { name, price, description },
    { new: true }
  );
  res.json(product);
});

// DELETE product
app.delete("/api/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
