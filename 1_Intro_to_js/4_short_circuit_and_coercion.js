/* 1. For AND (&&):
        If first operand is Falsy then it returns the first operand
        falsy -> 0, -0, NaN
        If First is True then second input is evaluated and returned
*/

var out = 10 && 6  // 10 is truthy value, so check second and return second
console.log(out)  // returns 6
out = -0 && 10  // here -0 is falsy so return first value
console.log(out) // returns -0

/* 2. For OR (||):
        If first operand is True then it returns the first operand
        If First is False then second input is evaluated and returned
*/

var out = 10 || 6  // first is true, so return it
console.log(out)
out = 0 || -12 // here first is falsy so return second
console.log(out)