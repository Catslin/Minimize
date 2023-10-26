loadContent = (fileName, event) => {
  fileName = fileName ? fileName : "../page/default.html";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector(".show").innerHTML = this.responseText;
    }
  };
  event.preventDefault();
  xhttp.open("GET", fileName, true);
  xhttp.send();

  // 存储当前加载的页面文件名
  localStorage.setItem("currentPage", fileName);
};

window.addEventListener('DOMContentLoaded', function(event) {
  // 检查localStorage中是否有存储的页面文件名
  var currentPage = localStorage.getItem("currentPage");

  if (currentPage) {
    loadContent(currentPage, event);
  } else {
    loadContent('./public/page/default.html', event);
  }
});