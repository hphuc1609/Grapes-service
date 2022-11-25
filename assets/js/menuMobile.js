const menuMobile = document.querySelector(".menu-mobile");
const menuLinks = document.querySelectorAll(".menu-mobile__link");

function openMenu() {
  menuMobile.classList.add("active");
}
function closeMenu() {
  menuMobile.classList.remove("active");
}

menuLinks.forEach((link) => {
  link.onclick = () => {
    link.classList.add("active");
    closeMenu();
  };
});

function menuAlert() {
  alert("This page is under construction");
}
