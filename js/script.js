// Display
const display = document.querySelector(".display");

let previousNumber = "";
let currentNumber = "";
let currentOperator = "";
let calculated = false;

// Add number
function addNumber(number) {
    if (previousNumber != "" && calculated == true && currentOperator == "") {
        return;
    }

    currentNumber += number;
    refreshDisplay();
}

// Add operator
function addOperator(operator) {
    if (previousNumber === 0 && currentOperator == "") {
        currentOperator = operator
        refreshDisplay();
    } else {
        if (currentOperator == "*" && operator == "/" && currentNumber == "") {
            currentOperator = operator;
            refreshDisplay();
        } else {
            if (currentNumber == "-") {
                return;
            }

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
    }
}

// Refresh display
function refreshDisplay() {
    display.textContent = `${previousNumber} ${currentOperator} ${currentNumber}`;
}

// Calculate button 
const calculateBtn = document.getElementById("calculate");
calculateBtn.addEventListener("click", () => {
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
const allClearBtn = document.getElementById("ac");
allClearBtn.addEventListener("click", () => {
    previousNumber = "";
    currentNumber = "";
    currentOperator = "";
    refreshDisplay();
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
    if (previousNumber === "") {
        previousNumber = currentNumber;
        currentNumber = "";
        refreshDisplay();
    } else if (operator == "+") {
        previousNumber = add(Number(previousNumber), Number(currentNumber));
            calculated = true
        currentNumber = "";
        refreshDisplay();
    } else if (operator == "-") {
        previousNumber = minus(Number(previousNumber), Number(currentNumber));
            calculated = true
        currentNumber = "";
        refreshDisplay();
    } else if (operator == "*") {
        if (currentNumber != "") {
            previousNumber = multiply(Number(previousNumber), Number(currentNumber));
                calculated = true
            currentNumber = "";
            refreshDisplay();
        }
    } else if (operator == "/") {
        if (Number(currentNumber) === 0) {
            previousNumber = "";
            currentNumber = "";
            currentOperator = "";
            refreshDisplay();
            alert("You are not allowed to divide by 0 or nothing :D");
        } else {
            if (currentNumber !== "") {
                previousNumber = divide(Number(previousNumber), Number(currentNumber));
                    calculated = true
                currentNumber = "";
                refreshDisplay();
            }
        }
    }

    currentOperator = operator;
}


