// Create Calculator layout
//**************************

var mdiv = document.createElement("div");
mdiv.setAttribute("class", "calc-grid");

/*
 <div class="output">
   <div data-last-operation class="last-operation"></div>
   <div data-curr-operation class="curr-operation"></div>
 </div>
*/
var display = document.createElement("div");
display.setAttribute("class", "output");

var displayLine1 = document.createElement("div");
displayLine1.setAttribute("data-last-operation", "");
displayLine1.setAttribute("class", "last-operation");

var displayLine2 = document.createElement("div");
displayLine2.setAttribute("data-curr-operation", "");
displayLine2.setAttribute("class", "curr-operation");

display.append(displayLine1, displayLine2);

// <button disabled data-memory-plus class="spl-btn" >M+</button>
var buttonMplus = document.createElement("button");
buttonMplus.setAttribute("disabled", true);
buttonMplus.setAttribute("data-memory-plus", "");
buttonMplus.setAttribute("class", "spl-btn");
buttonMplus.innerHTML = "M+";

// <button disabled data-memory-minus class="spl-btn" >M-</button>
var buttonMminus = document.createElement("button");
buttonMminus.setAttribute("disabled", true);
buttonMminus.setAttribute("data-memory-minus", "");
buttonMminus.setAttribute("class", "spl-btn");
buttonMminus.innerHTML = "M-";

// <button data-all-clear class="spl-btn">AC</button>
var buttonAC = document.createElement("button");
buttonAC.setAttribute("data-all-clear", "");
buttonAC.setAttribute("class", "spl-btn");
buttonAC.innerHTML = "AC";

// <button data-delete class="spl-btn">C</button>
var buttonC = document.createElement("button");
buttonC.setAttribute("data-delete", "");
buttonC.setAttribute("class", "spl-btn");
buttonC.innerHTML = "C";

// <button data-number>1</button>
var button1 = document.createElement("button");
button1.setAttribute("data-number", "");
button1.innerHTML = "1";

// <button data-number>2</button>
var button2 = document.createElement("button");
button2.setAttribute("data-number", "");
button2.innerHTML = "2";

// <button data-number>3</button>
var button3 = document.createElement("button");
button3.setAttribute("data-number", "");
button3.innerHTML = "3";

//<button data-operation class="spl-btn">/</button>
var buttonDivide = document.createElement("button");
buttonDivide.setAttribute("data-operation", "");
buttonDivide.setAttribute("class", "spl-btn");
buttonDivide.innerHTML = "/";

// <button data-number>4</button>
var button4 = document.createElement("button");
button4.setAttribute("data-number", "");
button4.innerHTML = "4";

// <button data-number>5</button>
var button5 = document.createElement("button");
button5.setAttribute("data-number", "");
button5.innerHTML = "5";

//<button data-number>6</button>
var button6 = document.createElement("button");
button6.setAttribute("data-number", "");
button6.innerHTML = "6";

//<button data-operation class="spl-btn">*</button>
var buttonMultiply = document.createElement("button");
buttonMultiply.setAttribute("data-operation", "");
buttonMultiply.setAttribute("class", "spl-btn");
buttonMultiply.innerHTML = "*";

// <button data-number>7</button>
var button7 = document.createElement("button");
button7.setAttribute("data-number", "");
button7.innerHTML = "7";

//<button data-number>8</button>
var button8 = document.createElement("button");
button8.setAttribute("data-number", "");
button8.innerHTML = "8";

//<button data-number>9</button>
var button9 = document.createElement("button");
button9.setAttribute("data-number", "");
button9.innerHTML = "9";

//<button data-operation class="spl-btn">+</button>
var buttonAdd = document.createElement("button");
buttonAdd.setAttribute("data-operation", "");
buttonAdd.setAttribute("class", "spl-btn");
buttonAdd.innerHTML = "+";

//<button data-number>.</button>
var buttonDecimal = document.createElement("button");
buttonDecimal.setAttribute("data-number", "");
buttonDecimal.innerHTML = ".";

//<button data-number>0</button>
var button0 = document.createElement("button");
button0.setAttribute("data-number", "");
button0.innerHTML = "0";

//<button data-equals class="spl-btn">=</button>
var buttonEquals = document.createElement("button");
buttonEquals.setAttribute("data-equals", "");
buttonEquals.setAttribute("class", "spl-btn");
buttonEquals.innerHTML = "=";

//<button data-operation class="spl-btn">-</button>
var buttonSubtract = document.createElement("button");
buttonSubtract.setAttribute("data-operation", "");
buttonSubtract.setAttribute("class", "spl-btn");
buttonSubtract.innerHTML = "-";

mdiv.append(
  display,
  buttonMplus,
  buttonMminus,
  buttonAC,
  buttonC,
  button1,
  button2,
  button3,
  buttonDivide,
  button4,
  button5,
  button6,
  buttonMultiply,
  button7,
  button8,
  button9,
  buttonAdd,
  buttonDecimal,
  button0,
  buttonEquals,
  buttonSubtract
);
document.body.append(mdiv);

//Implement Calcultor Functions
//*****************************

class Calc {
  constructor(lastOperandTextElement, currOperandTextElement) {
    this.lastOperandTextElement = lastOperandTextElement;
    this.currOperandTextElement = currOperandTextElement;
    this.clear();
  }
  // all-clear implementation - initializes operands and operator
  clear() {
    this.lastOperand = "";
    this.currOperand = "";
    this.operator = undefined;
  }

  // backspace implementation - deletes last character from second operand first
  //then operator and from first operand thereafter
  delete() {
    this.currOperand = this.currOperand.toString().slice(0, -1);
  }

  // evaluate provided expression and stores the result in second operand to be used for displayy purpose
  compute() {
    let result;
    let lastnum = parseFloat(this.lastOperand);
    let currnum = parseFloat(this.currOperand);
    if (isNaN(lastnum) || isNaN(currnum)) {
      return;
    }
    switch (this.operator) {
      case "+":
        result = lastnum + currnum;
        break;
      case "-":
        result = lastnum - currnum;
        break;
      case "*":
        result = lastnum * currnum;
        break;
      case "/":
        result = lastnum / currnum;
        break;
      default:
        return;
    }
    this.currOperand = result;
    this.lastOperand = "";
    this.operator = undefined;
  }

  // display the keys entered, interim calculation result on first line (on press of second operator)
  // and final result when equal '=' key is pressed
  display() {
    if (this.operator != null) {
      this.lastOperandTextElement.innerText = `${this.lastOperand} ${this.operator}`;
    } else {
      this.lastOperandTextElement.innerText = this.lastOperand;
    }
    this.currOperandTextElement.innerText = this.currOperand;
  }

  // records number and decimal keys pressed, allow decimal key to pressed only once
  recordNumber(number) {
    if (number === "." && this.currOperand.toString().includes(".")) {
      return;
    }
    this.currOperand = this.currOperand.toString() + number.toString();
  }

  // record operator /funnction to be performed.
  //On press of second operator, triggers interim computation
  // record operator key as infix operation
  recordOperation(operator) {
    if (this.currOperand === "") {
      return;
    }
    if (this.lastOperand !== "") {
      this.compute();
    }
    this.operator = operator;
    this.lastOperand = this.currOperand;
    this.currOperand = "";
  }
}

// get element(s) using query selector with global attribute - data-*
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-equals]");
const lastOperandTextElement = document.querySelector("[data-last-operation]");
const currOperandTextElement = document.querySelector("[data-curr-operation]");

// create calc object, initialized using constructor, and perform actions using event listener
const calc = new Calc(lastOperandTextElement, currOperandTextElement);

//record and display number keys pressed
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calc.recordNumber(button.innerText);
    calc.display();
  });
});

//record and display operator/function keys pressed
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calc.recordOperation(button.innerText);
    calc.display();
  });
});

//clears values and displays on press of AC button
allClearButton.addEventListener("click", () => {
  calc.clear();
  calc.display();
});

//backspace on C press and update display
deleteButton.addEventListener("click", () => {
  calc.delete();
  calc.display();
});

//compute and display final result on press of "=" button
equalsButton.addEventListener("click", () => {
  calc.compute();
  calc.display();
});
