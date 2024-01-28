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

// Function triggered on click of the thumbs up icon
// @Input index: index of the icon clicked based on the order of the icons
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

  // recalculate the number of likes and dislikes
  calculateLikesAndDislikes();
}

// Function triggered on click of the thumbs down icon
// @Input index: index of the icon clicked based on the order of the icons
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

  // recalculate the number of likes and dislikes
  calculateLikesAndDislikes();
}

// Function to toggle the color of the opposite icon
// @Input index: index of the icon clicked based on the order of the icons
// appearance in the HTML document tree
// @Input opposite: name of opposite icon to toggle
function toggleOppositeIcon(index, opposite) {
  // get the opposite button
  const oppositeIcon = document.getElementsByClassName(opposite)[index];

  // if opposite is thumbs up and it is green, make it white
  if (opposite === "fa-thumbs-up" && oppositeIcon.style.color === "green") {
    oppositeIcon.style.color = "white";
    return;
  }

  // if opposite is thumbs down and it is red, make it white
  if (opposite === "fa-thumbs-down" && oppositeIcon.style.color === "red") {
    oppositeIcon.style.color = "white";
    return;
  }
}

// global variables to store the number of likes and dislikes
var numLikes = 0;
var numDislikes = 0;

// Function to calculate the number of likes and dislikes
function calculateLikesAndDislikes() {
  // get all thumbs up and thumbs down icons
  const allThumbsUp = document.getElementsByClassName("fa-thumbs-up");
  const allThumbsDown = document.getElementsByClassName("fa-thumbs-down");

  // reset the number of likes and dislikes
  numLikes = 0;
  numDislikes = 0;

  // increment the number of likes and dislikes based on the color of the icons
  // through iterating through the icons
  for (let i = 0; i < allThumbsUp.length; i++) {
    if (allThumbsUp[i].style.color === "green") {
      numLikes++;
    }
    if (allThumbsDown[i].style.color === "red") {
      numDislikes++;
    }
  }

  // update the number of likes and dislikes in the HTML document
  document.getElementById("likesCount").innerHTML = numLikes;
  document.getElementById("dislikesCount").innerHTML = numDislikes;
}
