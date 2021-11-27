function returnFirstNumber () {
  for (let elem of Buttons) {
    elem.onclick = () => {
      if (Result.innerHTML == 0)  Result.innerHTML = elem.innerHTML;
      else Result.innerHTML += elem.innerHTML
      firstNumber = Result.innerHTML
    };
  }
}

function returnSecondNumber () {
  for (let elem of Buttons) {
    elem.onclick = () => {
      if (Result.innerHTML == 0)  Result.innerHTML = elem.innerHTML;
      else Result.innerHTML += elem.innerHTML
      secondNumber = Result.innerHTML
    };
  }
}

let Sum = document.getElementById("Sum");
let Sub = document.getElementById("Sub");
let Mult = document.getElementById("Mult");
let Div = document.getElementById("Div");
let Clear = document.getElementById("Clear");
let Delete = document.getElementById("Delete");
let Output = document.getElementById("Output");
let Result = document.getElementById("Result");
let Buttons = document.getElementsByClassName("number__button");

let count

returnFirstNumber ()

Sum.onclick = () => {
  Result.innerHTML = 0
  returnSecondNumber ()
  count = "sum"

};
Sub.onclick = () => {
  Result.innerHTML = 0
  returnSecondNumber ()
  count = "sub"
};
Mult.onclick = () => {
  Result.innerHTML = 0
  returnSecondNumber ()
  count = "mult"
};
Div.onclick = () => {
  Result.innerHTML = 0
  returnSecondNumber ()
  count = "div"
};


Output.onclick = () => {
  console.log(firstNumber) ;
  console.log(secondNumber) ;
  switch (count) {
    case "sub" : return Result.innerHTML = firstNumber - secondNumber
    case "sum" : return Result.innerHTML = +(firstNumber) + +(secondNumber)
    case "mult" : return Result.innerHTML = firstNumber * secondNumber
    case "div" : return Result.innerHTML = (firstNumber / secondNumber).toFixed(2)
  }
};

Clear.onclick = () => {
  Result.innerHTML = 0
  firstNumber = 0
  secondNumber = 0
  returnFirstNumber()
};

Delete.onclick = () => {
  Result.innerHTML = Result.innerHTML.slice(0, -1)
  if (Result.innerHTML == 0) Result.innerHTML = 0;
};





