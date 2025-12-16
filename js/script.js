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
    display.textContent = currentNumber;
}

// function add(num1, num2) {

// }

// function minus(num1, num2) {

// }

// function multiply(num1, num2) {

// }

// function divide(num1, num2) {

// }