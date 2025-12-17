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
    if (currentOperator == "-") {
        previousNumber = minus(Number(previousNumber), Number(currentNumber));
        currentOperator = "+";
        currentNumber = "";
        refreshDisplay()
    } else if (currentOperator == "*") {
        previousNumber = multiply(Number(previousNumber), Number(currentNumber));
        currentOperator = "+";
        currentNumber = "";
        refreshDisplay()
    } else if (currentOperator == "/") {
        previousNumber = divide(Number(previousNumber), Number(currentNumber));
        currentOperator = "+";
        currentNumber = "";
        refreshDisplay()
    } else {
        currentOperator = "+";
        previousNumber = add(Number(previousNumber), Number(currentNumber));
        currentNumber = "";
        refreshDisplay()
    }
});

const minusBtn = document.getElementById("minus");
minusBtn.addEventListener("click", () => {
    if (currentNumber == "" && previousNumber == "") {
        currentNumber += "-";
        refreshDisplay();
    } else {
        if (currentOperator == "+") {
            previousNumber = add(Number(previousNumber), Number(currentNumber));
            currentOperator = "-";
            currentNumber = "";
            refreshDisplay()
        } else if (currentOperator == "/") {
            previousNumber = divide(Number(previousNumber), Number(currentNumber));
            currentOperator = "/";
            currentNumber = "";
            refreshDisplay()
        }
        currentOperator = "-";
        if (previousNumber != "") {
            previousNumber = minus(Number(previousNumber), Number(currentNumber));
        } else {
            previousNumber = currentNumber;
        }
        currentNumber = "";
        refreshDisplay()
    }
});

const multiplyBtn = document.getElementById("multiply");
multiplyBtn.addEventListener("click", () => {
    if (currentOperator == "-") {
        previousNumber = minus(Number(previousNumber), Number(currentNumber));
        currentOperator = "*";
        currentNumber = "";
        refreshDisplay()
    } else if (currentOperator == "+") {
        previousNumber = add(Number(previousNumber), Number(currentNumber));
        currentOperator = "*";
        currentNumber = "";
        refreshDisplay()
    } else if (currentOperator == "/") {
        previousNumber = divide(Number(previousNumber), Number(currentNumber));
        currentOperator = "*";
        currentNumber = "";
        refreshDisplay()
    } else {
        if (previousNumber == "") {
            currentOperator = "*";
            previousNumber = currentNumber;
            currentNumber = "";
            refreshDisplay()
        } else {
            currentOperator = "*";
            previousNumber = multiply(Number(previousNumber), Number(currentNumber));
            currentNumber = "";
            refreshDisplay()
        }
    }
});

const divideBtn = document.getElementById("divide");
divideBtn.addEventListener("click", () => {
    if (currentOperator == "-") {
        previousNumber = minus(Number(previousNumber), Number(currentNumber));
        currentOperator = "/";
        currentNumber = "";
        refreshDisplay()
    } else if (currentOperator == "+") {
        previousNumber = add(Number(previousNumber), Number(currentNumber));
        currentOperator = "/";
        currentNumber = "";
        refreshDisplay()
    } else {
        if (previousNumber == "") {
            currentOperator = "/";
            previousNumber = currentNumber;
            currentNumber = "";
            refreshDisplay()
        } else {
            currentOperator = "/";
            previousNumber = divide(Number(previousNumber), Number(currentNumber));
            currentNumber = "";
            refreshDisplay()
        }
    }
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
        case "*":
            currentOperator = "";
            previousNumber = multiply(Number(previousNumber), Number(currentNumber));
            currentNumber = "";
            refreshDisplay()
            break;
        case "/":
            currentOperator = "";
            previousNumber = divide(Number(previousNumber), Number(currentNumber));
            currentNumber = "";
            refreshDisplay()
            break;
    }
}


