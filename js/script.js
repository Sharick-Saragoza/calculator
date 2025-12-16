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

function add(num1, num2) {
    return num1 += num2;
}

function calculate(operator, num1, num2) {
    
}


// function minus(num1, num2) {

// }

// function multiply(num1, num2) {

// }

// function divide(num1, num2) {

// }