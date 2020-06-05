function jobFilter() {
    var frontEnd = document.getElementById("front-end-job");
  var css =
  document.getElementById("css-job");
  var js =
  document.getElementById("js-job");
  
  var frontEndFilter = document.getElementById("front-end-button");
  var cssFilter = document.getElementById("css-button");
  var jsFilter = document.getElementById("js-button");
  
  var test = document.getElementById("testing-content");
    if(jsFilter.checked === true) {
      frontEnd.style.display = "none";
      css.style.display = "none";
      js.style.display = "inherit";
    } else {
      css.style.display = "none";
      js.style.display = "none";
    }
  }