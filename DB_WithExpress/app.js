const rateLimit = require("express-rate-limit");
const express = require("express");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const morgan = require("morgan");
const app = require("./server");

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP , Please try again in a hour",
});

app.use(morgan("dev"));

// 1) Setting Security HTTP Headers
app.use(helmet());

// 2) Rate Limiter
app.use(limiter);

// 3) JSON Data Limiter
app.use(express.json({ limit: "10kb" }));

// 4) Data Sanitization
app.use(mongoSanitize());

// 5) Data sanitization against xss
app.use(xss());

// 6) Preventing parameter pollution
app.use(
  hpp({
    whitelist: ["duration"],
  })
);

const sampleRouter = require("./routes/sampleRouter");

app.use("/sampleRoute/", sampleRouter);

app.get("/", (req, res, next) => {
  res.status(200).send("<h1>Hello World</h1>");
});
