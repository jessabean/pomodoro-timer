var timerWrap   = document.getElementById('timer-wrap'),
    minutesWrap = document.getElementById('minutes-wrap'),
    secondsWrap = document.getElementById('seconds-wrap'),
    messageWrap = document.getElementById('message-wrap'),
    startBtn    = document.getElementById('start-button'),
    stopBtn     = document.getElementById('stop-button'),
    resetBtn    = document.getElementById('reset-button'),
    minutes     = 25,
    seconds     = minutes * 60,
    interval;

// single digits should have leading zero
var padZero = function(num) {
  return (num < 10) ? "0"+num : num;
};

var setDisplay = function(type) {
  if(type === 'working') {
    minutes = 25;
    messageWrap.innerHTML = 'Time to get to work!';
  } else {
    minutes = 5;
    messageWrap.innerHTML = 'Time to take a break!';
  }

  seconds = minutes * 60;
  minutesWrap.innerHTML = padZero(minutes);
  secondsWrap.innerHTML = '00';
  messageWrap.classList.add('is-active');
}

var startTimer = function() {
  if(interval) {
    clearInterval(interval);
  }

  interval = setInterval(countDown, 1000);
  messageWrap.classList.remove('is-active');
};

var stopTimer = function() {
  clearInterval(interval);
};

var resetTimer = function() {
  stopTimer();
  timerWrap.classList.add('js-working');
  setDisplay('working');
}

var countDown = function() {
  seconds--;

  if(seconds % 60 === 59) {
    minutes--;
    minutesWrap.innerHTML = padZero(minutes);
  }

  if(seconds === 0) {
    stopTimer();
    
    if(timerWrap.classList.contains('js-working')) {
      timerWrap.classList.remove('js-working');
      setDisplay('break');
    } else {
      timerWrap.classList.add('js-working');
      setDisplay('working');
    }
  }

  secondsWrap.innerHTML = padZero(seconds % 60);
};

setDisplay('working');

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
