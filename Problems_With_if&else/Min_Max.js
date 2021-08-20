const MAXCOUNT = 5
let count = 0
const number = []

// Generating 5 random numbers.
while(count < MAXCOUNT){
    number[count] = (Math.floor(Math.random() * 900)+100)
    count++;
}
console.log("Random numbers are: " + number)

let max = number[1]
let min = number[1]

// Getting the maximum and minimum numbers.
for( i = 0; i<number.length; i++){

    if(number[i] > max){
        max = number[i]
    }

    if(number[i] < min){
        min = number[i]
    }
}
console.log("Maximum number is: " + max)