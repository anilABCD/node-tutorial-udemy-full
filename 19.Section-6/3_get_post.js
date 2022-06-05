// Using Express
const express = require("express");

// app
const app = express();

// Get Root ...
app.get("/", (req, res) => {
  res.status(404).json({ message: "Hello from server side ", app: "Express " });
});

// Post Root ...
app.post("/", (req, res) => {
  res.status(200).json({ message: "From Post ", app: "Express " });
});

// Port 80 ...
const port = 80;
app.listen(port, () => {
  console.log(`App is running on port ${port} `);
});
