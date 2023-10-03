let screen = document.getElementById('front');
let result = '';

function appendNumber(number) {
  result += number;
  updateScreen();
}

function appendOperator(operator) {
  if (result.length > 0 && !isNaN(result.slice(-1))) {
    result += operator;
    updateScreen();
  }
}

function clearScr() {
  result = '';
  updateScreen();
}

function resetInput() {
    result = '';
    updateScreen();
}

function backspace() {
  result = result.slice(0, -1);
  updateScreen();
}

function updateScreen() {
  screen.textContent = result;
}

function calculate() {
  try {
    result = eval(result);
    updateScreen();
  } catch (error) {
    screen.textContent = 'Error';
  }
}

function plusminus() {
  result = -result;
  updateScreen();
}

document.getElementById('percent').addEventListener('click', function() {
  appendOperator('%');
});

document.getElementById('sqroot').addEventListener('click', function() {
  result = Math.sqrt(parseFloat(result));
  updateScreen();
});

document.getElementById('square').addEventListener('click', function() {
  result = Math.pow(parseFloat(result), 2);
  updateScreen();
});

document.getElementById('inverse').addEventListener('click', function() {
  result = 1 / parseFloat(result);
  updateScreen();
});

document.getElementById('divide').addEventListener('click', function() {
  appendOperator('/');
});

document.getElementById('multiply').addEventListener('click', function() {
  appendOperator('*');
});

document.getElementById('subs').addEventListener('click', function() {
  appendOperator('-');
});

document.getElementById('sum').addEventListener('click', function() {
  appendOperator('+');
});

document.getElementById('solve').addEventListener('click', function() {
  calculate();
});

let numButtons = document.getElementsByClassName('btn-num');
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', function() {
    appendNumber(numButtons[i].textContent);
  });
}