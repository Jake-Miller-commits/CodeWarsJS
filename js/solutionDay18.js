// Day 18 Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// P: arrayOfSheep - true for present and false for not
// E: Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    //const arrayOfSheep = [true, false, true, false, true];
    const count = arrayOfSheep.filter(Boolean).length;
    return count
  }


// Or using arrow function

//const countSheeps = arrayOfSheeps => arrayOfSheeps.filter(s => s).length;


//OR using array reduce

// function countSheeps(arrayOfSheep) {
//     return arrayOfSheep.reduce(function(result, current) {
//       if (current) result++;
//       return result;
//     }, 0);
//   }