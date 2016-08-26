var container = document.getElementById('timer-wrap'),
    start = 60;
    
container.innerHTML = '00';

function countDown(i) {
  i = start - 1;

  var int = setInterval(function () {
    container.innerHTML = i;
    i-- || loop();
  }, 1000);

  var loop = function() {
    clearInterval(int);
    container.innerHTML = '00';
    countDown(start);
  };
}

countDown(start);
