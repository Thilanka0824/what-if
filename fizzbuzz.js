const prompt = require('prompt-sync')({sigint: true});

let randomNum = Number(prompt("Enter a random number: "));

if (randomNum % 3 === 0 && randomNum % 5 === 0){
    console.log("fizzbuzz")
} else if (randomNum % 3 === 0){
    console.log("fizz")
} else if (randomNum % 5 === 0){
    console.log("buzz")
} else ("error")