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
      // PC
      if (window.innerWidth >= 1024) {
        if (item.offsetTop - 500 < scrollDown) {
          item.classList.add("show");
        }
      }
      // Tablet
      else if (window.innerWidth >= 768) {
        if (item.offsetTop - 300 <= scrollDown + 500) {
          item.classList.add("show");
        }
      }
      // Mobile
      else if (window.innerWidth < 768) {
        if (item.offsetTop - 200 <= scrollDown + 500) {
          item.classList.add("show");
        }
      }
    });
  }
  scrollUp = scrollDown;
};
