const number =parseInt(prompt("Please enter the number"));

    for (let i = 1; i <= number; ++i) {
        // Check if i is divisible by 5 and 3
        if (i % 5 === 0 && i % 3 === 0){
            alert("FizzBuzz");
        }
        // Check if i is divisible by 3
        else if (i % 3 === 0) {
            alert("Fizz");
        }
         
        // Check if i is divisible by 5
        else if (i % 5 === 0) {
            alert("Buzz");
        }
        else {
            alert (i);
        }
    }

  
