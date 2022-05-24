const prompt = require('prompt-sync')({sigint: true});

let day = Number(prompt("Please pick a number between 1-7: "))

if (day === 1) {
    console.log("Today is Monday")
} else if (day === 2) {
    console.log("Today is Tuesday")
} else if (day === 3) {
    console.log("Today is Wednesday")
} else if (day === 4) {
    console.log("Today is Thursday")
} else if (day === 5) {
    console.log("Today is Friday")
} else if (day === 6) {
    console.log("Today is Saturday")
} else if (day === 7) {
    console.log("Today is Sunday")
} else {
    console.log("Error")
}