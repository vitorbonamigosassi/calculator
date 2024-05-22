console.clear();

// Selectors

const input = document.querySelector(".inputClass");
const buttons = document.querySelectorAll("button");

// Attribution
let inputArray = [];
let number1, number2, operator;

// Event Listeners

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // if (button.innerText == "C") {
    //   input.value = "";
    //   inputArray = [];
    // } else if (button.innerText == "÷" || button.innerText == "×" || button.innerText == "-" || button.innerText == "+") {
    //   operator = button.innerText;
    //   inputArray.push(+input.value);
    //   input.value = "";
    // } else if (button.innerText == "=") {
    //   inputArray.push(+input.value);
    //   operate(inputArray, 0, operator)
    // } else {
    //   input.value += button.innerText;
    // }

    // switch (button.innerText) {
    //   case 'C':
    //     input.value = "";
    //     inputArray = [];
    //     break;
    //   case '÷':
    //   case '×':
    //   case '-':
    //   case '+':
    //     operator = button.innerText;
    //     inputArray.push(+input.value);
    //     input.value = "";
    //     break;
    //   case '=':
    //     inputArray.push(+input.value);
    //     operate(inputArray, 2, operator)
    //     break;
    //   default:
    //     input.value += button.innerText;
    // }

    switch (button.className) {
      case 'clearClass':
        input.value = "";
        inputArray = [];
        break;
      case 'operator':
        operator = button.innerText;
        inputArray.push(+input.value);
        input.value = "";
        break;
      case 'sendClass':
        inputArray.push(+input.value);
        operate(inputArray, 2, operator)
        break;
      case 'percent':
        input.value /= 100;
        break;
      // case 'backspace':
      //   inputArray.pop();
      //   break;
      case 'negate':
        input.value *= -1;
        break;
      default:
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
    case "÷":
      input.value = div(number1, number2);
      inputArray = [];
      break;
    case "×":
      input.value = mul(number1, number2);
      inputArray = [];
      break;
  }
};

// Keyboard Support

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'Escape':
      console.log("C");
      input.value = "";
      inputArray = [];
      break;
    case '%':
      console.log("ha");
      input.value += event.key;
      break;
    case 'Backspace':
      console.log("ha");
      break;
    case '/':
      console.log("Divide");
      input.value += event.key;
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
      console.log("*");
      input.value += event.key;
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
      console.log("-");
      input.value += event.key;
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
      console.log("+");
      input.value += event.key;
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
      console.log("=");
      input.value += event.key;
      break;
  }
});
