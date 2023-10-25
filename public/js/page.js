function loadContent(fileName, event) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector(".show").innerHTML = this.responseText;
    }
  };
  event.preventDefault();
  xhttp.open("GET", fileName, true);
  xhttp.send();
}