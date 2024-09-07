if('1' == 1){
    console.log("We used '=='")
} 
if(!('1' === 1)){
    console.log("We used '==='")
}

// Min of 3 numbers
var a = -8
var b = 2
var c = 1

min = null
if(a < b){
    min = a
}else{
    min = b
}

if(min < c){
    console.log("Min : ", min)
}else{
    console.log("Min : ", c)
}
