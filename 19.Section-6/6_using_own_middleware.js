// Using Express
const express = require("express");

// app
const app = express();

//json middle ware ...
app.use(express.json());

//Own Middleware ...
app.use((req, res, next) => {
  console.log("From Starging Middleware ...");

  next();
});

// Get Root ...
app.get("/", (req, res) => {
  res.status(404).json({ message: "Hello from server side ", app: "Express " });
});

// Port 80 ...
const port = 80;
app.listen(port, () => {
  console.log(`App is running on port ${port} `);
});
