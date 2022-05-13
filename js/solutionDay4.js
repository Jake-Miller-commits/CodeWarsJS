// PREP
// 1 to num, 3 to fizz, 5 to buzz, 3 & 5 fizzbuzz
//P: num, whole, +, 
//R: console
//E:

function fizzBuzz(num){
    //loop to number
    //conditionals %  3&5%, %3, %5
    //console.log num or fizz,buzz,fizzbuzz
    for (i = 1; i <= num; i++) {    // setup loop to go through array of given length
        if (num % 5 == 0 && num % 3 == 0) {
            console.log('FizzBuzz')
    
        } else if (num % 5 == 0) {  
                console.log('buzz');       
                
        } else if (num % 3 == 0) {  
                console.log('fizz');      
                
        } else { console.log(num);
    
            
        }    
    }
}

fizzBuzz(5)  //1,2,fizz,4,buzz
fizzBuzz(3)  //1,2,fizz
fizzBuzz(15) //1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz