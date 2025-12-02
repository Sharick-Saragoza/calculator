// Numbers
const btn0 = document.getElementById("zero");
btn0.addEventListener("click", updateDisplayInput);

const btn1 = document.getElementById("one");
btn1.addEventListener("click", updateDisplayInput);

const btn2 = document.getElementById("two");
btn2.addEventListener("click", updateDisplayInput);

const btn3 = document.getElementById("three");
btn3.addEventListener("click", updateDisplayInput);

const btn4 = document.getElementById("four");
btn4.addEventListener("click", updateDisplayInput);

const btn5 = document.getElementById("five");
btn5.addEventListener("click", updateDisplayInput);

const btn6 = document.getElementById("six");
btn6.addEventListener("click", updateDisplayInput);

const btn7 = document.getElementById("seven");
btn7.addEventListener("click", updateDisplayInput);

const btn8 = document.getElementById("eight");
btn8.addEventListener("click", updateDisplayInput);

const btn9 = document.getElementById("nine");
btn9.addEventListener("click", updateDisplayInput);


// Operators
const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");

let firstNumber = null;
let chosenOperator = null;

const btnMultiply = document.getElementById("multiply");
btnMultiply.addEventListener("click", function multiply() {
    firstNumber = Number(displayInput);
    chosenOperator = "x";
    allClear();
});





const btnDivide = document.getElementById("divide");

const btnEquals = document.getElementById("equals");
btnEquals.addEventListener("click", () => {
console.log(operate(firstNumber, chosenOperator, Number(displayInput)))


})


const btnAC = document.getElementById("ac").addEventListener("click", allClear);

let displayInput = "";
let display = document.querySelector(".display");
display.textContent = displayInput;

function updateDisplayInput() {
    display.textContent = displayInput += this.textContent;
}

function allClear() {
    displayInput = "";
    display.textContent = "";
}


function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

function operate(num1, operator, num2) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "x") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    }
}


// console.log(operate("20", "+", "20"));