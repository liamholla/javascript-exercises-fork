const fibonacci = function (number) {
  let fib = [1];

  // Need separate rules if the user asks for 1st of 2nd Fib number
  if (number < 0) {
    return "OOPS";
  } else if (number === 1) {
    return fib;
  } else if (number === 2) {
    fib = [1, 1];
    return fib;
  } else {
    fib = [1, 1];
    for (i = 2; i < number; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
    }
    console.log(fib);
    value = fib[number - 1];
    return value;
  }
};

console.log(fibonacci(20));

// Do not edit below this line
module.exports = fibonacci;
