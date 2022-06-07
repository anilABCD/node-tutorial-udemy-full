const express = require("express");
const morgan = require("morgan");
// for loading configuration ...
const dotenv = require("dotenv");

const tourRouter = require("./13_tourRouter");
const userRouter = require("./13_userRoute__subject_multiple_middleware");

// setting configuration path ...
dotenv.config({ path: `${__dirname}/config.env` });

const app = express();

// accessing the configuration ...
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json()); // for post requrest , accessing req.body

// using static files
app.use(express.static(`${__dirname}/public/`));

console.log(app.get("env"));
console.log(process.env);

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

const port = 80;
app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});

// in terminal we can write /> SOMEVARIABLE=abc VARIABLE2=bbc nodemon app.js
// SOMEVARIABLE=abc
// VARIABLE2=bbc
// are added to process.env
