//Day 12
// Given an array of integers your solution should find the smallest integer.
//P: SmallestIntegerFinder
//R: number
//E: Given [34, 15, 88, 2] your solution will return 2
//    Given [34, -345, -1, 100] your solution will return -345

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         // need variable to hold smallest of array, and do the look
//         var min = Math.min.apply(Math, args)
//         console.log(min)
//         //return to the console for output
//         return min
//     }
//   }

//   or 

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//     return Math.min(...args)
//     }
// }

// Or arrow function

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0];
    }
  }