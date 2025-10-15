/*1. toNumber
undefined -> NaN
Null -> +0
true -> 1, false -> 0
symbol - Type error
strings - algo in documentation.
*/

// Example - The substraction operator uses toNumber internally
// a - b -> toNumber(a) - toNumber(b) is done. 
// "10" - NaN -> 10 - (+0) = 10
// 10 - undefined -> 10 - NaN -> NaN

console.log(2 - null)   // 2 - (+0) = 2
console.log(2 - undefined) // 2 - NaN = NaN
console.log(10 - true) // 10 - 1 = 9
console.log("155" - "12") // 143
console.log("78sbd" - 12) // NaN

