const menuMobile = document.querySelector(".menu-mobile");
const menuLinks = document.querySelectorAll(".menu-mobile__link");

function openMenu() {
  menuMobile.classList.add("show");
}
function closeMenu() {
  menuMobile.classList.remove("show");
}

menuLinks.forEach((link) => {
  link.onclick = function () {
    menuMobile.classList.remove("active");
    link.classList.add("active");
  };
});

function menuAlert() {
  alert("This page is under construction");
}
