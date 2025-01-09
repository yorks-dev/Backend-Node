let people = [
    { name: 'Alice', age: 30, height: 65 },
    { name: 'Bob', age: 25, height: 70 },
    { name: 'Charlie', age: 30, height: 70 },
    { name: 'David', age: 25, height: 68 }
];

people.sort((a, b) => {
    
    if(a.age == b.age){

        if(a.height == b.height){
            return a.name.localeCompare(b.name)
        }

        return -(a.height-b.height)  // -ve cause higher the height the better
    }
    
    return a.age - b.age
})
console.log(people)

// Sorting an array
var arr = ["ayush", "billal", "lug", "a", "popos", "rabbit", "mog"]

arr.sort((a, b) => {
    if(a.length == b.length)
        return a.localeCompare(b)

    return a.length - b.length
})

console.log(arr)

// Simple length based sorting
var arr2 = ["Ayush", "Kyke", "Bilal", "Don"]
arr2.sort((a, b) => a.length - b.length)
console.log(arr2)