// Function triggered on load to add the current date to the footer
window.onload = function () {
  var date = new Date();
  document.getElementById("footer").innerHTML +=
    " " + date.toDateString() + ".";
};
