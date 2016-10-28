function iskrographIn(event) {
  var segment = event.target;
  var rating = segment.getAttribute("data-rating");
  var ratingCellId = segment.parentElement.getAttribute("data-rating-cell");
  var ratingCell =  document.getElementById(ratingCellId);

  if (rating < 83) {
    segment.classList.add("low-bold");
    ratingCell.classList.add("red-text");
  } else {
    segment.classList.add("normal-bold");
  }
  ratingCell.parentElement.classList.add("hide");
  ratingCell.classList.add("week-rating-show");
  ratingCell.textContent = rating;
};

function iskrographOut(event) {
  var segment = event.target;
  var rating = segment.getAttribute("data-rating");
  var ratingCellId = segment.parentElement.getAttribute("data-rating-cell");
  var ratingCell =  document.getElementById(ratingCellId);

  if (rating < 83) {
    segment.classList.remove("low-bold");
    ratingCell.classList.remove("red-text");
  } else {
    segment.classList.remove("normal-bold");
  }
  ratingCell.parentElement.classList.remove("hide");
  ratingCell.classList.remove("week-rating-show");
  ratingCell.textContent = "";
};
