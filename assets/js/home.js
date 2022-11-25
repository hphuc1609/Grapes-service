const header = document.querySelector(".header");
const galleryItems = document.querySelectorAll(".gallery-item");
const btnPrev = document.querySelector(".modal-prev");
const btnNext = document.querySelector(".modal-next");
const btnClose = document.querySelector(".modal-close");
const slideItems = document.querySelectorAll(".modal-slide-item");

let scrollUp = window.pageYOffset;
window.onscroll = function () {
  let scrollDown = window.pageYOffset;

  if (scrollUp > scrollDown || scrollUp < 100) {
    header.style.top = "0";
    if (scrollDown > 500) {
      header.classList.add("bg-header");
    } else {
      header.classList.remove("bg-header");
    }
  } else {
    header.style.top = "-75px";

    galleryItems.forEach((item) => {
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
