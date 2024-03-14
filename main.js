let arrowLeft = document.getElementById("arrowLeft");
let arrowRight = document.getElementById("arrowRight");

let container = document.getElementsByClassName("container")[0];

arrowRight.onclick = function () {
    container.style.left = "-720px";
};
arrowLeft.onclick = function () {
    container.style.left = "50px";
};
