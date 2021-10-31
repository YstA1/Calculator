function checkData (operation, firstNumber, secondNumber) {
	if (!operation || !firstNumber || !secondNumber || isNaN(secondNumber) || isNaN(firstNumber)) return "Error";

	let result = calcNumbers(operation, firstNumber, secondNumber);
	
	console.log(result);
}

function calcNumbers (operation, firstNumber, secondNumber) {
	switch (operation) {
		case "+": return firstNumber + secondNumber;
		case "-": return firstNumber - secondNumber;
		case "*": return firstNumber * secondNumber;
		case "/": return firstNumber / secondNumber;
		case "**": return firstNumber ** secondNumber;
		case "%": return firstNumber % secondNumber;
		default: return "Unknown operation";
	}
}

checkData( "*", 4, 3);


