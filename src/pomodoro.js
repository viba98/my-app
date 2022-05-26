// store test


//work timer
//set values
var x = 20;
var wm, ws;
x = localStorage.getItem('timeSet');
document.addEventListener('DOMContentLoaded', function() {
  workValues();
});

function optOne(){
  x = 1;
  console.log(x);
  localStorage.setItem("timeSet", x);
  workValues();
}
function optTwo(){
  x = 20;
  console.log(x);
  localStorage.setItem("timeSet", x);
  workValues();
}
function optThree(){
  x = 25;
  console.log(y);
  localStorage.setItem("timeSet", x);
  workValues();
}

function workValues(){
  document.getElementById('min').innerText = x;
  document.getElementById('sec').innerText = '00';
  wm = document.getElementById('min').innerText;
  ws = document.getElementById('sec').innerText;
  console.log(wm+':'+ws);
}

function workTimer() {
  workValues();
  console.log(ws);
  const inte = setInterval(function(){
    if( ws != 0 && ws != '0'){
          document.getElementById('sec').innerText--;
          ws--;
          console.log(ws);
      }
      else if((ws == '00') && (wm != 0)){
          ws = 3;
          wm--;
          document.getElementById('min').innerText = wm;
          document.getElementById('sec').innerText = ws;
          console.log(ws);
          console.log('wm:' + wm);
      }
      else if((ws == '00' || ws == 0) && (wm == '00' || wm == 0) ){
          clearInterval(inte);
          breakValues();
          console.log('works');

      }
  }, 1000);
}

//break timer
//set breakTimer values
var y = 5;
var bm, bs;
y = localStorage.getItem('timeBSet');

function optBOne(){
  y = 2;
  console.log(y);
  localStorage.setItem("timeBSet", y);
  breakValues();
}
function optBTwo(){
  y = 20;
  console.log(y);
  localStorage.setItem("timeBSet", y);
  breakValues();
}
function optBThree(){
  y = 25;
  console.log(y);
  localStorage.setItem("timeBSet", y);
  breakValues();
}

//set Break Values
function breakValues(){
  withButton();


  document.getElementById('min').innerText = y;
  document.getElementById('sec').innerText = '00';
  bm = document.getElementById('min').innerText;
  bs = document.getElementById('sec').innerText;
  console.log(bm+':'+bs);
}

function breakTimer(){
  breakValues();
  withoutButton();
//  bStart.style.display = "none";
  console.log("bs");
  const inte2 = setInterval(function(){
    if( bs != 0 && bs != '0'){
          document.getElementById('sec').innerText--;
          bs--;
          console.log('break timer has started');
      }
      else if((bs == '00') && (bm != 0)){
          bs = 4;
          bm--;
          document.getElementById('min').innerText = bm;
          document.getElementById('sec').innerText = bs;
          console.log(bs);
          console.log('new min started');
      }
      else if((bs == '00' || bs == 0) && (bm == '00' || bm == 0) ){
          workValues();
          console.log('green timer works');
          withButton();
          clearInterval(inte2);
      }
  }, 1000);
}
