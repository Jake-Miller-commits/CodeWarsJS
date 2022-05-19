// Day 10 Write a function called repeatStr which repeats the given string string exactly n times.
//P: repeatStr(x,y) x= times of repeat y= string to repeat
//R:return / console 
//E:
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    return s.repeat(n);
  }

// OR Using Arrow function

// repeatStr = (n, s) => s.repeat(n)

// OR Using Array

// function repeatStr (n, s) {
//     var str="";
//     for(var i=0; i < n; i++)
//       str+=s;
//       return str;
//     }
