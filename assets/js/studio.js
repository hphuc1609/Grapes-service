const navItems = document.querySelectorAll(".studio-nav-item");
const studioNav = document.querySelector(".studio-nav");
const header = document.querySelector(".header");
const goToTop = document.querySelector(".go-to-top");

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});

let scrollUp = window.pageYOffset;
window.addEventListener("scroll", function () {
  // lấy vị trí section about
  const studioAbout = document.querySelector("#about");
  const aboutPosition = studioAbout.getBoundingClientRect().top;

  // lấy vị trí section press
  const studioPress = document.querySelector("#press");
  const pressPosition = studioPress.getBoundingClientRect().top;

  // lấy vị trí section testimonials
  const studioTes = document.querySelector("#testimonals");
  const testimonalPosition = studioTes.getBoundingClientRect().top;

  // scroll xuống tới section nào thì active nav item tương ứng với section đó và remove active nav item khác
  navItems.forEach((item, index) => {
    if (
      (index === 0 && aboutPosition < 500) ||
      (index === 1 && pressPosition < 500) ||
      (index === 2 && testimonalPosition < 500)
    ) {
      navItems.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
    }
  });

  // scroll xuống cuối footer thì ẩn nav
  const footer = document.querySelector("footer");
  const footerPosition = footer.getBoundingClientRect().top;
  if (footerPosition < window.innerHeight) {
    studioNav.classList.add("hide");
  } else {
    studioNav.classList.remove("hide");
  }

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

goToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
