var minutesWrap = document.getElementById('minutes-wrap'),
    secondsWrap = document.getElementById('seconds-wrap'),
    startBtn    = document.getElementById('start-button'),
    minutes     = 25,
    seconds = minutes * 60;

// single digits should have leading zero
var padZero = function(num) {
  return (num < 10) ? "0"+num : num;
};

var startTimer = function() {
  interval = setInterval(countDown, 1000);
};

var stopTimer = function() {
  minutesWrap.innerHTML = padZero(minutes);
  secondsWrap.innerHTML = '00';
  clearInterval(interval);
};

var countDown = function() {
  seconds--;

  if(seconds % 60 === 59) {
    minutes--;
    minutesWrap.innerHTML = padZero(minutes);
  }

  if(seconds === 0) {
    stopTimer();
  }

  secondsWrap.innerHTML = padZero(seconds % 60);
};

// set up display
minutesWrap.innerHTML = padZero(minutes);
secondsWrap.innerHTML = '00';

startBtn.addEventListener('click', startTimer);

