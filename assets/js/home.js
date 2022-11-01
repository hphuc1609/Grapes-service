const header = document.querySelector(".header");
const projects = document.getElementById("projects");
const projectItems = document.querySelectorAll(".project-item");

//  When the user scrolls down, hide the header. When the user scrolls up, show the header
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
    //  Show the projects
    projectItems.forEach((item) => {
      if (item.offsetTop <= scrollDown + 550) {
        item.classList.add("project-show");
      }
    });
  }
  scrollUp = scrollDown;
};
