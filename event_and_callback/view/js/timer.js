var timer;
var displayTime = 0;
var result = document.getElementById("result");

function startTiming() {
  initTimer();
  timer = setInterval(function() {
    showTimer()
  }, 1000);
}

function endTiming() {
  clearInterval(timer);
}

function showTimer() {
  displayTime += 1;
  result.value = displayTime;
}

function initTimer() {
  displayTime = 0;
  result.value = displayTime;
}