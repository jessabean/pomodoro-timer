var container = document.getElementById('timer-wrap'),
    start = 60;
    
container.innerHTML = '00';

function padZero(num) {
  return (num < 10) ? "0"+num : num;
}

function countDown(i) {
  i = start - 1;

  var int = setInterval(function () {
    container.innerHTML = padZero(i);
    i-- || loop();
  }, 1000);

  var loop = function() {
    container.innerHTML = '00';
    i = start - 1;
  };
}

countDown(start);
