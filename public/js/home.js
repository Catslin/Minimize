const clickBtn = document.getElementById("check-color");
const cardContainer = document.getElementsByClassName("card-container")[0];
const newCard = document.getElementsByClassName("new-card")[0];

clickBtn.addEventListener("click", function(event) {
    event.preventDefault(); // 阻止按钮的默认提交行为
    cardContainer.style.left = "100%";
    newCard.style.right = "0";
});