const calcNumbers = (operation, firstNumber, secondNumber) => {
	if (operation == ("Addition")) {
		return firstNumber + secondNumber;
	} else if (operation == ("Subtraction")) {
		return firstNumber - secondNumber;
	} else if (operation == ("Multiplication")) {
		return firstNumber * secondNumber;
	} else if (operation == ("Division")) {
		return firstNumber / secondNumber 
	} else if (operation == ("Exponentiation")) {
		return firstNumber ** secondNumber;
	} else if (operation == ("Modulus")) {
		return firstNumber % secondNumber;
	} else if (operation == undefined 
		|| firstNumber== undefined 
		|| secondNumber == undefined 
		|| isNaN(secondNumber)
		|| isNaN(firstNumber)) {
		return "Error";
	} else {
		return "Unknown operation";
	}

}

console.log(calcNumbers("Exponentiation",3,4));


