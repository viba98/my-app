var ses = 1;

document.addEventListener('DOMContentLoaded', function() {

});

function myFunction(){
  if (session==1){
    timer();
    start.style.display = "none";
    document.getElementById("min").style.fontSize = "48px";
    document.getElementById("semicolon").style.fontSize = "48px";
    document.getElementById("sec").style.fontSize = "48px";
    console.log('works');
  }
  else {
    window.open('meditation.html');
      console.log('does not works');
    }
}


function trialTimer(){
    if (ses == 1 || ses == 3){
      console.log('session ='+ses);
      withoutButton();
      workTimer();
    }
    else if (ses == 2) {
      console.log('session 2 ='+ses);
      breakTimer();
    }
    else if (ses == 4) {
      window.open('meditation.html');
    }
    else if (ses == 5) {
      ses = 0;
      console.log(ses);
    }
    ses++
}

function test(){
  var test = localStorage.getItem('t1');
}

function withButton(){
  start.style.display = "block";
  document.getElementById("min").style.fontSize = "24px";
  document.getElementById("semicolon").style.fontSize = "24px";
  document.getElementById("sec").style.fontSize = "24px";
  console.log('sup');
}

function withoutButton(){
  start.style.display = "none";
  document.getElementById("min").style.fontSize = "48px";
  document.getElementById("semicolon").style.fontSize = "48px";
  document.getElementById("sec").style.fontSize = "48px";
}
