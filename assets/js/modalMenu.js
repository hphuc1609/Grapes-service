const menuMobile = document.querySelector(".header-hamburger");
const modalMenu = document.querySelector(".modal-menu");
const closeBtn = document.querySelector(".modal-menu__close");
const menuLinks = document.querySelectorAll(".modal-menu__link");

function openMenu() {
  modalMenu.classList.add("show");
}
function closeMenu() {
  modalMenu.classList.remove("show");
}

menuLinks.forEach((link) => {
  link.onclick = function () {
    modalMenu.classList.remove("active");
  };
});

function menuAlert() {
  alert("This page is under construction");
}
