// Day 30 Given an array of integers, return a new array with each value doubled.

// P: x - integer to double
// R: return - array

// Examples:
// [1, 2, 3] --> [2, 4, 6]


function maps(x){
    let newArr = [];
    for(let i = 0; i < x.length; i++){
        newArr.push(x[i] * 2);
    }
    return newArr;
}