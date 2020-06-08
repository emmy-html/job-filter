function jobFilter() {
  var frontEndJobs = document.getElementById("front-end-job");
var cssJobs =
document.getElementById("css-job");
var jsJobs =
document.getElementById("js-job");

var frontEndFilter = document.getElementById("front-end-button").checked;
var cssFilter = document.getElementById("css-button").checked;
var jsFilter = document.getElementById("js-button").checked;

  if(frontEndFilter === true && cssFilter === true && jsFilter === true) {
    frontEndJobs.style.display = "block";
    cssJobs.style.display = "block";
    jsJobs.style.display = "block";
  } else if (frontEndFilter === true && cssFilter === false && jsFilter === false) {
    frontEndJobs.style.display = "block";
    cssJobs.style.display = "none";
    jsJobs.style.display = "none"; 
  } else if (frontEndFilter === false && cssFilter === true && jsFilter === false) {
    frontEndJobs.style.display = "none";
    cssJobs.style.display = "block";
    jsJobs.style.display = "none"; 
  } else if (frontEndFilter === false && cssFilter === false && jsFilter === true) {
    frontEndJobs.style.display = "none";
    cssJobs.style.display = "none";
    jsJobs.style.display = "block"; 
  } else if (frontEndFilter === true && cssFilter === true && jsFilter === false) {
    frontEndJobs.style.display = "block";
    cssJobs.style.display = "block";
    jsJobs.style.display = "none"; 
  } else if (frontEndFilter === false && cssFilter === true && jsFilter === true) {
    frontEndJobs.style.display = "none";
    cssJobs.style.display = "block";
    jsJobs.style.display = "block"; 
  } else if (frontEndFilter === true && cssFilter === false && jsFilter === true) {
    frontEndJobs.style.display = "block";
    cssJobs.style.display = "none";
    jsJobs.style.display = "block"; 
  } else {
    frontEndJobs.style.display = "block";
    cssJobs.style.display = "block";
    jsJobs.style.display = "block"; 
  }
}