const prompt = require('prompt-sync')({sigint: true});

let numStudents = Number(prompt("How many students are in your class? "))

if ((numStudents % 3) === 0) {
        console.log(numStudents / 3 + " groups of 3")
    } else if (numStudents % 3 === 1) {
        console.log((numStudents - 4) / 3 + " groups of 3")
        console.log("and 2 groups of 2")
    } else if (numStudents % 3 === 2) {
        console.log((numStudents - 2) / 3 + " groups of 3")
        console.log("and 1 group of 2")
    }



// if (remainder === 0)  { // check to see if theres a remainder.
//     console.log(numStudents / 3)  // if not then div by 3 and groups are set

// } else if (remainder === 1) {
//     console.log(remainder)
//     console.log((numStudents - 4) / 3)
    
// } 

// else if (remainder !== 0) {  
//     console.log(Math.round(result))
//     console.log(remainder)
// }




//else if (remainder )

// 16 - 4 = 12 