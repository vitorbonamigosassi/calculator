console.clear();

// Selectors

const input = document.querySelector(".inputClass");
const buttons = document.querySelectorAll("button");

// Attribution

input.value = 0;
let inputArray = [];
let number1, number2, operator;

// Event Listeners

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.innerText == "C") {
            input.value = "";
            inputArray = [];
        } else if (button.innerText == "/" || button.innerText == "*" || button.innerText == "-" || button.innerText == "+") {
            operator = button.innerText;
            inputArray.push(+input.value);
            input.value = "";
        } else if (button.innerText == "=") {
            inputArray.push(+input.value);
            operate(inputArray, 2, operator)
        } else {
            input.value += button.innerText;
        }
    });
});

// Functions

const add = ([input1, input2]) => input1 + input2;
const sub = ([input1, input2]) => input1 - input2;
const div = ([input1, input2]) => input1 / input2;
const mul = ([input1, input2]) => input1 * input2;

const operate = (number1, number2, operator) => {
    switch (operator) {
        case "+":
            input.value = add(number1, number2);
            inputArray = [];
            break;
        case "-":
            input.value = sub(number1, number2);
            inputArray = [];
            break;
        case "/":
            input.value = div(number1, number2);
            inputArray = [];
            break;
        case "*":
            input.value = mul(number1, number2);
            inputArray = [];
            break;
    }
};