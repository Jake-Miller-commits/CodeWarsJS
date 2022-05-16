//Day07 Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
//P: true or false 
//R: console Yes or No
//E:booltoWord(true) = "Yes"

function boolToWord( bool ){
    if (bool){
        return "Yes" //if booltoWord(true)
    }else{
        return "No" //if booltoWord(false/or anything)
    }
  }

// //   OR with arrow function

// const boolToWord = bool => bool ? 'Yes' : 'No';

// function boolToWord( bool ){
//     return bool ? 'Yes':'No';
//   }