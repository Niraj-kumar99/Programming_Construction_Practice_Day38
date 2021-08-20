      const prompt = require('prompt-sync')();

      console.log("Enter 3 numbers to perform the arithmetic operations");
      const num1 = prompt('Enter First Number: ');
      const num2 = prompt('Enter Second Number: ');
      const num3 = prompt('Enter Third Number: ');
      console.log();
      
      let result1 = num1 + num2 * num3;
      console.log(num1 + " + "+ num2 + " * " + num3 +" = " +result1);
      
      let result2 = num1 % num2 + num3;
      console.log(num1 + " % "+ num2 + " + " + num3 +" = " +result2);
      
      let result3 = num3 + num1 / num2;
      console.log(num3 + " + "+ num1 + " / " + num2 +" = " +result3);
      
      let result4 = num1 * num2 + num3;
      console.log(num1 + " * "+ num2 + " + " + num3 +" = " +result4);
      
      console.log();
      
      // To get maximum number.
      if ( ( result1 > result2 ) && ( result1 > result3 ) && ( result1 > result4 ) ) {
          console.log(result1 + " is the maximum result.");
      }
      else if ( ( result2 > result1 ) &&  (result2 > result3 ) && ( result2 > result4 ) ) {
          console.log(result2 + " is the maximum result.");
      }
      else if ( ( result3 > result1 ) && ( result3 > result2 ) && ( result3 > result4 ) ) {
          console.log(result3 + " is the maximum result.");
      }
      else {
          console.log(result4 + " is the maximum result.");
      }
      
      // To get minimum number.
      if ( ( result1 < result2 ) && ( result1 < result3 ) && ( result1 < result4 ) ) {
          console.log(result1 +" is the minimum result.");
      }
      else if ( ( result2 < result1 ) && ( result2 < result3 ) && ( result2 < result4 ) ) {
          console.log(result2 +" is the minimum result.");
      }
      else if ( ( result3 < result1 ) && ( result3 < result2 ) && ( result3 < result4 ) ) {
          console.log(result3 +" is the minimum result.");
      }
      else {
          console.log(result4 +" is the minimum result.");
      }