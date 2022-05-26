// Day 17 Complete the square sum function so that it squares each number passed into it and then sums the results together.
// P: numbers - the array to square and sum
// E: For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    // using reduce to walk through the array creating sum 
    // arrow function to square sum together
    return numbers.reduce((sum,num) => sum + (num * num), 0);
  }

// OR Higher order funcation 

// function squareSum(numbers){
//     return numbers.reduce(function(sum, n){
//       return (n*n) + sum;
//     }, 0)
//   }

// // OR Long drawn out

// function squareSum(numbers){
//     return numbers.map(square).reduce(sum);
//   }
  
//   function square(number) {
//     return number * number;
//   }
  
//   function sum(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
//   }