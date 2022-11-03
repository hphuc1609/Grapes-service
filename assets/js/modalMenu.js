const menuBtn = document.querySelector(".header-hamburger");
const modalMenu = document.querySelector(".modal-menu");
const closeBtn = document.querySelector(".modal-menu__close");
const menuLinks = document.querySelectorAll(".modal-menu__link");
const menuAlert = document.querySelectorAll(".modal-menu-alert");

menuBtn.addEventListener("click", () => {
  modalMenu.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modalMenu.classList.remove("show");
});

menuLinks.forEach((link) => {
  link.onclick = function () {
    modalMenu.classList.remove("active");
  };
});

menuAlert.forEach((item) => {
  item.onclick = function () {
    alert("This page is under construction");
  };
});
