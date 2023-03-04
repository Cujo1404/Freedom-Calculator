let result = document.getElementById("result");
let calculation = document.getElementById("calculation");

function addNumber(num) {
  result.value += num;
}

function addOperator(op) {
  // Check if the last character in the input is an operator
  const lastChar = result.value[result.value.length - 1];
  if (/[+\-*/]/.test(lastChar)) {
    // If the last character is an operator, replace it with the new operator
    result.value = result.value.slice(0, -1) + op;
  } else {
    // Otherwise, add the operator normally
    result.value += op;
  }
}

function clearResult() {
  result.value = "";
  calculation.value = "";
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  calculation.value = result.value;
  result.value = eval(result.value);
}

function percentage() {
  let expression = result.value;
  let operatorIndex = expression.search(/[-+/*]/);
  let num = expression.slice(0, operatorIndex);
  let operator = expression[operatorIndex];
  let percentage = eval(expression.slice(operatorIndex + 1)) / 100;
  let resultValue;

  if (operator === '+') {
    resultValue = eval(num) * (1 + percentage);
  } else if (operator === '-') {
    resultValue = eval(num) * (1 - percentage);
  }

  calculation.value = expression + "%";
  result.value = resultValue.toFixed(2);
}


