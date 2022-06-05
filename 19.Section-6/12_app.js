const express = require("express");
const tourRouter = require("./12_sub_tourRouter_route.param()");
const userRouter = require("./12_userRoute");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json()); // for post requrest , accessing req.body

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

const port = 80;
app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
