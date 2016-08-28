var minutesWrap = document.getElementById('minutes-wrap'),
    secondsWrap = document.getElementById('seconds-wrap'),
    seconds = 60,
    minutes = 25;

// set up display
minutesWrap.innerHTML = minutes;
secondsWrap.innerHTML = '00';

// single digits should have leading zero
function padZero(num) {
  return (num < 10) ? "0"+num : num;
}

function countDown(i) {
  i = seconds - 1;

  var int = setInterval(function () {
    secondsWrap.innerHTML = padZero(i);
    i-- || loop();
  }, 1000);

  // seconds countdown should loop until minutes = 0
  var loop = function() {
    secondsWrap.innerHTML = '00';
    i = seconds - 1;
  };
}

countDown(seconds);
