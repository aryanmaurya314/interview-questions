const myFilter = require("./myFilter");
const myMap = require("./myMap");
const myReduce = require("./myReduce");

Array.prototype.myMap = myMap;
Array.prototype.myFilter = myFilter;
Array.prototype.myReduce = myReduce;

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.myReduce((acc, curr, i) => acc + curr, 0);
const doubledNumbers = numbers.myMap((num) => 2 * num);
const evenNumbers = numbers.myFilter((num) => (num & 1) === 0);

console.log({ sum, evenNumbers, doubledNumbers });
