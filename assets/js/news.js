const homePage = document.querySelector("#home");
const newsPage = document.querySelector(".news");
const newsClose = document.querySelector(".news-head-close");

function openNewsPage() {
  newsPage.classList.add("news-active");
  document.body.style.overflow = "hidden";
  newsPage.style.overflow = "auto";
}

function closeNewsPage() {
  newsPage.classList.remove("news-active");
  document.body.style.overflow = "auto";
  newsPage.style.overflow = "hidden";
}

newsPage.onclick = function (e) {
  if (e.target == newsPage) {
    closeNewsPage();
  }
};
