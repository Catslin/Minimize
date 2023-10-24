const introduction = document.getElementsByClassName("introduction")[0];
const avatarActive = document.getElementsByClassName("avatar")[0];
const information = document.getElementsByClassName("information")[0];

let isExpanded = false;

avatarActive.onclick = function () {
  console.log("window.innerWidth >",window.innerWidth);
  if (window.innerWidth > 768) { 
    if (isExpanded) {
      introduction.style.width = "5%";
      information.style.display = "none";
    } else {
      introduction.style.width = "20%";
      information.style.display = "block";
    }

    isExpanded = !isExpanded;
  }
};