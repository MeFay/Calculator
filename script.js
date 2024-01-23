let result = 0;
var calculator = document.getElementById("calculator");
var resultDisplay = document.getElementById("result");
var allButtons = document.querySelectorAll(".button");

allButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    handleButtonClick(button.innerText);
  });
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
