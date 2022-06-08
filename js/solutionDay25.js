// Day 25 In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// P: numbers - array to map
// R: return "5 1"
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers){
    // split to create the array and map them
    let arr = numbers.split(' ').map(Number);
    //to return and do the max and min for the arr array  
    return Math.max(...arr) + ' ' + Math.min(...arr);
  }


// OR 


// function highAndLow(numbers) {
//     numbers = numbers.split(' ').map(Number)
    
//     var min = Math.min.apply(null, numbers)
//     var max = Math.max.apply(null, numbers)
    
//     return max + ' ' + min
//   }