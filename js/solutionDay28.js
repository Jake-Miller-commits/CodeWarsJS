// Day 28 Create a function , You will be given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.


// P: time - 
// R: return - litres = Number

// Examples:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

function litres(time) {
    return Math.floor(time * 0.5);
  }

// OR arrow function

// const litres = time => Math.floor(time * 0.5);