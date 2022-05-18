// 06 In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
////P: num - the number to make negative
//R: 
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
//E: makeNegative(1);    // return -1
// makeNegative(-5);   // return -5

// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.


function makeNegative(num) {
    //an if for negative using math.abs only if true
    if (num > 0) {
        return -Math.abs(num)
    }else{
        return -Math.abs(num) 
    }   
  }

// or 

// function makeNegative(num) {
//     return -Math.abs(num);
//   }

// function makeNegative(num) {
//     return num < 0 ? num : -num;
//   }

// or

// function makeNegative(num) {
//     return num > 0 ? -num : num;
//   }
