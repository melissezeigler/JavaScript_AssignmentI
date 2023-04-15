//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    
    for(let i = 0; i < dog_names.length; i++){
        if(dog_string.includes(dog_names[i])){
            //return (dog_names[i])
            return 'Matched dog_name'
        } else {
            return 'No Matches'
        }
    }
    //Your code goes here
}
console.log(findWords())
//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(){
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 === 0){
        arr.splice(i, 1, 'even index')
        }
    }
    return arr 
}
console.log(replaceEvens())
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// Four Codewars problems to JavaScript


//  FIRST CODEWARS
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') # returns true
// solution('abc', 'd') # returns false

function solution(text, ending){
    
    let text_list = text.split('');
    let ending_list = ending.split('');
    if(text_list.length < ending_list.length){
        return false
    }
    let k=ending_list.length
    while(k>=0){
        if(k==0){
            return true
        }
        if(text_list.pop() === ending_list.pop()){;
            k = k-1
        }
        else{
            return false
        }
    }            
}

let textytext = "JammyJamms"
let ending = "JammyJamms"
console.log(solution(textytext, ending))

//  SECOND CODEWARS
// import codewars_test as test
// from solution import multiply

// @test.describe("Fixed Tests")
// def fixed_tests():
//     @test.it('Basic Test Cases')
//     def basic_test_cases():
//         test.assert_equals(multiply(2,1), 2)


function multiply(a, b){
    return a*b;
}
console.log(multiply(4, 3))

// THIRD CODEWARS
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number){
    if(number % 2 === 0){
        return 'Even'
    }
    else {
        return 'Odd'
    }
}

console.log(even_or_odd(2))

// FOURTH CODEWARS
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.
// Examples:

// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"


function printer_error(s){
    let s_list = s.split('');
    let errors = 0;
    let count = s.length;
    for(let i = 0; i < count; i++){
        if(s_list[i] === "n" || s_list[i] === "o" || s_list[i] === "p" || s_list[i] === "q" || s_list[i] === "r" || s_list[i] === "s" ||
        s_list[i] === "t" || s_list[i] === "u" || s_list[i] === "v" || s_list[i] === "w" || s_list[i] === "x" || s_list[i] === "y" || s_list[i] === "z"){
            errors += 1
        }
    }
    return (`${errors} / ${count}`)
}
console.log(printer_error("123mmnnzzz"))