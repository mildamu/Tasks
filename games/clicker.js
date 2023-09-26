let timer;
let count = 0;
function startTimer() {
 let timerl= 30;

 function countdown() {
    timerl--;

if (timerl > 0) {
    timer = setTimeout(countdown, 1000);
  } 
  else {
    alert(`Time's up! Final count: ${count}`);
    document.getElementById('clickButton').disabled = true;
  }
}

countdown();
}

function incrementCount() {
    count++;
    console.log(`Count: ${count}`);
}
document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('clickButton').addEventListener('click', incrementCount);
