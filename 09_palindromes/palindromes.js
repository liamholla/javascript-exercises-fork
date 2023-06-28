const palindromes = function (string) {
  string = string.toLowerCase().replace(/[^\w]/g, "");
  const stringArray = string.split("");
  const reverseArray = stringArray.reverse();
  const reverseString = reverseArray.join("");
  console.log(reverseString);

  if (reverseString === string) {
    return true;
  } else {
    return false;
  }
};

console.log(palindromes("Lid off a daffodil"));

// Do not edit below this line
module.exports = palindromes;
