const ADD = "+", SUBTRACT = "-", MULTIPLY = "*";
const DIVIDE = "/", POWER = "^", RADICAL = "rad";

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
    return num1 / num2;
}

function power(num, power) {
    return Math.pow(num, power);
}

function radical(num, degree = 2) {
    return Math.pow(num, 1 / degree);
}

function operate(num1, num2, operate) {
    if(operate === ADD) {

    } else if( operate === SUBTRACT) {

    } else if( operate === MULTIPLY) {

    } else if( operate === DIVIDE) {

    } else if( operate === POWER) {

    } else if( operate === RADICAL) {
        
    }
}

let num1 = 0, num2 = 0, operand = "";

// ======TESTING=======

// add
console.log("add: 5 + 2 = ", add(5, 2));
console.log("add: 5.5 + 2.2 = " + add(5.5, 2.2));
console.log("add: -5 + 2 = " + add(-5, 2));
// subtract
console.log("subtract: 5 - 2 = ", subtract(5, 2));
console.log("subtract: 5.5 - 2.2 = " + subtract(5.5, 2.2));
console.log("subtract: 2.2 - 5.5 = " + subtract(2.2, 5.5));
console.log("subtract: -5.5 - 2.2 = " + subtract(-5.5, 2.2));
// multiply
console.log("multiply: 5 * 2 = " + multiply(5, 2));
console.log("multiply: 5.5 * 2.2 = " + multiply(5.5, 2.2));
console.log("multiply: -5 * 2 = " + multiply(-5, 2));
console.log("multiply: -5.5 * -2.2 = " + multiply(-5.5, -2.2));
// divide
console.log("divide: 6 / 2 = " + divide(6, 2));
console.log("divide: 5 / 2 = " + divide(5, 2));
console.log("divide: 6.0 / 3.0 = " + divide(6.0, 3.0));
console.log("divide: 5.5 / 2.2 = " + divide(5.5, 2.2));
console.log("divide: -6.0 / 2.0: " + divide(-6.0, 2.0));
console.log("divide: -5.5 / -2.2 = " + divide(-5.5, -2.2));
// exponent
console.log("power: 2 ^ 2 = " + power(2, 2));
console.log("power: -2 ^ 2 = " + power(-2, 2));
console.log("power: -2 ^ 3 = " + power(-2, 3));
console.log("power: 2 ^ -2 = " + power(2, -2));
console.log("power: 4.5 ^ 5 = " + power(4.5, 5));
console.log("power: 3.0 ^ 2.5 = " + power(3.0, 2.5));
// radical
console.log("radical: 4 rad 2 = " + radical(4, 2));
console.log("radical: 5 rad 2 = " + radical(5, 2));
console.log("radical: -8 rad 3 = " + radical(-4, 2));
console.log("radical: 4 rad -2 = " + radical(4, -2));
console.log("radical: 8.0 rad 3 = " + radical(8.0, 3));
console.log("radical: 8.0 rad 2.5 = " + radical(8.0, 2.5));
