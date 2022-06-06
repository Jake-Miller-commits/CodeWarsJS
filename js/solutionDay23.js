// Day 23 Convert number to reversed array of digits, Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// P: b - true or false
// R: return
// E: For example, 348597 => [7,9,5,8,4,3]
//                      0 => [0]


function digitize(n) {
    //toString() - for stringify
    //split - each into an array
    //reverse - reverse the index order of the array
    //map(Number) - for the for of loop to interate each
    return n.toString().split("").reverse().map(Number);
  }


// OR ?

// digitize = n => [...String(n)].map(Number).reverse() 