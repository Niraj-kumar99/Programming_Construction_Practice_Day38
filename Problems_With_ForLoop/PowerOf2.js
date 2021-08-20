const prompt = require("prompt-sync")();

const number = prompt("Enter a range to get power of two: ")

for(i = 0; i <= number; i++){
    console.log(Math.pow(2, i))
}