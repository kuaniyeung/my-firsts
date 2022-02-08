
/* Mobile Navi */

const listIcon = document.querySelector(".bi-list")
const nav = document.querySelector("nav")
const closeIcon = document.querySelector(".bi-x-lg")

listIcon.addEventListener("click", clickOpen);
closeIcon.addEventListener("click", clickClose);

function clickOpen() {
    listIcon.style.display = "none";
    nav.style.display = "block";
    closeIcon.style.display = "inline-block";
} 

function clickClose() {
    closeIcon.style.display = "none";
    nav.style.display = "none";
    listIcon.style.display = "block";
}