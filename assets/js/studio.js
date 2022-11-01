const navItems = document.querySelectorAll(".studio-nav-item");
const studioNav = document.querySelector(".studio-nav");

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});

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
});
