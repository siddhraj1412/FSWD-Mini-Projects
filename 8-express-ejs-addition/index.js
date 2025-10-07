const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// Set EJS as templating engine
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// GET route - show the form
app.get("/", (req, res) => {
  res.render("index", { name: "Siddhraj Thakor", id: "23AIML070" });
});

// POST route - calculate sum
app.post("/add", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const sum = num1 + num2;

  res.render("result", { sum, num1, num2, name: "Siddhraj Thakor", id: "23AIML070" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
