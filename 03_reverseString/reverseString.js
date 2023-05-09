const reverseString = function(string) {
    const stringArray = string.split('')

    let reverseArray = []

    let i = stringArray.length -1
    
    for (; i > -1 ; i--) {
        reverseArray.push(stringArray[i]);
    }

    return reverseArray.join('');
};

console.log(reverseString("Oh hello there"))

// Do not edit below this line
module.exports = reverseString;
