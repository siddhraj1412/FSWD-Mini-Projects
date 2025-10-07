const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Item = require("./models/Item");
const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/crudDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

// Set EJS
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes

// Read - list all items
app.get("/", async (req, res) => {
  const items = await Item.find();
  res.render("index", { items, name: "Siddhraj Thakor", id: "23AIML070" });
});

// Show add form
app.get("/add", (req, res) => {
  res.render("add", { name: "Siddhraj Thakor", id: "23AIML070" });
});

// Create - add new item
app.post("/add", async (req, res) => {
  const { name, description } = req.body;
  await Item.create({ name, description });
  res.redirect("/");
});

// Show edit form
app.get("/edit/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.render("edit", { item, name: "Siddhraj Thakor", id: "23AIML070" });
});

// Update item
app.post("/edit/:id", async (req, res) => {
  const { name, description } = req.body;
  await Item.findByIdAndUpdate(req.params.id, { name, description });
  res.redirect("/");
});

// Delete item
app.get("/delete/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
