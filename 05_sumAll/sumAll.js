const sumAll = function(a,b) {

// Throw error messages if a non-number of negative number is used
    if(typeof a !== 'number' || typeof b !== 'number') {
        return "ERROR"
    }

    if(a < 0 || b < 0) {
        return "ERROR"
    }

// create a variable to hold the entire sum
    let sum = 0;

// Swap the values if the larger number occurs first
    if (a > b) {
        [a,b] = [b,a]
    }

    for(let i = a;i < b+1; i++) {
        sum = sum + i
    }

    return sum
};

console.log(sumAll(2,100))

// Do not edit below this line
module.exports = sumAll;
