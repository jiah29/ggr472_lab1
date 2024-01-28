// Function triggered on load to add the current date to the footer
window.onload = function () {
  const date = new Date();
  document.getElementById("footer").innerHTML +=
    " " + date.toDateString() + ".";
};

// Enable popover globally according to Bootstrap documentation
$(function () {
  $('[data-toggle="popover"]').popover();
});

// Enable tooltips globally according to Bootstrap documentation
$(function () {
  // delay tooltip appearance by 2 seconds
  $('[data-toggle="tooltip"]').tooltip({ delay: { show: 2000, hide: 0 } });
});

// Function triggered on click of the thumbs up icon
// Input: index of the icon clicked based on the order of the icons
// appearance in the HTML document tree
function like(index) {
  // get all thumbs up icons
  const allThumbsUp = document.getElementsByClassName("fa-thumbs-up");
  // get the thumbs up icon at given index
  const targetThumbUp = allThumbsUp[index];

  // check if the icon is already green
  if (targetThumbUp.style.color === "green") {
    // if so, make it revert back to white
    targetThumbUp.style.color = "white";
  } else {
    // otherwise, make it green
    targetThumbUp.style.color = "green";

    // corresponding thumbs down icon should be white if the thumbs up icon is green
    toggleOppositeIcon(index, "fa-thumbs-down");
  }
}

// Function triggered on click of the thumbs down icon
// Input: index of the icon clicked based on the order of the icons
// appearance in the HTML document tree
function dislike(index) {
  // get all thumbs up icons
  const allThumbsUp = document.getElementsByClassName("fa-thumbs-down");
  // get the thumbs up icon at given index
  const targetThumbUp = allThumbsUp[index];

  // check if the icon is already red
  if (targetThumbUp.style.color === "red") {
    // if so, make it revert back to white
    targetThumbUp.style.color = "white";
  } else {
    // otherwise, make it red
    targetThumbUp.style.color = "red";

    // corresponding thumbs up icon should be white if the thumbs down icon is red
    toggleOppositeIcon(index, "fa-thumbs-up");
  }
}

// Function to toggle the color of the opposite icon
// Input: index of the icon clicked based on the order of the icons
// appearance in the HTML document tree
// Input: opposite icon to the one clicked (name of FontAwesome class)
function toggleOppositeIcon(index, opposite) {
  // get the opposite button
  const oppositeIcon = document.getElementsByClassName(opposite)[index];

  // check if the button is already disabled
  if (opposite === "fa-thumbs-up" && oppositeIcon.style.color === "green") {
    oppositeIcon.style.color = "white";
    return;
  }

  if (opposite === "fa-thumbs-down" && oppositeIcon.style.color === "red") {
    oppositeIcon.style.color = "white";
    return;
  }
}
