const header = document.querySelector(".header");
const sendBtn = document.querySelector(".form-contact-btn");

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

sendBtn.addEventListener("click", function () {
  alert(
    "Thank you for your message. We will contact you as soon as possible :)"
  );
});
