const ADD = "+", SUBTRACT = "-", MULTIPLY = "*", DIVIDE = "/";
const SQUARE = "x2", POWER = "xy", ROOT = "√x", RADICAL = "y√x";

const screen = document.querySelector("#screen");
const numbers = Array.from(document.querySelectorAll(".numBtn"));
const operators = Array.from(document.querySelectorAll(".opBtn"));
const negative = document.querySelector(".negBtn");
const decimal = document.querySelector(".decBtn");
const square = document.querySelector(".sqrBtn");
const root = document.querySelector(".rotBtn");
const clearScreen = document.querySelector(".clrBtn");
const equals = document.querySelector(".eqlBtn");
const deleteKey = document.querySelector(".delBtn");

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if( num2 === 0) {
        alert("How can you get 1 slice of a 0 pie?");
        error = true;
        return "ERROR";
    }

    return num1 / num2;
}

function power(num, power) {
    return Math.pow(num, power);
}

function radical(num, degree) {
    if( num < 0) {
        alert("No imagination here! >:(");
        error = true;
        return "Error";
    }

    return Math.pow(num, 1 / degree);
}

function operate() {
    let result = 0;
    console.log(num1 + " " + operand + " " + num2);
    if(num2 === "a" && 
       !(operand === SQUARE || operand === ROOT)) {
        result = num1;
    } else if (num1 === 9 && operand === ADD && num2 === 10) {
        result = 21;
    } else {
        if(operand === ADD) {
            result = add(num1, num2);
        } else if( operand === SUBTRACT) {
            result = subtract(num1, num2);
        } else if( operand === MULTIPLY) {
            result = multiply(num1, num2);
        } else if( operand === DIVIDE) {
            result = divide(num1, num2);
        } else if( operand === POWER) {
            result = power(num1, num2);
        } else if( operand === RADICAL) {
            result = radical(num1, num2);
        } else if( operand === SQUARE) {
            console.log("Got into square");
            result = power(num1, 2);
        } else if( operand === ROOT) {
            console.log("Got into root");
            result = radical(num1, 2);
        }
    }

    showResult(result);
}

function updateDisplay(evt) {
    if(newNumber) {
        screen.textContent = "";
        newNumber = false;
        decimalNum = false;
    }
    screen.textContent += evt.target.textContent;
}

function showResult(value) {
    if(error) {
        screen.textContent = "";
        error = false;
    } else { 
        screen.textContent = value;
    }
}

function storeNumber(evt) {
    if(screen.textContent === "") {
        alert("...sooooo are you gonna enter a number orrrrr...");
        error = true;
        num1 = "ERROR";
    } else {
        if(num1 === "a") {
            num1 = getNumber();
        } else {
            num2 = getNumber();

            if(evt.target.classList.contains("opBtn")) {
                operate(num1, num2, operand);
                num1 = getNumber();
                num2 = "a";
            }
        }
    }

    resetFlags();
}

function getNumber() {
    if(decimalNum) {
        return parseFloat(screen.textContent);
    }
    return parseInt(screen.textContent);
}

function storeOperand(evt) {
    operand = evt.target.textContent;
}

function storeValues(evt) {
    storeNumber(evt);
    storeOperand(evt);
}

function calculate(evt) {
    storeNumber(evt);
    operate();
    resetValues();
    resetFlags();
    calculated = true;
}

function resetValues() {
    num1 = "a";
    num2 = "a";
    operand = "";
}

function resetFlags() {
    newNumber = true;
    positive = true;
}

function clear() {
    resetValues();
    resetFlags();
    decimalNum = false;
    screen.textContent = "";
}

function inverseNum() {
    if( newNumber) {
        newNumber = false;
    }

    if(positive) {
        screen.textContent = "-" + screen.textContent;
        positive = false;
    } else {
        screen.textContent = screen.textContent.slice(1);
        positive = true;
    }
}

function makeDecimalNum() {
    if(!decimalNum) {
        if(newNumber) {
            screen.textContent = "0";
            newNumber = false;
        } else if (screen.textContent === "-" ||
                   screen.textContent === ""     ) {
            screen.textContent += "0";
        }
        screen.textContent += ".";
        decimalNum = true;
    }
}

function deleteChar() {
    let delChar = screen.textContent.charAt(screen.textContent.length - 1);
    if( delChar === ".") {
        decimalNum = false;
    } else if( delChar === "-") {
        positive = true;
    }
    screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
}

function squareOrSqrt(evt) {
    storeValues(evt);
    operate();
    resetValues();
    resetFlags();
}

let num1 = "a", num2 = "a", operand = "";
let newNumber = true, positive = true, decimalNum = false, error = false;

for(let index = 0; index < numbers.length; index++) {
    numbers[index].addEventListener('click', updateDisplay);
    numbers[index].addEventListener('mousedown', (event) => {
        event.target.classList.add("clicked");
    });
    numbers[index].addEventListener('mouseup', (event) => {
        event.target.classList.remove("clicked");
    });
}
for(let index = 0; index < operators.length; index++) {
    operators[index].addEventListener('click', storeValues);
    operators[index].addEventListener('mousedown', (event) => {
        event.target.classList.add("clicked");
    });
    operators[index].addEventListener('mouseup', (event) => {
        event.target.classList.remove("clicked");
    });
}
equals.addEventListener('click', calculate);
clearScreen.addEventListener('click', clear);
negative.addEventListener('click', inverseNum);
decimal.addEventListener('click', makeDecimalNum);
square.addEventListener('click', squareOrSqrt);
root.addEventListener('click', squareOrSqrt);
deleteKey.addEventListener('click', deleteChar);
