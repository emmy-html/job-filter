

function jobFilter() {
    var frontEnd = document.getElementsByClassName("front-end-job");
  var css =
  document.getElementsByClassName("css-job");
  var js =
  document.getElementsByClassName("js-job");
  
  var frontEndFilter = document.getElementById("front-end-button");
  var cssFilter = document.getElementById("css-button");
  var jsFilter = document.getElementById("js-button");
  
  var test = document.getElementById("testing-content");
    if(frontEndFilter.checked === true) {
      test.innerHTML = "is this thing on?"
    } else {
      test.innerHTML = "it's on, and it's working!"
    }
  }