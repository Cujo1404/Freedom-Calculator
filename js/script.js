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



// detectswipe to backspace code 

function detectSwipe(element, callback) {
  var swipeSurface = element,
    swipeDir,
    startX,
    distX,
    startY,
    distY,
    threshold = 100, // required min distance traveled to be considered swipe
    restraint = 50, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipeDir) {};

  swipeSurface.addEventListener('mousedown', function(e) {
    swipeDir = 'none';
    startX = e.pageX;
    startY = e.pageY;
    startTime = new Date().getTime(); // record time when mouse button is pressed
  });

  swipeSurface.addEventListener('mousemove', function(e) {
    // prevent scrolling when inside DIV
    e.preventDefault();
  });

  swipeSurface.addEventListener('mouseup', function(e) {
    distX = e.pageX - startX; // get horizontal dist traveled by mouse while in contact with surface
    distY = e.pageY - startY; // get vertical dist traveled by mouse while in contact with surface
    elapsedTime = new Date().getTime() - startTime; // get time elapsed
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        swipeDir = (distX < 0) ? 'left' : 'right';
      }
    }
    handleswipe(swipeDir);
  });

  swipeSurface.addEventListener('touchstart', function(e) {
    var touchobj = e.changedTouches[0];
    swipeDir = 'none';
    startX = touchobj.pageX;
    startY = touchobj.pageY;
    startTime = new Date().getTime(); // record time when finger first makes contact with surface
  }, false);

  swipeSurface.addEventListener('touchmove', function(e) {
    // prevent scrolling when inside DIV
    e.preventDefault();
  }, false);

  swipeSurface.addEventListener('touchend', function(e) {
    var touchobj = e.changedTouches[0];
    distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
    distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
    elapsedTime = new Date().getTime() - startTime; // get time elapsed
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        swipeDir = (distX < 0) ? 'left' : 'right';
      }
    }
    handleswipe(swipeDir);
  }, false);
}

var swipeArea = document.getElementById('resultDisplay');

detectSwipe(swipeArea, function(swipedir) {
  if (swipedir == 'right') {
    result.value = result.value.slice(0, -1);
    console.log('Right swipe detected!');
  }
});