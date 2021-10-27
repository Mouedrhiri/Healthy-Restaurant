function b() {
  document.getElementById("male").setAttribute("class", "male2");
  document.getElementById("female").setAttribute("class", "fem");
  var div = document.getElementById("bt");
  div.innerHTML =
    '<button id="btn"><a href="/choicem.html">Continue</a></button>';
}
function rose() {
  document.getElementById("female").setAttribute("class", "fem2");
  document.getElementById("male").setAttribute("class", "male");
  var div = document.getElementById("bt");
  div.innerHTML =
    '<button id="btn"><a href="/choicef.html">Continue</a></button>';
}
function blr1() {
  document.getElementById("male").setAttribute("class", "male");
  var div = document.getElementById("bt");
  div.innerHTML = "";
}
function blr2() {
  document.getElementById("female").setAttribute("class", "fem");
  var div = document.getElementById("bt");
  div.innerHTML = "";
}
function b() {
  document.getElementById("lose").setAttribute("class", "lose2");
  document.getElementById("masse").setAttribute("class", "masse");
  var div = document.getElementById("bt");
  div.innerHTML = '<button id="btn"><a href="/lose.html">Continue</a></button>';
}
function rose() {
  document.getElementById("masse").setAttribute("class", "masse2");
  document.getElementById("lose").setAttribute("class", "lose");
  var div = document.getElementById("bt");
  div.innerHTML =
    '<button id="btn"><a href="/masse.html">Continue</a></button>';
}
function blr1() {
  document.getElementById("lose").setAttribute("class", "lose");
  var div = document.getElementById("bt");
  div.innerHTML = "";
}
function blr2() {
  document.getElementById("masse").setAttribute("class", "masse");
  var div = document.getElementById("bt");
  div.innerHTML = "";
}
