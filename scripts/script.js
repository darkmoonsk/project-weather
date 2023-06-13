/*
    Este script está encarregado de controlar as funcionalidades visuais da pagina
    como o menu lateral e o tema escuro.
*/
const btnSandwich = document.querySelector(".btnSandwich");
const btnClose = document.querySelector(".btnClose");
const btnTheme = document.querySelector("#switch");

const logo = document.querySelector(".logo");
const sideMenu = document.querySelector(".sideMenu");
const target = document.querySelector(".target");
const topHeader = document.querySelector(".topHeader");
const bottomHeader = document.querySelector(".bottomHeader");
const inputSearch = document.querySelector(".inputSearch");
const input = document.querySelector("input");

btnSandwich.onclick = () => sideMenu.classList.add("menuOpen");
btnClose.onclick = () => sideMenu.classList.remove("menuOpen");
btnTheme.onclick = changeTheme;

window.addEventListener("load", () => {
    checkWindowWidth();
    if (localStorage.getItem("theme") === "dark") {
        btnTheme.checked = true;
        applyDarkMode();
    } else {
        btnTheme.checked = false;
        removeDarkMode();
    }

});
window.addEventListener("orientationchange", checkWindowWidth);

function checkWindowWidth() {
    if (window.innerWidth <= 960) {
        sideMenu.classList.remove("menuOpen");
    } else {
        sideMenu.classList.add("menuOpen");
    }
}

function changeTheme() {
    if (btnTheme.checked) {
        applyDarkMode();
    } else {
        removeDarkMode();
    }
}

function applyDarkMode() {
    logo.src = "./images/logo-dark.svg";
    document.body.classList.add("dark-mode-secondary");
    sideMenu.classList.add("dark-mode-primary");
    topHeader.classList.add("dark-mode-primary");
    bottomHeader.classList.add("dark-mode-tertiary");
    localStorage.setItem("theme", "dark");
}

function removeDarkMode() {
    logo.src = "./images/logo-light.svg";
    document.body.classList.remove("dark-mode-secondary");
    sideMenu.classList.remove("dark-mode-primary");
    topHeader.classList.remove("dark-mode-primary");
    bottomHeader.classList.remove("dark-mode-tertiary");
    localStorage.setItem("theme", "light");
}
