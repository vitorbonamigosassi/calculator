console.clear();

// Selectors

const input = document.querySelector(".inputClass");
const dot = document.querySelector(".dotClass");
const buttons = document.querySelectorAll("button");

// Attribution
let inputArray = [];
let backspaceArray = [];
let number, operator;
let clicked = false;
// let temp1, temp2, lastOperation;

// Event Listeners

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    switch (button.className) {
      case 'dotClass':
        if (!clicked) {
          input.value += button.innerText;
          clicked = true;
        }
        break;
      case 'clearClass':
        input.value = "";
        clicked = false;
        inputArray = [];
        // backspaceArray = [];
        break;
      case 'operator':
        // if (inputArray.length > 0) {
        //   operate(inputArray, operator);
        //   lastOperation = inputArray + operator;
        //   console.log(lastOperation);
        // } else {
        //   input.value = "";
        // }
        inputArray.push(+input.value);
        operator = button.innerText;
        input.value = "";
        clicked = false;
        break;
      case 'sendClass':
        // if (inputArray.length == 0) {
        //   // backspaceArray = [];
        //   input.value = "";
        // } else {
        // }
        inputArray.push(+input.value);
        operate(inputArray, operator)
        inputArray = [];
        clicked = false;
        break;
      case 'percent':
        input.value /= 100;
        break;
      // case 'backspace':
      //   backspaceArray.pop();
      //   inputArray.pop();
      //   input.value = backspaceArray.join("");
      //   break;
      case 'negate':
        input.value *= -1;
        break;
      default:
        // backspaceArray.push(+button.innerText)
        input.value += button.innerText;
    }
  });
});

// Functions

const operate = (number, operator) => {
  switch (operator) {
    case "+":
      input.value = number[0] + number[1];
      break;
    case "-":
      input.value = number[0] - number[1];
      break;
    case "÷":
      input.value = number[0] / number[1];
      break;
    case "×":
      input.value = number[0] * number[1];
      break;
  }
};

// Keyboard Support

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'Escape':
      input.value = "";
      inputArray = [];
      break;
    case '%':
      input.value /= 100;
      break;
    case 'Backspace':
      console.log("ha");
      break;
    case '/':
      inputArray.push(+input.value);
      operator = '/';
      input.value = "";
      clicked = false;
      break;
    case '7':
      console.log("7");
      input.value += event.key;
      break;
    case '8':
      console.log("8");
      input.value += event.key;
      break;
    case '9':
      console.log("9");
      input.value += event.key;
      break;
    case '*':
      inputArray.push(+input.value);
      operator = '*';
      input.value = "";
      clicked = false;
      break;
    case '4':
      console.log("4");
      input.value += event.key;
      break;
    case '5':
      console.log("5");
      input.value += event.key;
      break;
    case '6':
      console.log("6");
      input.value += event.key;
      break;
    case '-':
      inputArray.push(+input.value);
      operator = '-';
      input.value = "";
      clicked = false;
      break;
    case '1':
      console.log("1");
      input.value += event.key;
      break;
    case '2':
      console.log("2");
      input.value += event.key;
      break;
    case '3':
      console.log("3");
      input.value += event.key;
      break;
    case '+':
      inputArray.push(+input.value);
      operator = '+';
      input.value = "";
      clicked = false;
      break;
    case '0':
      console.log("0");
      input.value += event.key;
      break;
    case '.':
    case ',':
      console.log(".");
      input.value += event.key;
      break;
    case '=':
    case 'Enter':
      inputArray.push(+input.value);
      operate(inputArray, operator)
      inputArray = [];
      clicked = false;
      break;
  }
});
