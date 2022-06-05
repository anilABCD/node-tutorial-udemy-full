const express = require("express");
const tourRouter = require("./11_toureRouter");
const userRouter = require("./11_userRouter");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

const port = 80;
app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
