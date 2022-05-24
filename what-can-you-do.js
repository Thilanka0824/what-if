const prompt = require('prompt-sync')({sigint: true});

let age = Number(prompt("How old are you? "))


if (age < 16) {
    console.log("You can't drive")
} else if (age <= 17) {
    console.log("You can drive but you can't vote")
} else if (age <= 24) {
    console.log("You can vote but you can't rent a car")
} else if (age >= 25) {
    console.log("You can do pretty much anything")
} 
