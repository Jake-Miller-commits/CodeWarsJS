// Day 24 Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// P:name - first and last name with a space
// R: return
// Example
// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


// function abbrevName(name){
//     //using Array split and index position
//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//   }

// OR arrow function


function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}