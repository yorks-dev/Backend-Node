// We have an array of 1s and 0s. We make it such that all 0s comes before 1s.
// a = [1, 0, 0, 1, 0] -> [0, 0, 0, 1, 1] in a single iteration.

function seperate(arr){
    
    let i = 0;
    let j = arr.length - 1;
    
    while (i <= j){
        if(arr[i] == 1){
            //  swap the i'th and j'th index
            arr[i] = arr[j];
            arr[j] = 1;

            j--;    // Because the last index now confirmed to have 1. we can ignore it now.
        } 
        else{
            // if i'th index is 0, move on
            i++;
        }
    }
}

let arr = [0, 1, 1, 0, 1]
seperate(arr)
console.log(arr)    // prints the seperated array

// We will cover it in more details in DSA courses.