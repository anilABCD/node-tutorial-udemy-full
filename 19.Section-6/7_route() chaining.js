// Using Express
const express = require("express");

// app
const app = express();

//json middle ware ...
app.use(express.json());

// route ... chaining http methods ...
app
  .route("/api/v1/someRoute")
  .get((req, res, next) => {
    console.log("someRoute");
    res.send("Hello");
    next();
  })
  .post((req, res) => {
    console.log("someRoute");
    res.send("Hello");
  });

// Port 80 ...
const port = 80;
app.listen(port, () => {
  console.log(`App is running on port ${port} `);
});
