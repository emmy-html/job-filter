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
// function that filters jobs when checkboxes are clicked
function jobFilter() {
  // selects all elements with class name corresponding with job type
  var frontEndJobs = document.querySelectorAll(".front-end-job");
  var cssJobs = document.querySelectorAll(".css-job");
  var jsJobs = document.querySelectorAll(".js-job");
  // selects checkboxes for job type
  var frontEndFilter = document.getElementById("front-end-button").checked;
  var cssFilter = document.getElementById("css-button").checked;
  var jsFilter = document.getElementById("js-button").checked;
  // if/else statements that determine which jobs are shown
  if (frontEndFilter === true) {
    listJobs(frontEndJobs);
  } else {
    hideJobs(frontEndJobs);
  }
}
