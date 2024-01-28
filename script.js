// =============================================================
// This script is used for index.html.
// =============================================================

// Function triggered on load to add the current date to the footer
window.onload = function () {
  const date = new Date();
  document.getElementById("footer").innerHTML +=
    " " + date.toLocaleDateString() + ".";
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

// Global constants to store all thumbs up and thumbs down icons
const allThumbsUp = document.getElementsByClassName("fa-thumbs-up");
const allThumbsDown = document.getElementsByClassName("fa-thumbs-down");

// Global variables to store the number of likes and dislikes
var numLikes = 0;
var numDislikes = 0;

// Iterate through all thumbs up and thumbs down icons and add "click"
// event listeners to each icon
for (let i = 0; i < allThumbsUp.length; i++) {
  allThumbsUp[i].addEventListener("click", function () {
    like(allThumbsUp[i]);
  });
  allThumbsDown[i].addEventListener("click", function () {
    dislike(allThumbsDown[i]);
  });
}

// Function to changes the color of the thumbs up icon
// @Input element: the icon element that was clicked
function like(element) {
  // check if the icon is already green
  if (element.style.color === "green") {
    // if so, make it revert back to white and decrease numLikes by 1
    element.style.color = "white";
    numLikes--;
  } else {
    // otherwise, make it green and increase numLikes by 1
    element.style.color = "green";
    numLikes++;

    // find the index of the icon clicked
    const index = Array.from(allThumbsUp).indexOf(element);
    // toggle off the color of the corresponding thumbs down icon
    toggleOffOppositeIcon(allThumbsDown[index]);
  }

  // recalculate the number of likes and dislikes
  updateLikesAndDislikesCount();
}

// Function to changes the color of the thumbs down icon
// @Input element: the icon element that was clicked
function dislike(element) {
  // check if the icon is already red
  if (element.style.color === "red") {
    // if so, make it revert back to white and decrease numDislikes by 1
    element.style.color = "white";
    numDislikes--;
  } else {
    // otherwise, make it red and increase numDislikes by 1
    element.style.color = "red";
    numDislikes++;

    // find the index of the icon clicked
    const index = Array.from(allThumbsDown).indexOf(element);
    // toggle off the color of the corresponding thumbs up icon
    toggleOffOppositeIcon(allThumbsUp[index]);
  }

  // recalculate the number of likes and dislikes
  updateLikesAndDislikesCount();
}

// Function to toggle off the color of the opposite icon if it is
// already toggled on (i.e. green or red)
// @Input oppositeIcon: icon element to toggle off
function toggleOffOppositeIcon(oppositeIcon) {
  // if opposite icon is green, make it white and decrease numLikes by 1
  if (oppositeIcon.style.color === "green") {
    oppositeIcon.style.color = "white";
    numLikes--;
    return;
  }

  // if opposite is red, make it white and decrease numDislikes by 1
  if (oppositeIcon.style.color === "red") {
    oppositeIcon.style.color = "white";
    numDislikes--;
    return;
  }
}

// Function to update the number of likes and dislikes in HTML
function updateLikesAndDislikesCount() {
  document.getElementById("likesCount").innerHTML = numLikes;
  document.getElementById("dislikesCount").innerHTML = numDislikes;
}
