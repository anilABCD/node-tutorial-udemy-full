const fs = require('fs');

const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  //
  // --------------------------
  //
  //   Solution 1 // not feasible
  //   fs.readFile('txt/large-file-for-streams.txt', (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  //
  // --------------------------
  //
  //  Solution 2 // fieseble but backpressure happens so not fieseble
  //
  // backpressure : Cannot send the data nearly as fast as it is receiving it
  // from the file , does that make sense? : no
  // so we have to fix that with a solution .
  //   const readable = fs.createReadStream('txt/large-file-for-streams.txt');
  //   readable.on('data', (chunk) => {
  //     console.log('start');
  //     res.write(chunk);
  //   });
  //   readable.on('end', () => {
  //     // "end event compulsory"
  //     console.log('end');
  //     res.end(); // res.end() compulsory
  //   });
  //   readable.on('error', (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end('File Not Found'); // compulsory
  //   });
  // --------------------------
  //
  // Solution 3 : handling the issue of backpressure ...
  //
  const readable = fs.createReadStream('txt/large-file-for-streams.txt');
  readable.pipe(res);
  // handles all end event , error event internally ... no need to write seperately ...
  // readableSource.pipe(writableDest)
  //
  //
});

server.listen(8000, () => {
  console.log('Listening on 8000');
});
