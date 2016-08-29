var minutesWrap = document.getElementById('minutes-wrap'),
    secondsWrap = document.getElementById('seconds-wrap'),
    seconds = 60,
    minutes = 2;

// total time in s
var TIME = minutes * seconds;

// set up display
minutesWrap.innerHTML = padZero(minutes);
secondsWrap.innerHTML = '00';

// single digits should have leading zero
function padZero(num) {
  return (num < 10) ? "0"+num : num;
}

function countDown(i) {
  seconds = 60 - 1;
  i = i - 1;

  var int = setInterval(function () {
    if(seconds === 59) {
      minutesWrap.innerHTML = padZero(minutes - 1);
    }
    
    secondsWrap.innerHTML = padZero(seconds);
    seconds-- || secondsLoop();
    i-- || stopTimer();
  }, 1000);

  // seconds countdown should loop until minutes = 0
  var secondsLoop = function() {
    secondsWrap.innerHTML = '00';
    minutesWrap.innerHTML = padZero(minutes - 1);
    seconds = 60 - 1;
    minutes = minutes - 1;
  };

  var stopTimer = function() {
    minutesWrap.innerHTML = '00';
    clearInterval(int);
  }
}

countDown(TIME);
