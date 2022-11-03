const header = document.querySelector(".header");
const formContact = document.querySelector(".contact-form");
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

function sendForm() {
  // lưu vào local storage
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let contact = {
    name: name,
    email: email,
    message: message,
  };
  localStorage.setItem("contact", JSON.stringify(contact));

  // reset form
  formContact.reset("");

  // hiển thị thông báo
  let alert = document.querySelector(".alert");
  alert.innerHTML = "Cảm ơn bạn đã gửi phản hồi cho chúng tôi!";
  alert.style.display = "block";
  setTimeout(function () {
    alert.style.display = "none";
  }, 3000);
}
