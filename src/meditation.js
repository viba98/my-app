var c = localStorage.getItem("min");

document.addEventListener('DOMContentLoaded', function() {
  var x = 1000*c*60;
  setTimeout(function () {
        window.location = "congrats.html";
  }, x);
  console.log("hello");
  console.log(c);
  document.getElementById("pause").addEventListener('click', pauseAnimation);
});

function pauseAnimation(){
  setTimeout(function () {
        window.location = "congrats.html";
  }, 100);
  console.log('hi');
}
