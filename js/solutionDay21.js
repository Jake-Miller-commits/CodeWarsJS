// Day 21 Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// Note: [Make sure you type the exact thing I wrote or the program may not execute properly]
// P: name
// R: return
// E: For example, for "Jake" - "Hello, Jake how are you doing today?"

function greet(name){
    //using a template literal to input the name into the string
    return `Hello, ${name} how are you doing today?`
  }


// Or using Arrow function
// const greet = name => `Hello, ${name} how are you doing today?`;