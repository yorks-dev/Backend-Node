/*
    1. In object keys are unique like dict in python
*/

let student1 = {
    name : "Ayush",
    age : 24,
    mark : 50
}

console.log(Object.keys(student1));
console.log(Object.values(student1));


// [ITERATION] 
// One way of doing it 
for(let item of Object.keys(student1)){     // student1.keys does not exist.
    console.log(`${item} : ${student1[item]}`)
}

// For each works for arrays (Using Lambdas)
Object.keys(student1).forEach((keys) => {
    console.log(keys, student1[keys])
})

// ITERATING OVER KEYS for .. in 
for (const property in student1){
    console.log(property) // loops over keys
}

// Change values
student1.name = "Lugen"
student1["name"] = "Lugen1"   // Just like python

console.log(student1)

// add new property or key
student1["house"] = "Monlaque"
student1.house2 = "Krishnagar"

console.log(student1)

delete student1["mark"]
delete student1.mark    // both works

console.log(student1)

// Destructuring / Unpacking 
for(var [key, value] of Object.entries(student1)){
    console.log(key,value)
}

// Object.entries() gives us [key, value] inside an array 
console.log(Object.entries(student1));
