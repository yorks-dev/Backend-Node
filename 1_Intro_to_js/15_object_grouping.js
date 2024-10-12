// Like python we will do grouping of arrays

var array1 =  ['ayush', 'lugen', 'billal', 'joshua', 'jared', 'we']

// group based on their length

let array1_obj = {};

for (let item of array1) {
    item = String(item);  // Convert item to a string

    if (!(item.length in array1_obj)) {   // we cant use in with array. "in" in javascript check for existance of property
        array1_obj[item.length] = [item];  // Initialize the key with an array containing the item
    } else {
        array1_obj[item.length].push(item);  // Push the item to the existing array
    }
}

console.log(array1_obj)

// what if we use "in" with array
var array2 = [-1, -2, -2, -3]
console.log(-2 in array2)  // it will return false, as -2 in ARRAY checks if thw property -2 exists.
// here the property is index, so it checks if index -2 exists but it doesnot cause array has +ve index
console.log(2 in array2)  // it will return true as 2 is a valisd index for that array



// NOW lets group by character counts
char_dict = {}
for (let item of array1) {
    for(let char of item){
        if(char in char_dict){
            char_dict[char] += 1
        }else{
            char_dict[char] = 1
        }
    }
}

console.log(char_dict)


/////////// PROBLEM 1 : UNIQUE STRINGS IN ARRAY  /////////////
var array = ['ayush', 'billal', 'ayush', 'james', 'rocker']
var log_array = []

for(var item of array){
    if(! log_array.includes(item)){
        log_array.push(item)
    }
}
console.log(log_array)

let new_array = new Set(array)
console.log([... new_array])
