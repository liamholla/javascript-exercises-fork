const convertToCelsius = function(fTemp) {
  let temp = (fTemp - 32) / 1.8;
  return Number(temp.toFixed(1));
};

const convertToFahrenheit = function(cTemp) {
  let temp = cTemp*1.8 + 32;
  return Number(temp.toFixed(1));
};

console.log(convertToCelsius(90))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
