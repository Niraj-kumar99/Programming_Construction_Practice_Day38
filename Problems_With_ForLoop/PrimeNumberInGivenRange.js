 const prompt = require('prompt-sync')();

 const lowerNumber = prompt('Enter start number: ')
 const higherNumber = prompt('Enter last number: ')
 
console.log("Prime numbers between entered range are: ")
 
 // looping from lowerNumber to higherNumber
 for (let i = lowerNumber; i <= higherNumber; i++) {
     let count = 0;
 
     // looping through 2 to user input number
     for (let j = 2; j < i; j++) {
         if (i % j == 0) {
             count = 1;
             break;
         }
     }
 
     // if number greater than 1 and not divisible by other numbers
     if (i > 1 && count == 0) {
         console.log(i);
     }
 }