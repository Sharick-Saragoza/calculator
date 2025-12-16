// Display
const display = document.querySelector(".display");

let previousNumber = "";
let currentNumber = "";
let currentOperator = "";

// Append number
function appendNumber(number) {
    currentNumber += number;
    refreshDisplay()
}

// Refresh display
function refreshDisplay() {
    display.textContent = `${previousNumber} ${currentOperator} ${currentNumber}`;
}

// Operator buttons
const plusBtn = document.getElementById("plus");
plusBtn.addEventListener("click", () => {
    currentOperator = "+";
    previousNumber = add(Number(previousNumber), Number(currentNumber));
    currentNumber = "";
    refreshDisplay()
});

const minusBtn = document.getElementById("minus");
minusBtn.addEventListener("click", () => {
    currentOperator = "-";
    if (previousNumber != "") {
        previousNumber = minus(Number(previousNumber), Number(currentNumber));
    } else {
        previousNumber = currentNumber;
    }
    currentNumber = "";
    refreshDisplay()
});

const calculateBtn = document.getElementById("calculate");
calculateBtn.addEventListener("click", () => {
    calculate(currentOperator);
});

// Clear function
const allClearBtn = document.getElementById("ac");
allClearBtn.addEventListener("click", () => {
    previousNumber = "";
    currentNumber = "";
    currentOperator = "";
    display.textContent = "";
});

// Math functions
function add(num1, num2) {
    return num1 += num2;
}

function calculate(operator) {
    switch (operator) {
        case "+":
            currentOperator = "";
            previousNumber = add(Number(previousNumber), Number(currentNumber));
            currentNumber = "";
            refreshDisplay()
        break;
        case "-":
            currentOperator = "";
            previousNumber = minus(Number(previousNumber), Number(currentNumber));
            currentNumber = "";
            refreshDisplay()
        break;
    }
}

function minus(num1, num2) {
    return num1 -= num2;
}

// function multiply(num1, num2) {

// }

// function divide(num1, num2) {

// }