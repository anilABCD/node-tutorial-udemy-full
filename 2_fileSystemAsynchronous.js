const fs = require("fs");

let textIn = "";

// FileSystem Asynchronous has Callback
fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
  textIn = data;
  console.log(data);
});

console.log("end");

fs.writeFile("./txt/outputfinal.txt", "some text", "utf-8", (err, data) => {
  console.log("Written");
});

const textOut = `This is what we know about the avocado : ${textIn}.\n Created on ${Date.now()}`;
