const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArray) {
	return numArray.length > 0 ? numArray.reduce((total, currentNumber) => total + currentNumber) : 0;
};

const multiply = function(numArray) {
  return numArray.reduce((total, currentNum) => total * currentNum);
};

const power = function(a, b) {
  let result = a;
  for (let i = 1; i < b; i++) {
    result *= a;
  }
	return result;
};

const factorial = function(num) {
	return num > 0 ? num * factorial(num - 1) : 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
