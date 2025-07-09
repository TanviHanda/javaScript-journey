const score = 400
console.log(score); //400

const balance = new Number(100)
console.log(balance); //[Number: 100]

console.log(balance.toString); //[Function: toString]
console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00

// const otherNumber = 1123.4966 //1.12e+3
const otherNumber = 123.8966 //124
console.log((otherNumber.toPrecision(3)));  // value precise krega

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000

// +++++++++++++++++ Maths +++++++++++++++++
