document.querySelector(".menu").onclick = function () {
    document.querySelector(".menu-overlay").classList.add("menu-overlay-open");
}

document.querySelector(".nav__btn").onclick = function () {
    document.querySelector(".menu-overlay").classList.remove("menu-overlay-open");
}