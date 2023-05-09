//set up a function with rest paramaters to allow multiple inputs
const removeFromArray = function(array, ...remove) {


    for (let i = 0; i < remove.length; i++) {
    
        //disregard parameters that don't exist within original array
        if (array.indexOf(remove[i]) >= 0) {
        
        // find the index of the i'th parameter in the ...remove array
        let index = array.indexOf(remove[i]) 
        array.splice(index,1) }

    }
    
    return array

};

console.log(removeFromArray([1,2,3,4],"1"))

// Do not edit below this line
module.exports = removeFromArray;
