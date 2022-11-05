const header = document.querySelector(".header");
const viewItems = document.querySelectorAll(".view-item");

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

    viewItems.forEach((item) => {
      // Hiển thị views trên PC
      if (window.innerWidth >= 1024) {
        if (item.offsetTop <= scrollDown + 550) {
          item.classList.add("show");
        }
      }
      // Hiển thị views trên tablet
      if (window.innerWidth > 768 && window.innerWidth < 1024) {
        if (item.offsetTop <= scrollDown + 800) {
          item.classList.add("show");
        }
      }
      // Hiển thị views trên mobile
      if (window.innerWidth <= 768) {
        if (item.offsetTop <= scrollDown + 600) {
          item.classList.add("show");
        }
      }
    });
  }
  scrollUp = scrollDown;
};
