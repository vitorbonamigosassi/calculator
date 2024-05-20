console.clear();
const input = document.querySelector(".inputClass");
const plusButton = document.querySelector(".plusClass");
const sendButton = document.querySelector(".sendClass");

let inputArray = [];

plusButton.addEventListener('click', () => {
    inputArray.push(+input.value);
    input.value = "";
    console.log(inputArray);
});


const add = ([input1, input2]) => input1 + input2;

sendButton.addEventListener('click', () => {
    let result = add(inputArray);
    console.log(result);
})









