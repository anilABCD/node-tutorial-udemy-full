const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.emit('newSale');

myEmitter.on('newSale', () => {
  console.log('There was a new sale!');
});

myEmitter.on('newSale', () => {
  console.log('Customer name : Jonas');
});

myEmitter.on('newSale', (stock) => {
  console.log(stock, 'with parameter');
});

myEmitter.emit('newSale', 9);
