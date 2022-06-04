// Day 22 Implement a function which convert the given boolean value into its string representation. Note: Only valid inputs will be given.

// P: b - true or false
// R: return
// E: For example, for true - "true" or false - "false"

// function booleanToString(b){
//     if (b === true) {
//         results = "true"
//         return results
//     } else {
//         results = "false"
//         return results
//     }
//   }


// Or using Arrow function

function booleanToString(b){
    return b.toString();
  }

// OR 

// function booleanToString(b){
//     return b ? 'true' : 'false';
//   }


// OR 

// function booleanToString(b){
//     return `${b}`
//   }