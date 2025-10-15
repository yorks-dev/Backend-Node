var name = "Ayush"


function joe(){
    const nn = "Ayush"
    function inner() {
        console.log(this.name)
    }
    inner()
}

console.log(joe.nn)