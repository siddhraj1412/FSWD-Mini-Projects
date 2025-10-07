const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Siddhraj Thakor | ID: 23AIML070's Express Server!");
});

// About route
app.get("/about", (req, res) => {
  res.send("I am Siddhraj A. Thakor from AIML 3rd Year");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("linkedin :- https://www.linkedin.com/in/siddhraj-thakor");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
