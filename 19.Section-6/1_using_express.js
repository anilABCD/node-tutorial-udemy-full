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

// Post Root ...
app.post("/", (req, res) => {
  res.status(200).json({ message: "From Post ", app: "Express " });
});

// GET ... with path
app.get("/api/v1/tours", (req, res) => {
  res.send("Get Done");
});

// Optional /id/id2/Optionlal-Id3 access using req.params. ...
app.get("/api/v1/tours/:id/:id2/:id3?", (req, res) => {
  let tour = tours.find((tour) => tour.id == req.params.id);
  let tour2 = tours.find((tour) => tour.id == req.params.id2);
  let tour3 = tours.find((tour) => tour.id == req.params.id3);

  res.send(`${tour?.desc} , ${tour2?.desc} , ${tour3?.desc}`);
});

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

// Post Create Tour ...
app.post("/api/v1/tours", (req, res) => {
  console.log(req.body);
  res.status(200).json(req.body);
});

//Own Middleware : after or before ... executed in execution order  ...
app.use((req, res, next) => {
  // generally no one uses middleware at end ... ok
  console.log("From End Middleware ...");

  next();
});

// Port 80 ...
const port = 80;
app.listen(port, () => {
  console.log(`App is running on port ${port} `);
});

let tours = [
  {
    id: 1,
    desc: "some desc 1",
  },
  {
    id: 2,
    desc: "some desc 2",
  },
  {
    id: 3,
    desc: "some desc 3",
  },
  {
    id: 4,
    desc: "some desc 4",
  },
  {
    id: 5,
    desc: "some desc 5",
  },
];
