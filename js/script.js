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


function myFunction() {
  var element = document.body;
  element.classList.toggle("darkMode");
  var element = document.getElementById("cButton", "backButton");
  element.classList.toggle("darkMode");
  var element = document.getElementById("backButton");
  element.classList.toggle("darkMode");
  var element = document.getElementById("percentButton");
  element.classList.toggle("darkMode");
    var element = document.getElementById("7Button");
  element.classList.toggle("darkMode");
      var element = document.getElementById("8Button");
  element.classList.toggle("darkMode");
      var element = document.getElementById("9Button");
  element.classList.toggle("darkMode");
      var element = document.getElementById("4Button");
  element.classList.toggle("darkMode");
        var element = document.getElementById("5Button");
  element.classList.toggle("darkMode");
        var element = document.getElementById("6Button");
  element.classList.toggle("darkMode");
        var element = document.getElementById("1Button");
  element.classList.toggle("darkMode");
        var element = document.getElementById("2Button");
        element.classList.toggle("darkMode");
        var element = document.getElementById("3Button");
  element.classList.toggle("darkMode");
  var element = document.getElementById("periodButton");
  element.classList.toggle("darkMode");
        var element = document.getElementById("zero");
  element.classList.toggle("darkMode");
          var element = document.getElementById("divideOperator");
  element.classList.toggle("darkMode");
          var element = document.getElementById("timesOperator");
  element.classList.toggle("darkMode");
          var element = document.getElementById("minusOperator");
  element.classList.toggle("darkMode");
          var element = document.getElementById("addOperator");
  element.classList.toggle("darkMode");
          var element = document.getElementById("equaloOperator");
  element.classList.toggle("darkModeEqual");
  var element = document.getElementById("highlight");
  element.classList.toggle("darkModeHighlight");
  var element = document.getElementById("calculation");
  element.classList.toggle("darkMode");
  var element = document.getElementById("result");
  element.classList.toggle("darkMode");
  // var element = document.getElementById("darkModeButton");
  // element.classList.toggle("hide");
  // var element = document.getElementById("lightModeButton");
  // element.classList.toggle("show");
  var x = document.getElementById("darkModeButton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("lightModeButton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction2() {
  var element = document.body;
  element.classList.toggle("darkMode");
  var element = document.getElementById("cButton", "backButton");
  element.classList.toggle("darkMode");
  var element = document.getElementById("backButton");
  element.classList.toggle("darkMode");
  var element = document.getElementById("percentButton");
  element.classList.toggle("darkMode");
    var element = document.getElementById("7Button");
  element.classList.toggle("darkMode");
      var element = document.getElementById("8Button");
  element.classList.toggle("darkMode");
      var element = document.getElementById("9Button");
  element.classList.toggle("darkMode");
      var element = document.getElementById("4Button");
  element.classList.toggle("darkMode");
        var element = document.getElementById("5Button");
  element.classList.toggle("darkMode");
        var element = document.getElementById("6Button");
  element.classList.toggle("darkMode");
        var element = document.getElementById("1Button");
  element.classList.toggle("darkMode");
        var element = document.getElementById("2Button");
        element.classList.toggle("darkMode");
        var element = document.getElementById("3Button");
  element.classList.toggle("darkMode");
  var element = document.getElementById("periodButton");
  element.classList.toggle("darkMode");
        var element = document.getElementById("zero");
  element.classList.toggle("darkMode");
          var element = document.getElementById("divideOperator");
  element.classList.toggle("darkMode");
          var element = document.getElementById("timesOperator");
  element.classList.toggle("darkMode");
          var element = document.getElementById("minusOperator");
  element.classList.toggle("darkMode");
          var element = document.getElementById("addOperator");
  element.classList.toggle("darkMode");
          var element = document.getElementById("equaloOperator");
  element.classList.toggle("darkModeEqual");
  var element = document.getElementById("highlight");
  element.classList.toggle("darkModeHighlight");
  var element = document.getElementById("calculation");
  element.classList.toggle("darkMode");
  var element = document.getElementById("result");
  element.classList.toggle("darkMode");
  // var element = document.getElementById("darkModeButton");
  // element.classList.toggle("show");
  // var element = document.getElementById("lightModeButton");
  // element.classList.toggle("hide");
  var x = document.getElementById("darkModeButton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("lightModeButton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}