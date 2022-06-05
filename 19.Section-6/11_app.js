const express = require("express");
const tourRouter = require("./11_toureRouter");
const userRouter = require("./11_userRouter");

const app = express();

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

const port = 80;
app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
