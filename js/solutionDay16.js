//Day 16 Create a function to input array of numbers. Sum all of the numbers. Console log the sum.
//P: nums - Array to reduce
//R: console - number
//E:

let nums = [42,19,77,33,57]
//just to give nums an array so I dont have to

function numreduce(nums){
    //nums reduce using accumulator 
let sum = nums.reduce( (acc,c) => acc + c, 0  )
console.log(sum)
}