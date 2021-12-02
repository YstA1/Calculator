let firstNumber = 0;
let secondNumber = 0;
let count = null;

function returnFirstNumber() {
  for (let elem of Buttons) {
    elem.onclick = () => {
      if (Result.innerHTML == 0) Result.innerHTML = elem.innerHTML;
      else Result.innerHTML += elem.innerHTML;
      firstNumber = Result.innerHTML;
    };
  }
}

function returnSecondNumber() {
  for (let elem of Buttons) {
    elem.onclick = () => {
      if (Result.innerHTML == 0) Result.innerHTML = elem.innerHTML;
      else Result.innerHTML += elem.innerHTML;
      secondNumber = Result.innerHTML;
    };
  }
}

import {
  Sum,
  Sub,
  Mult,
  Div,
  Clear,
  Delete,
  Output,
  Result,
  Buttons,
} from "./view.js";

returnFirstNumber();

Sum.onclick = () => {
  Result.innerHTML = 0;
  returnSecondNumber();
  count = "sum";
  console.log(firstNumber);
};
Sub.onclick = () => {
  Result.innerHTML = 0;
  returnSecondNumber();
  count = "sub";
};
Mult.onclick = () => {
  Result.innerHTML = 0;
  returnSecondNumber();
  count = "mult";
};
Div.onclick = () => {
  Result.innerHTML = 0;
  returnSecondNumber();
  count = "div";
};

Clear.onclick = () => {
  Result.innerHTML = 0;
  firstNumber = 0;
  secondNumber = 0;
  returnFirstNumber();
};

Delete.onclick = () => {
  Result.innerHTML = Result.innerHTML.slice(0, -1);
  if (Result.innerHTML == 0) Result.innerHTML = 0;
  if (Result.innerHTML === firstNumber.toString().slice(0, -1) && !secondNumber)
    firstNumber = Result.innerHTML;
  if (Result.innerHTML === secondNumber.toString().slice(0, -1))
    secondNumber = Result.innerHTML;
};

Output.onclick = () => {
  console.log(firstNumber);
  console.log(secondNumber);
  switch (count) {
    case "sub": return (Result.innerHTML = firstNumber - secondNumber);
      
    case "sum": return (Result.innerHTML = +firstNumber + +secondNumber);
      
    case "mult": return (Result.innerHTML = firstNumber * secondNumber);
     
    case "div":
      Result.innerHTML = firstNumber / secondNumber;
      if (Result.innerHTML.length > 4) Result.innerHTML = Result.innerHTML.toString().slice(0, 5)
      if (Result.innerHTML.toString().slice(-1) === ".") Result.innerHTML = Result.innerHTML.toString().slice(0, -1)
      else Result.innerHTML;
  }
};
