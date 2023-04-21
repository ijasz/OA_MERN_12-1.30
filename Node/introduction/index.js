console.log("index.js is connected");
const { name, age } = require("./another");
const { sum } = require("./sum");

// console.log(sum);
// console.log(name, age);

console.log(sum(1, 4, 5, 6));
console.log(sum(1, 4, 1));
console.log(sum(1, 4));
// module.exports.name = "arthi";
// module.exports.age = 20;

// console.log("----------------");

// console.log(module);

// console.log("----------------");
