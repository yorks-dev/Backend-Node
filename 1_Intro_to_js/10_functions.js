function is_prime(number) {
if(number <= 1){
    return false
}

    let is_div = false      // flag
    for(let i = 2; i <= Math.floor(number/2); i++)
    if(number % i == 0)
            return false
    return true
}   

for(let i = 1; i <= 10; i++){
    // wont give error but will take 1st value
    if(is_prime(i, 1) == true)  
        console.log(i)
}

//Operator
let a = -111
console.log(-a)

let b = "a"
console.log(-b)  // converts to number but will return NaN
// for b = 12, it will make it -ve NUMBER not a string

