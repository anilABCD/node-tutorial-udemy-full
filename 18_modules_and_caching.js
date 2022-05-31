// Example 1 : single class
const C = require('./10.Modules/test-module'); // any name C or ...

console.log(require('module').wrapper); // this is the wrapper funciton ...
console.log(arguments); // arguments has all variables and functions which are default imported ...

const cal = new C(); // imported using require ...
console.log(cal.add(1, 3));

// Example 2 : multiple classes or functions
let newModule = require('./10.Modules/text-module-2');
console.log(newModule.add(1, 10));
console.log(newModule.multiply(1, 25));

// Example 3  :
let { add, multiply } = require('./10.Modules/text-module-2');
console.log(add(10, 1));
console.log(multiply(1, 25));

// Example 3 : CACHING
require('./10.Modules/test-module-3')(); // We are also calling that imported function // ok ...
require('./10.Modules/test-module-3')();
require('./10.Modules/test-module-3')();
// Hello from the module :::: is called only once because the module is cached ... ok
