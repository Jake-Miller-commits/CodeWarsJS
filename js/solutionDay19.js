// Day 19 Description: Write a function "greet" that returns "hello world!"
// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?


// P: numbers - the array to square and sum
// E: For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function greet() {
    //Setting the string hellow world with const
    const hw = "hello world!"
    return hw
    //displaying the string instead of returning the hw
    console.log("hello world!")
}

// OR with an arrow function

// const greet = () => "hello world!";


//OR Fun way

// function greet() {
//     return '1101000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100 100001'.split(' ').map((bin) => String.fromCharCode(parseInt(bin, 2))).join('');
//   }