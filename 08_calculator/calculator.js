const add = function (a, b) {
  return a + b;
};

console.log(add(5, 10));

const subtract = function (a, b) {
  return a - b;
};

console.log(subtract(5, 10));

const array = [1, 5];

const sum = function (array) {
  const sumNum = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  return sumNum;
};

console.log(sum(array));

const multiply = function (array) {
  if (array.length === 0) {
    return 0;
  }
  const mulNum = array.reduce(
    function (accumulator, currentValue) {
      return accumulator * currentValue;
    },
    [1]
  );
  return mulNum;
};

console.log(multiply([4, 10, 23]));

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

console.log(factorial(10));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
