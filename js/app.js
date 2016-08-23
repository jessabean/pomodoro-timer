var container = document.getElementById('timer-wrap');
var start = 59;
container.innerHTML = "00";

function countDown(i) {
  var int = setInterval(function () {
    container.innerHTML = i;
    i-- || reset();
  }, 1000);

  var reset = function() {
    clearInterval(int);
    container.innerHTML = "00";
    countDown(start);
  }
}

countDown(start);
