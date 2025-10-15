// this refers to the object that is currently calling the function

console.log(this)   // window object for browser, {} for node engine

var age = 28;   
// module scoped ({} empty now) not global object scoped. for browser its mapped to window object

function displayAge(){  // functions are module scoped but window scoped for browser
    console.log(this.age);   // undefined as global does not have age. module has
//  console.log(this)   // browser : window, node : global, for strict : undefined
    console.log(age) // age is there in module so it works.
}
displayAge()

/** NOTE :
 var age = 28 does not automatically become a property of the global object in strict mode.
	•	In Node.js, by default, all top-level var variables are scoped to the module, not truly global (global object).
	•	So global.age is undefined. 
	•	In browser non-strict mode, var would attach to window.age if declared in the global script context. But in Node, it doesn’t.
**/ 
console.log("---------")

// Situation 2 : 
var person = {
    age : 26,
    displayAge: function(){
        console.log(this.age);  
        console.log(age) 
        // console.log(this)
    }
}
person.displayAge() // 
/** NOTE :
    • this will refer to the person (object currently calling the function)
    • this.age : 26 (from person)
    • age : refers to the module scoped age so 28 
    • this : refers to the person object as person is the one calling the function 
 */
console.log("---------")

// Situation 3 : 

function displayAge2(){
    console.log(this.age);  
    console.log(age) 
    console.log(this)   //this refers to the object that is currently calling the function
}

var person = {
    age : 26,
    displayAge2 : displayAge2,
    nestedPerson:{
        age : 40,
        displayAge2: displayAge2
    }
}

person.displayAge2() // this : person object
person.nestedPerson.displayAge2() // this : nestedPerson object

/** NOTE :
    • Scope of a function depends on where its defined.
    • this : determined by who calls the function not where its defined,
**/
console.log("---------")

/////////////////////
// ARROW FUNCTIONS // 
/////////////////////

var person2 = {
    age : 28,
    greet1 : function(){
        console.log("Greet 1", this.age);
        console.log("Greet 1", this);
        function greet2(){
            console.log("Greet 2", this.age);
            console.log("Greet 2", this);
        }
        greet2()
    }
}
person2.greet1()
// when greet2() is called , greet2 age will be undefined because
// greet2 is called with global scope. 
// this is determined by who calls the function . greet2 is called
// without any object binding so it defaults to global. Node does not automatically 
// bind a function to the module object.

console.log("---------")
// lets change it to arrow function to deal with this.
var person3 = {
    age : 28,
    greet_x : function() {
        console.log("Greet_x", this.age);
        console.log("Greet_x", this);
        const greet_x1 = () => {
            console.log("Greet_x1", this.age);
            console.log("Greet_x1", this);
        }
        greet_x1()
    }
}
person3.greet_x()
/**
    • for arrow functions, this is determined by where the function
      is defined.
 */

// lets do it inglobal scope

var age_y = 33
const greet_y = () => {
    console.log("Greet_y Global", this.age)
    console.log("Greet_y Global", this)
}
greet_y()
/**
    • The greet_y defined in module scope. So the this will refer
        to the module scope always.
    • So greet_y works and this is printed as {}. and since var 
        also defined in the module scope we get age_y as 33 correctly.
 */