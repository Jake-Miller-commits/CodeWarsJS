// Day 26 The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
//
// Given a year, return the century it is in.

// P: year - year to give century
// R: return - number
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20


function century(year) {
    //using ceiling method to round up to nearest century (100)
    return Math.floor((year-1)/100) + 1;
    
}

// OR using arrow function 

// const century = year => Math.ceil(year/100)