/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both

let age = 34; 
console.log(age);
let price = 12.99;
console.log(price);

// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)

let whatIsThis = "Sandra" / 2;
console.log("WhatIsThis " + whatISThis)

// TODO 2: Print basic math ops: + - * /
console.log("2 + 2 =  ", 2 + 2)
console.log("4 - 2 = ", 4 - 2)
console.log("3 * 2 = ", 3 * 2)
console.log("6 / 2 = ", 6 / 2)

// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)

console.log("2 ** 3 = ", 2 ** 3)
console.log("7 % 2 = ", 7 % 2)

// TODO 3: Assignment operators with score variable
let score = 10 
console.log(score)
score += 5
console.log(score)
score -= 2
score *= 4
score /= 2
console.log(score)

// TODO 4: Expressions with operator precedence
let result = ((7+5) / 3) - 8;
console.log("Result ", result)

let result2 = 2 + 2 * 2 // 6
let result3 = (2 + 2) * 2 // 8


// TODO 5: Strings (single, double, backticks)
console.log("Mr. Explorer")
console.log("Mr. Explorer")
console.log(`Mr. Explorer`)

let name = "Mr. Explorer"
let age2 = (2025 - 1958)

console.log(`Hello, my name is ${name} and I am ${age2} year old`)



// TODO 6: String properties and methods
let greeting = "Hello there";
// - greeting.length
console.log("Greeting length: " + greeting.length)
// - charAt(0), charAt(5), [3]
console.log("CharAT (0)", greeting.charAt (0))
console.log("ChartAt (5) ", greeting.charAt (5) ) 
console.log("[3]", greeting[3])
// - indexOf("sad")
let phrase = "Don't be sad, be happy!"
console.log("Index of sad", phrase.indexOf ("sad"))
// - repeat()
console.log("la".repeat(5))
// - substring, substr, slice examples
console.log("substring ", phrase.substring (0, 3))
console.log("Substr () ", phrase.substr (0,3))
console.log("Slice ", phrase.slice(-23, -20))
// 🚀 Stretch Goals
// - Even number check using %
for(let i = 1; i < 101; i++) {
    if (i % 2 == 0) {
        console.log(`The answer ${i} is even`)
    } else {
        console.log(`The answer ${1} is odd`)
    }
}
// - localeCompare() example
console.log("apple".localeCompare("banana"))
