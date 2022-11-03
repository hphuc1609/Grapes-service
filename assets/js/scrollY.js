const header = document.querySelector(".header");

let scrollUp = window.pageYOffset;
window.addEventListener("scroll", function () {
  let scrollDown = window.pageYOffset;

  if (window.innerWidth < 768) {
    if (scrollUp > scrollDown) {
      header.style.top = "0";
    } else {
      header.style.top = "-75px";
    }
  }
  scrollUp = scrollDown;
});
