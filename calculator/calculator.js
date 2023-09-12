const number1 =parseInt(prompt("Please enter your number1"))
	if (isNaN(number1))
    console.log("error");

const number2 =parseInt(prompt("Please enter your number2"))
    if (isNaN (number2))
    console.log("error");

const operator = prompt('Enter operator ( either +, -, * or / ): ');

let result;

if (operator == '+') {
     result=number1 + number2;
}
else if (operator == '-') {
     result=number1 - number2;
}
else if (operator == '*') {
     result=number1 * number2;
}
else if (operator == "%"){
    result=number1 % number2
}
else if (operator == "/"){
     result=number1 / number2;
}
else {
 console.log("error")
};

console.log(result);
alert(result);

