var linkone = document.querySelector(".button-conditions-friend");
var conditionone = document.querySelector(".conditions-stock-friend");

var linktwo = document.querySelector(".button-conditions-opt");
var conditiontwo = document.querySelector(".conditions-stock-opt");

var linkthree = document.querySelector(".button-conditions-repost");
var conditionthree = document.querySelector(".conditions-stock-repost");

conditionone.classList.add("hidden-conditions");
conditiontwo.classList.add("hidden-conditions");
conditionthree.classList.add("hidden-conditions");

linkone.addEventListener("click", function(evt) {
  evt.preventDefault ();
  conditionone.classList.toggle("hidden-conditions");
  arrdate.focus();
});

linktwo.addEventListener("click", function(evt) {
  evt.preventDefault ();
  conditiontwo.classList.toggle("hidden-conditions");
  arrdate.focus();
});

linkthree.addEventListener("click", function(evt) {
  evt.preventDefault ();
  conditionthree.classList.toggle("hidden-conditions");
  arrdate.focus();
});
