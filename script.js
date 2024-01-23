let result = 0;
var calculator = document.getElementById("calculator");
var resultDisplay = document.getElementById("result");
var allButtons = document.querySelectorAll(".button");

allButtons.forEach(function (button) {
  button.addEventListener("click", function () {
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

function calculateResult() {
  try {
    result = eval(resultDisplay.value);
    if (!isFinite(result)) {
      throw new Error();
    }
    resultDisplay.value = result;
  } catch (error) {
    resultDisplay.value = "Error!";
  }
}

function clearResult() {
  resultDisplay.value = "";
  result = 0;
}

function updateResult(value) {
  resultDisplay.value += value;
}
