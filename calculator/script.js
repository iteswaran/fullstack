// script.js
let displayValue = '';
let currentOperation = null;
let firstOperand = null;

const display = document.getElementById('display');

function appendNumber(number) {
  displayValue += number;
  display.value = displayValue;
}

function setOperation(operator) {
  if (displayValue === '') return;
  if (currentOperation !== null) calculate();
  firstOperand = parseFloat(displayValue);
  currentOperation = operator;
  displayValue = '';
}

function calculate() {
  if (currentOperation === null || displayValue === '') return;
  const secondOperand = parseFloat(displayValue);
  let result;

  switch (currentOperation) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    default:
      return;
  }

  displayValue = result.toString();
  display.value = displayValue;
  currentOperation = null;
  firstOperand = null;
}

function clearDisplay() {
  displayValue = '';
  currentOperation = null;
  firstOperand = null;
  display.value = '';
}
