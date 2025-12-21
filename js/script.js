// Display
const display = document.querySelector(".display");

let previousNumber = "";
let currentNumber = "";
let currentOperator = "";

// Add number
function addNumber(number) {
    if (previousNumber == Infinity || isNaN(previousNumber)) {
        allClear();
        currentNumber += number;
    } else if (previousNumber !== "" && currentOperator == "") {
        allClear();
        currentNumber += number;
        refreshDisplay();
    } else {
        currentNumber += number;
        refreshDisplay();
    }
}

// Add operator
function addOperator(operator) {
    if (previousNumber == Infinity || isNaN(previousNumber)) {
        return;
    } else if (previousNumber === 0 && currentOperator == "") {
        currentOperator = operator
        refreshDisplay();
    } else if (currentOperator == "*" && operator == "/" && currentNumber == "") {
        currentOperator = operator;
        refreshDisplay();
    } else if (currentNumber == "-") {
        return;
    } else if (previousNumber != "" && currentNumber == "") {
        currentOperator = operator;
        refreshDisplay();
    } else if (currentOperator != "") {
        calculate(currentOperator);
        currentOperator = operator;
        refreshDisplay();
    } else {
        calculate(operator);
        refreshDisplay();
    }

    if (previousNumber === "" && currentNumber == "") {
        if (operator == "-") {
            currentNumber += "-";
            currentOperator = "";
            refreshDisplay();
        } else {
            currentOperator = "";
            refreshDisplay();
        }
    }
}


// Refresh display
function refreshDisplay() {
    display.textContent = `${previousNumber} ${currentOperator} ${currentNumber}`;
}

// Calculate button 
const calculateBtn = document.getElementById("calculate").addEventListener("click", () => {
    if (previousNumber != "" && currentOperator != "" && currentNumber == "") {
        return;
    } else if (currentNumber == "-" || currentOperator == "") {
        return;
    } else {
        calculate(currentOperator);
        currentOperator = "";
        refreshDisplay();
    }
});

// Clear function
function allClear() {
    previousNumber = "";
    currentNumber = "";
    currentOperator = "";
    refreshDisplay();
}

// All clear button
const allClearBtn = document.getElementById("ac").addEventListener("click", allClear);

const backspaceBtn = document.getElementById("backspace").addEventListener("click", () => {  
    currentNumber = currentNumber.slice(0, -1);
    refreshDisplay();
})

const dotBtn = document.getElementById("dot").addEventListener("click", () => {
    if (currentNumber.includes(".")) {
        return;
    } else {
        currentNumber += "."
        refreshDisplay();
    }
})

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
    if (previousNumber === "") {
        previousNumber = currentNumber;
        currentNumber = "";
        refreshDisplay();
    } else if (operator == "+") {
        previousNumber = add(Number(previousNumber), Number(currentNumber)).toFixed(2);
        currentNumber = "";
        refreshDisplay();
    } else if (operator == "-") {
        previousNumber = minus(Number(previousNumber), Number(currentNumber)).toFixed(2);
        currentNumber = "";
        refreshDisplay();
    } else if (operator == "*") {
        if (currentNumber != "") {
            previousNumber = multiply(Number(previousNumber), Number(currentNumber)).toFixed(2);
            currentNumber = "";
            refreshDisplay();
        }
    } else if (operator == "/") {
        if (currentNumber !== "") {
            previousNumber = divide(Number(previousNumber), Number(currentNumber)).toFixed(2);
            currentNumber = "";
            refreshDisplay();
        }
    }

    currentOperator = operator;
}


