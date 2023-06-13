const buttonStart = document.querySelector('.start-btn');
buttonStart.addEventListener('click', function() {

})


'use strict'
// minutes
const timer = 1;
// minutes to seconds
let amountTime = timer * 60;

function calculateTime() {
  const countdown = document.querySelector('#coundown-5min');
  let minutes = Math.floor(amountTime / 60);
  let seconds = amountTime % 60;

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  countdown.textContent = `${minutes} : ${seconds}`;
  amountTime--;

  if (amountTime < 0) {
    stopTimer();
    amountTime = 0;
  } 
};

function stopTimer() {
  clearInterval(timerId);
}

let timerId = setInterval(calculateTime, 1000);
