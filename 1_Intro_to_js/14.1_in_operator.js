// In operator checks for property or index in a object.
// for arrays it checks index not value. 
// for object it check property.

// eg 1:
let arr = [1, 2, 3, 4, 5, 88]
console.log(88 in arr); // prints false as 88 index does not exist.
console.log(arr.includes(88)) // prints true.

let obj = {
    'name':'Ayush',
    'age' : 22 ,
    'sex' : "M"
}
console.log('height' in obj) // prints false
console.log('age' in obj) // prints true.

console.log('Ayush' in Object.values(obj)) 
// false as values gives us array, and in on array works on index
// not values. so false. 
console.log(Object.values(obj).includes('Ayush'))  // Correct way