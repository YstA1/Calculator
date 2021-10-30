const calcNumbers = (operation, firstNumber, secondNumber) => {
	if (!operation || !firstNumber || !secondNumber || isNaN(secondNumber) || isNaN(firstNumber)) {
		return "Error";
	} else {
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
}
console.log(calcNumbers("qawefqwef", 4, 3));


