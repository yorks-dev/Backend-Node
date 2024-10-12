/*
    1. In object keys are unique like dict in python
*/

let student1 = {
    name : "Ayush",
    age : 24,
    mark : 50
}

// One way of doing it
for(let item of Object.keys(student1)){
    console.log(`${item} : ${student1[item]}`)
}

// For each works for arrays
Object.keys(student1).forEach((keys) => {
    console.log(keys, student1[keys])
})

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