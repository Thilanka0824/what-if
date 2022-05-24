const prompt = require('prompt-sync')({sigint: true});

let earthWeight = Number(prompt("Please enter your weight on earth: "))

console.log("Venus = 1, Mars = 2, Jupiter = 3, Saturn = 4, Uranus = 5, Neptune = 6")
let planet = Number(prompt("Please enter the number of the corresponding planet you want to fight on: "))


if (planet === 1){
    console.log("Your fighting weight on Venus will be: " + earthWeight * 0.78)
} else if (planet === 2){
    console.log("Your fighting weight on Mars wil be: " + earthWeight * 0.39)
} else if (planet === 3){
    console.log("Your fighting weight on Jupiter wil be: " + earthWeight * 2.65)
} else if (planet === 4){
    console.log("Your fighting weight on Saturn wil be: " + earthWeight * 1.17)
} else if (planet === 5){
    console.log("Your fighting weight on Uranus wil be: " + earthWeight * 1.05)
} else if (planet === 6){
    console.log("Your fighting weight on Neptune wil be: " + earthWeight * 1.23)
}





