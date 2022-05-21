document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("start").addEventListener('click', func);
});

function func(){
  var x = document.getElementById("times").value;
  localStorage.setItem("myValue2", x);
  console.log(x);
}
