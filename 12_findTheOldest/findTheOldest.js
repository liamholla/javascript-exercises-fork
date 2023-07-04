const myArray = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (people) {
  const now = Date.now();
  const currentDate = new Date(now);
  const currentYear = currentDate.getFullYear();

  const oldestPerson = people.reduce(function (accumulator, currentValue) {
    // Look at the currentValue death year(if exists),
    // if it exits, calculate the age based on death and birth year
    // if doesn't exist, calculate the age based on birth year and current date
    const currentAge = currentValue.yearOfDeath
      ? currentValue.yearOfDeath - currentValue.yearOfBirth
      : currentYear - currentValue.yearOfBirth;

    //Same logic with accumulator year. Remember the accumulator is the index in an array before
    // the currentValue
    const accAge = accumulator.yearOfDeath
      ? accumulator.yearOfDeath - accumulator.yearOfBirth
      : currentYear - accumulator.yearOfBirth;

    // If the next person is older than the previous person bring that else bring back the previous value
    return currentAge > accAge ? currentValue : accumulator;
  });

  return oldestPerson;
};

console.log(findTheOldest(myArray));

// Do not edit below this line
module.exports = findTheOldest;
