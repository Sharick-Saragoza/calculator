// Display
const display = document.querySelector(".display");

let previousNumber = "";
let currentNumber = "";
let currentOperator = "";

// Append number
function appendNumber(number) {
    currentNumber += number;
    refreshDisplay();
}

function appendOperator(operator) {
    if (previousNumber != "" && currentNumber == "") {
        currentOperator = operator;
        refreshDisplay();
    }

    if (currentOperator != "") {
        calculate(currentOperator);
        currentOperator = operator;
        refreshDisplay();
    } else {
        calculate(operator);
        refreshDisplay();
    }
}

// Refresh display
function refreshDisplay() {
    display.textContent = `${previousNumber} ${currentOperator} ${currentNumber}`;
}

const calculateBtn = document.getElementById("calculate");
calculateBtn.addEventListener("click", () => {
    calculate(currentOperator);
    currentOperator = "";
    refreshDisplay();
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

function minus(num1, num2) {
    return num1 -= num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// Calculate funtion
function calculate(operator) {
    if (previousNumber == "") {
        previousNumber = currentNumber;
        currentNumber = "";
        refreshDisplay();
    } else if (operator == "+") {
        previousNumber = add(Number(previousNumber), Number(currentNumber));
        currentNumber = "";
        refreshDisplay();
    } else if (operator == "-") {
        previousNumber = minus(Number(previousNumber), Number(currentNumber));
        currentNumber = "";
        refreshDisplay();
    } else if (operator == "*") {
        previousNumber = multiply(Number(previousNumber), Number(currentNumber));
        currentNumber = "";
        refreshDisplay();
    } else if (operator == "/") {
        previousNumber = divide(Number(previousNumber), Number(currentNumber));
        currentNumber = "";
        refreshDisplay();
    }

    currentOperator = operator;
}


