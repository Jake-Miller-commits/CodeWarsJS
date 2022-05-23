// Day 14 Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// P: num = the number to summate
// R: return result
// E:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
    let result = 0
    for (var i = 1; i <= num; i++) {
      result += i
    }  
    return result
  }
  
  //Or Arrow function 
  
  // const summation = n => n * (n + 1) / 2;