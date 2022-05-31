const EventEmitter = require('events');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const sales = new Sales();

sales.on('newSale', () => {
  console.log('new sale happened!');
});

sales.emit('newSale');
