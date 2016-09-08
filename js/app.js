var minutesWrap = document.getElementById('minutes-wrap'),
    secondsWrap = document.getElementById('seconds-wrap'),
    minutes     = 25,
    seconds = minutes * 60;

// set up display
minutesWrap.innerHTML = padZero(minutes);
secondsWrap.innerHTML = '00';

// single digits should have leading zero
function padZero(num) {
  return (num < 10) ? "0"+num : num;
}

function countDown(minutes) {
  var int = setInterval(function () {
    seconds--;

    if(seconds % 60 === 59) {
      minutes--;
      minutesWrap.innerHTML = padZero(minutes);
    }

    if(seconds === 0) {
      stopTimer();
    }

    secondsWrap.innerHTML = padZero(seconds % 60);
  }, 1000);

  var stopTimer = function() {
    minutesWrap.innerHTML = padZero(minutes);
    secondsWrap.innerHTML = '00';
    clearInterval(int);
  };
}

countDown(minutes);
