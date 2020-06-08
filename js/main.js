// loop to list all jobs by type (?)
function listJobs(type) {
  var i;
  for (i = 0; i < type.length; i++) {
    type[i].style.display = "block";
  }
}
// loop to hide all jobs by type (?)
function hideJobs(type) {
  var i;
  for (i = 0; i < type.length; i++) {
    type[i].style.display = "none";
  }
}
// selects all elements with class name corresponding with job type
let frontEndJobs = document.querySelectorAll(".front-end-job");
let cssJobs = document.querySelectorAll(".css-job");
let jsJobs = document.querySelectorAll(".js-job");
// function that filters jobs when checkboxes are clicked
function jobFilter() {
  // selects checkboxes for job type
  var frontEndFilter = document.getElementById("front-end-button").checked;
  var cssFilter = document.getElementById("css-button").checked;
  var jsFilter = document.getElementById("js-button").checked;
  // if/else statements that determine which jobs are shown
  if (frontEndFilter === true && cssFilter === true && jsFilter === true) {
    listJobs(frontEndJobs);
    listJobs(cssJobs);
    listJobs(jsJobs);
  } else if (
    frontEndFilter === true &&
    cssFilter === false &&
    jsFilter === false
  ) {
    listJobs(frontEndJobs);
    hideJobs(cssJobs);
    hideJobs(jsJobs);
  } else if (
    frontEndFilter === false &&
    cssFilter === true &&
    jsFilter === false
  ) {
    hideJobs(frontEndJobs);
    listJobs(cssJobs);
    hideJobs(jsJobs);
  } else if (
    frontEndFilter === false &&
    cssFilter === false &&
    jsFilter === true
  ) {
    hideJobs(frontEndJobs);
    hideJobs(cssJobs);
    listJobs(jsJobs);
  } else if (
    frontEndFilter === true &&
    cssFilter === true &&
    jsFilter === false
  ) {
    listJobs(frontEndJobs);
    listJobs(cssJobs);
    hideJobs(jsJobs);
  } else if (
    frontEndFilter === false &&
    cssFilter === true &&
    jsFilter === true
  ) {
    hideJobs(frontEndJobs);
    listJobs(cssJobs);
    listJobs(jsJobs);
  } else if (
    frontEndFilter === true &&
    cssFilter === false &&
    jsFilter === true
  ) {
    listJobs(frontEndJobs);
    hideJobs(cssJobs);
    listJobs(jsJobs);
  } else {
    listJobs(frontEndJobs);
    listJobs(cssJobs);
    listJobs(jsJobs);
  }
}
// reset selected options on click
function clearResults() {
  document.getElementById("front-end-button").checked = false;
  document.getElementById("css-button").checked = false;
  document.getElementById("js-button").checked = false;
  listJobs(frontEndJobs);
  listJobs(cssJobs);
  listJobs(jsJobs);
}