const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./13_tourRouter");
const userRouter = require("./13_userRoute__subject_multiple_middleware");

const app = express();

app.use(morgan("dev"));
app.use(express.json()); // for post requrest , accessing req.body

// using static files
app.use(express.static("./public/"));

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

const port = 80;
app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
