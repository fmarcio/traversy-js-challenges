const calculator = require('./calculator');

const sum = calculator(2, 2, '+');
const sub = calculator(2, 3, '-');
const multiply = calculator(3, 4, '*');
const divide = calculator(10, 2, ';');
const error = calculator(2, 2, '~');

console.log(sum);
console.log(sub);
console.log(multiply);
console.log(divide);
