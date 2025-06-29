// script.js
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Grazie per averci contattato! Ti risponderemo al più presto.");
  this.reset();
});
