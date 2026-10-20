const mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mouseover", function () {
    mouseBox.style.backgroundColor = "#bcebd1";
});

mouseBox.addEventListener("mouseout", function () {
    mouseBox.style.backgroundColor = "#dce9ff";
});

const textInput = document.getElementById("textInput");
const currentValue = document.getElementById("currentValue");

textInput.addEventListener("keyup", function () {
    currentValue.textContent = textInput.value;
});

const calculator = document.getElementById("calculator");

calculator.addEventListener("submit", function (event) {
    event.preventDefault();

    const first = Number(document.getElementById("firstNumber").value);
    const second = Number(document.getElementById("secondNumber").value);
    const operation = document.getElementById("operation").value;
    const result = document.getElementById("result");

    let answer;

    if (operation === "+") {
        answer = first + second;
    } else if (operation === "-") {
        answer = first - second;
    } else if (operation === "*") {
        answer = first * second;
    } else if (operation === "/") {
        if (second === 0) {
            result.textContent = "Cannot divide by zero.";
            return;
        }

        answer = first / second;
    }

    result.textContent = "Result: " + answer;
});