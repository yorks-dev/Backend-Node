var a = 10;
var b = 9;

// (condition) ? (expr_true) : (expr_false)
let c = (b > a) ? b : a   
console.log(c)

// Comparing string object and literal
var a = new String("ayush");
var b = "ayush"
console.log(a === b)  // should give false as it does not do type conversion
console.log(a == b) // it type converts so true
console.log(typeof(a), typeof(b))