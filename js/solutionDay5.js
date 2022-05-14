//Day 5 - It's pretty straightforward.
//Your goal is to create a function that removes the first and last characters of a string.
//You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//P: str, no less than two
//R: console
//E: removechar("Test") -> console output 'es'

// function removeChar(str){
//   return str.substring(1, str.length-1);
//   };


//         Using array manipulation
// function removeChar(str){
//     //You got this!
//      str1 = str.split('');
//      str1.shift();
//      str1.pop();
//      return str1.join('');
       
//    };


function removeChar(str) {
    //slice will take the 1st index with 1 and last with -1 then return it
    return str.slice(1, -1);
  }
   
   