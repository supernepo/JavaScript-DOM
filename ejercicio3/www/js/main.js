"use strict";

const decimal = 25;
let decimalToBinary = decimal.toString(2);
console.log(`El número decimal ${decimal} en binario es ${decimalToBinary}`);

const binary = 11001;
const binaryToString = binary.toString();
const binaryToArrayString = Array.from(binaryToString).reverse();
const binaryToArrayNumber = [];
for (let i = 0; i < binaryToArrayString.length; i++) {
  const numberForEachIndex = Number(binaryToArrayString[i]);
  binaryToArrayNumber.push(numberForEachIndex);
}
const binaryToDecimal = binaryToArrayNumber.reduce((accumulator, index) => {
  return (accumulator = accumulator * Math.pow(2, index)), 0;
});
console.log(binaryToDecimal);
