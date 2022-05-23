var session = 1;

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
