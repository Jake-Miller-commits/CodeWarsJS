// Day 11 Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
//P: getCount(str) str= String to count vowels
//R:return / console vowel count
//E: 1 2 3 4 5 

function getCount(str) {
    var vowelsCount = 0;  
    const vowels =  ["a","e","i","o","u"]
      for (let char of str){
          if (vowels.includes(char)) {
              vowelsCount++
          }
       }  
    return vowelsCount;
  }


// Or 

// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
//   }

// Or 


//   function getCount(str) {
//     var vowelsCount = 0;
//     vowelsCount = str.match(/[aeiou]/gi);
//     return vowelsCount ? vowelsCount.length:0;
//   }
