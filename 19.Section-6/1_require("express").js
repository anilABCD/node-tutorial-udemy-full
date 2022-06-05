// Using Express
const express = require("express");

// app
const app = express();

// Start Sever ...
const port = 80;
app.listen(port, () => {
  console.log(`App is running on port ${port} `);
});
