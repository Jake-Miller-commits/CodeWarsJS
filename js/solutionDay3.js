// 03 Very simple, given an integer or a floating-point number, find its opposite.
// positive number to negative number in javascript


function opposite(number) {
    if (number > 0) {
        return -Math.abs(number)
    }else{
        return Math.abs(number) 
    }   
  }

// Another way

// function opposite(number) {
//     return(-number);
//   }

// This way using Math

// function opposite(number) {
//     return number * (-1);
// }
