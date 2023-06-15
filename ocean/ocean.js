// const buttonStart = document.querySelector('.start-btn');
// buttonStart.addEventListener('click', function() {

// })


'use strict'
let timerId = null;
let amountTime = 0;

const timerBtn = document.querySelectorAll('.btn-time');
const playButton = document.querySelector('#play-btn');
const pauseButton = document.querySelector('#pause-btn');

// Events for play/pause buttons
playButton.addEventListener('click', playTimer);
pauseButton.addEventListener('click', pauseTimer);

// Event for minutes options 
timerBtn.forEach((btn) => {
  btn.addEventListener('click', function() {
    const duration = parseInt(btn.dataset.timer);
    startTimer(duration);
  });
});

// Initially both pause and paly buttons are disabled
disable(pauseButton);
disable(playButton);

function updateCountdown() {
  let minutes = Math.floor(amountTime / 60);
  let seconds = amountTime % 60;

  if (seconds < 10) {
    seconds = '0' + seconds;
  };

const countdown = document.querySelector('#countdown-box');
countdown.textContent = `${minutes} : ${seconds}`;
amountTime--;

if (amountTime < 0) {
  stopTimer();
  amountTime = 0;
};

};

function startTimer(duration) {
 amountTime = duration * 60;

  stopTimer();
  updateCountdown();
  timerId = setInterval(updateCountdown, 1000);
};

// Function to stop timer
function stopTimer() {
  clearInterval(timerId);
};

// Function to pause timer
function pauseTimer() {
  stopTimer();
  disable(pauseButton); enable(playButton);
};

// Function to play timer
function playTimer() {
  timerId = setInterval(updateCountdown, 1000);
  disable(playButton), enable(pauseButton);
};

// Functions to disable/eble pause/play buttons
function disable(element) {
  element.setAttribute("disabled","");
};
function enable(element) {
  element.removeAttribute("disabled");
}


////////////////////////////////////////////////////////////////
// // minutes
// const timer = 1;
// // minutes to seconds
// let amountTime = timer * 60;

// function calculateTime() {
//   const countdown = document.querySelector('#coundown-5min');
//   let minutes = Math.floor(amountTime / 60);
//   let seconds = amountTime % 60;

//   if (seconds < 10) {
//     seconds = '0' + seconds;
//   }

//   countdown.textContent = `${minutes} : ${seconds}`;
//   amountTime--;

//   if (amountTime < 0) {
//     stopTimer();
//     amountTime = 0;
//   } 
// };

// function stopTimer() {
//   clearInterval(timerId);
// }

// let timerId = setInterval(calculateTime, 1000);

////////////////////////////////////////////////////////////////////////////////////

// 'use strict'
// let timerId = null;
// let amountTime = 0;

// function updateCountdown() {
//   let minutes = Math.floor(amountTime / 60);
//   let seconds = amountTime % 60;

//   if (seconds < 10) {
//     seconds = '0' + seconds;
//   };

// const countdown = document.querySelector('#countdown-box');
// countdown.textContent = `${minutes} : ${seconds}`;
// amountTime--;

// if (amountTime < 0) {
//   stopTimer();
//   amountTime = 0;
// };

// };

// function startTimer(duration) {
//  amountTime = duration * 60;

//   stopTimer();
//   updateCountdown();
//   timerId = setInterval(updateCountdown, 1000);
// };

// // Function to stop timer
// function stopTimer() {
//   clearInterval(timerId);
// };

// // Function to pause timer
// function pauseTimer() {
//   stopTimer();
//   toggleButtonState(false, true);
// };

// // Function to play timer
// function playTimer() {
//   timerId = setInterval(updateCountdown, 1000);
//   toggleButtonState(false, true);
// };

// // Function to control buttons state
// function toggleButtonState(pauseEnabled, playEnabled) {
//   const pauseBtn = document.querySelector('#pause-btn');
//   const playBtn = document.querySelector('#play-btn');
  
//   pauseBtn.disabled = !pauseEnabled;
//   playBtn.disabled = !playEnabled;
// };


// // Make buttons clicable and work
// const timerBtn = document.querySelectorAll('.btn-time');
// timerBtn.forEach((btn) => {
//   btn.addEventListener('click', function() {
//     const duration = parseInt(btn.dataset.timer);
//     startTimer(duration);
//   });
// });

// // Make play & pause buttons clickable and work
// document.querySelector('#pause-btn').addEventListener('click', pauseTimer);
// document.querySelector('#play-btn').addEventListener('click', playTimer);