// Create Variables (3 ways)
var score = 10;
let score_2 = 12;
const key = 'ayush';
const key2 = `ayush`;


// Printing
console.log(`10`)
console.log(100)
console.log(key, score, score_2)

// Data Types
var total_score = undefined
var game_on = true

// Objects
var ball = {
    name : "barzuca",
    cost : 200,
    origin : "EU"
}  

var user = {
    name : "Ayush",
    age : 24,
    score : {
        "math" : 100,
        'python' : 100,
    }
}

/*  Defining Null vs Undefined
    --------------------------
    1. For undefined it has never been defined, 
      it can be defined with anything in the future
    2. For null its defined but assigned empty value
*/

var a;  // here a is undefined
var b = 10
b = null

console.log(a) // prints undefined
console.log(b) // prints null

a = 10
console.log(a) // Now we assign something to a

var user2 = {
    name : "Ayush",
    company : null,
    age : 24
}

console.log("Details of the user : ", user2)