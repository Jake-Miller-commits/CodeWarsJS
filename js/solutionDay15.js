//Day 15 Simple, remove the spaces from the string, then return the resultant string.
//P: x the string to remove whitespace
//R: return the string
//E: noSpace("Hello World") return "HelloWorld"

// function noSpace(x){
//   return x.replace(/\s+/g, '')
//   }

//OR 

function noSpace(x){return x.split(' ').join('')}