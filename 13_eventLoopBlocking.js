const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => {
  console.log('Timer 1 finished');
}, 0);

setImmediate(() => {
  console.log('Immediate 1 finished');
});

fs.readFile('txt/output.txt', 'utf-8', (err, data) => {
  console.log('I/O Finished');

  ///////////////////////////////
  // Code blocking example ::::
  ///////////////////////////////
  console.log(
    '------ CODE BLOCKING EXAMPLE (Synchronous Version with no call back for crypto.pbkdf2) -------------'
  );

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, 'Encryption 1 done ');
  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, 'Encryption 2 done ');
  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, 'Encryption 3 done ');
  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, 'Encryption 4 done ');
  setTimeout(() => {
    console.log('Timer 2 finished');
  }, 0);

  setTimeout(() => {
    console.log('Timer 3 finished');
  }, 3000);

  // this was firest called because the next stage after I/O is Immediate Callbacks ...
  setImmediate(() => {
    console.log('Immediate 2 finished');
  });

  process.nextTick(() => console.log('Process.nextTick'));
});
