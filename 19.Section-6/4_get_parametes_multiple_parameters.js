// Using Express
const express = require("express");

// app
const app = express();

// Optional /id/id2/Optionlal-Id3 access using req.params. ...
app.get("/api/v1/tours/:id/:id2/:id3?", (req, res) => {
  let tour = tours.find((tour) => tour.id == req.params.id);
  let tour2 = tours.find((tour) => tour.id == req.params.id2);
  let tour3 = tours.find((tour) => tour.id == req.params.id3);

  res.send(`${tour?.desc} , ${tour2?.desc} , ${tour3?.desc}`);
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
