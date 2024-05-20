console.clear();
const input = document.querySelector(".inputClass");
const plusButton = document.querySelector(".plusClass");
const sendButton = document.querySelector(".sendClass");

let inputArray = [];

let number1, number2, operator;

plusButton.addEventListener('click', () => {
    inputArray.push(+input.value);
    input.value = "";
    console.log(inputArray);
});


const add = ([input1, input2]) => input1 + input2;
const sub = ([input1, input2]) => input1 - input2;
const div = ([input1, input2]) => input1 / input2;
const mul = ([input1, input2]) => input1 * input2;

sendButton.addEventListener('click', () => {
    let result = add(inputArray);
    console.log(result);
})


const operate = (number1, number2, operator) => {
    switch (operator) {
        case "+":
            add(number1, number2)
            break;
        case "-":
            sub(number1, number2)
            break;        
        case "/":
            div(number1, number2)
            break;
        case "*":
            sub(number1, number2)
            break;
    }
    
};








