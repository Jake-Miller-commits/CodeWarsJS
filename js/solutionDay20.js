// Day 20 We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
// P: str - "1"
// E: For example, for "1", return 1


// const stringToNumber = function(str){
//     str = parseInt(str, 10);
//     return str
//   }


//OR 

// var stringToNumber = function(str){
//     return parseInt(str);
//   }

  // OR arrow function

  const stringToNumber = str => Number(str)