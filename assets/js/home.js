const header = document.querySelector(".header");
const projectItems = document.querySelectorAll(".project-item");

let scrollUp = window.pageYOffset;
window.onscroll = function () {
  let scrollDown = window.pageYOffset;

  if (scrollUp > scrollDown && scrollUp > 0) {
    header.style.top = "0";
    if (scrollDown > 500) {
      header.classList.add("bg-header");
    } else {
      header.classList.remove("bg-header");
    }
  } else {
    header.style.top = "-75px";

    projectItems.forEach((item) => {
      // Hiển thị project item trên PC
      if (window.innerWidth >= 1024) {
        if (item.offsetTop <= scrollDown + 550) {
          item.classList.add("show");
        }
      }
      // Hiển thị project item trên mobile và tablet
      if (window.innerWidth < 1024) {
        if (item.offsetTop <= scrollDown + 650) {
          item.classList.add("show");
        }
      }
    });
  }
  scrollUp = scrollDown;
};
