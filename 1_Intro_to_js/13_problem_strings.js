// Iteration like Python
list = ['a', 2, 3, 'd']
for(let a of list){
    console.log(a)
}

list = 'AYUSH'
for(let a of list){
    console.log(a)
}

// Sum of String Numbers
var num = "123456"
var total = 0
for(let char of num){
    total += parseInt(char)
}
console.log(total)

// Palindrome
var str1 = "10012"
console.log(str1 == str1.split("").reverse().join(""))

// String slicing
var str2 = str1.slice(0,str1.length)
console.log(str2)

// Array string compare
var arr1 = [1, 2, 3, 4]
var str3 = "1234"
console.log(arr1 == str3)  // false
console.log(arr1.join('') == str3)  //.join(seperator)  // returns true

