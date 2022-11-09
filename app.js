fetch("../layouts/header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".header").innerHTML = data;
  });

fetch("../layouts/footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".footer").innerHTML = data;
  });

fetch("../layouts/modalMenu.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".modal-menu").innerHTML = data;
  });

fetch("../layouts/news.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".news").innerHTML = data;
  });
