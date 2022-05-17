//Day 05 Complete the solution so that it reverses the string passed into it.
//P: str - The word to reverse
//R: 
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
//E: solution(world) = "dlrow"

function solution(str){
    //split - each into an array
    //reverse - reverse the index order of the array
    //join - bring the array back to string
    return str.split('').reverse().join('');
}

// // or

// const solution = str => str.split('').reverse().join('');