//set dropdown values
var x = 20;
var wm, ws;
x = localStorage.getItem('timeSet');
document.addEventListener('DOMContentLoaded', function() {
  pomodoro();
});

function optOne(){
  x = 15;
  console.log(x);
  localStorage.setItem("timeSet", x);
  pomodoro();
}
function optTwo(){
  x = 20;
  console.log(x);
  localStorage.setItem("timeSet", x);
  pomodoro();
}
function optThree(){
  x = 25;
  console.log(x);
  localStorage.setItem("timeSet", x);
  pomodoro();
}

function pomodoro(){
  document.getElementById('min').innerText = x;
  document.getElementById('sec').innerText = '00';
  wm = document.getElementById('min').innerText;
  ws = document.getElementById('sec').innerText;
  console.log(wm+':'+ws);
}

function timer() {
  pomodoro();
  console.log(ws);
  setInterval(function(){
    if(document.getElementById('sec').innerText != '00' && ws != 0 && ws != '0'){
          document.getElementById('sec').innerText--;
          ws--;
          console.log(ws);
      } else if(document.getElementById('sec').innerText == '00' || ws == '00'){
          ws = 3;
          wm--;
          document.getElementById('min').innerText = wm;
          document.getElementById('sec').innerText = ws;
          console.log(ws);
      }
  }, 1000);
}
