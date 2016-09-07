var minutesWrap = document.getElementById('minutes-wrap'),
    secondsWrap = document.getElementById('seconds-wrap'),
    minutes     = 25,
    seconds     = minutes * 60,
    currentSecond;

// set up display
minutesWrap.innerHTML = padZero(minutes);
secondsWrap.innerHTML = '00';

// single digits should have leading zero
function padZero(num) {
  return (num < 10) ? "0"+num : num;
}

function countDown(minutes) {
  var int = setInterval(function () {
    currentSecond = seconds%60;

    if(currentSecond === 59) {
      minutes--;
      minutesWrap.innerHTML = padZero(minutes);
    }

    secondsWrap.innerHTML = padZero(currentSecond);
    seconds-- || stopTimer();
  }, 1000);

  var stopTimer = function() {
    minutesWrap.innerHTML = padZero(minutes);
    secondsWrap.innerHTML = padZero(currentSecond);
    clearInterval(int);
  }
}

countDown(minutes);
