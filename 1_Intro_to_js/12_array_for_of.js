// find the GCD of a and b
var a = 15
var b = 12

var div = null
for(let i = 2; i <= Math.min(a, b); i++){
    if(a % i == 0 && b % i == 0){
        div = i
    }
}

console.log(div, "END")

// Iteration like Python
list = ['a', 2, 3, 'd']
for(let a of list){
    console.log(a)
}

list = 'AYUSH'
for(let a of list){
    console.log(a)
}

for (const i in list){
    console.log(i)      // iterates over the index not the list elements.
}