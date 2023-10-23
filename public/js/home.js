const introduction = document.getElementsByClassName("introduction")[0];
const avatarActive = document.getElementsByClassName("avatar")[0];
const information = document.getElementsByClassName("information")[0];

let isExpanded = false; // 初始状态为未展开

avatarActive.onclick = function () {
  if (isExpanded) {
    introduction.style.width = "5%";
    information.style.display = "none";
  } else {
    introduction.style.width = "20%";
    information.style.display = "block";
  }

  isExpanded = !isExpanded;
};
