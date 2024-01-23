let result = 0;
var calculator = document.getElementById("calculator");
var resultDisplay = document.getElementById("result");

calculator.addEventListener("click", function (event) {
  var target = event.target;

  if (target.classList.contains("button")) {
    handleButtonClick(target.innerText);
  }
});

function handleButtonClick(value) {
  switch (value) {
    case "=":
      calculateResult();
      break;
    case "C":
      clearResult();
      break;
    default:
      updateResult(value);
      break;
  }
}

function updateResult(value) {
  resultDisplay.value += value;
}

function clearResult() {
  resultDisplay.value = "";
  result = 0;
}

function calculateResult() {
  result = eval(resultDisplay.value);
  resultDisplay.value = result;
}
