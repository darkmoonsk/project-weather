const btnSandwich = document.querySelector(".btnSandwich");
const btnClose = document.querySelector(".btnClose");
const sideMenu = document.querySelector(".sideMenu");

btnSandwich.onclick = () => sideMenu.classList.add("menuOpen");
btnClose.onclick = () => sideMenu.classList.remove("menuOpen");

window.addEventListener('load', checkWindowWidth);
window.addEventListener('orientationchange', checkWindowWidth);

function checkWindowWidth() {
    if (window.innerWidth <= 960) {
      sideMenu.classList.remove('menuOpen');
    } else {
      sideMenu.classList.add('menuOpen');
    }
}