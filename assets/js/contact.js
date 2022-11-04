const header = document.querySelector(".header");
const formContact = document.querySelector(".form-contact");
const sendBtn = document.querySelector(".form-contact-btn");
const alertBtn = document.querySelector(".contact-alert-btn");
const alertForm = document.querySelector(".contact-alert");

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

function sendForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  if (name && email && message) {
    if (email.includes("@" && "." && "com")) {
      alertForm.classList.add("show");
    }
  }
  formContact.reset();
}

alertBtn.addEventListener("click", function () {
  alertForm.classList.remove("show");
});
