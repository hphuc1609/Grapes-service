const modalGalleryItem = document.querySelectorAll(".gallery-item");
const modalContainer = document.querySelector(".modal");
const modalTrack = document.querySelector(".modal-slide");
const modalHeading = document.querySelector(".modal-heading");
const modalIntro = document.querySelector(".modal-intro");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelector(".modal-close");

// all gallery shared
let galleries;
let transitionSpeed;
// for each gallery
let modalImages;
let modalTitle;
let modalText;
let currentIndex;
let lastIndex;
let isMoving = false;

function openModal() {
  modalContainer.classList.add("active");
  document.body.style.overflow = "hidden";
  modalContainer.style.overflow = "auto";
}

function closeModal() {
  modalContainer.classList.remove("active");
  document.body.style.overflow = "auto";
  modalContainer.style.overflow = "hidden";
}

modalBtnClose.addEventListener("click", () => {
  closeModal();
});

function moveGalleryImage() {
  modalTrack.style.transform = `translateX(${currentIndex * -100}%)`;
}

function addContentToModal(arrayOfImages) {
  modalTrack.innerHTML = "";
  modalHeading.innerHTML = "";
  modalIntro.innerHTML = "";
  modalHeading.insertAdjacentHTML(
    "afterbegin",
    `
      <h1 class="modal-title">${modalTitle}</h1>
    `
  );
  modalIntro.insertAdjacentHTML(
    "afterbegin",
    `
      <p class="modal-desc">${modalText}</p>
    `
  );

  arrayOfImages.forEach((image) => {
    modalTrack.insertAdjacentHTML(
      "beforeend",
      `
        <div class="modal-item">
          <img src="${image.src}" alt="${image.alt}" class="modal-image" />
        </div>
      `
    );
  });
}

function updateModal(gallery) {
  modalImages = gallery.images;
  modalTitle = gallery.name;
  modalText = gallery.description;
  currentIndex = 0;
  lastIndex = modalImages.length;
  addContentToModal(modalImages);
  moveGalleryImage();
}

// event listeners
function attachOpenGalleryEventListeners() {
  modalGalleryItem.forEach((item) => {
    item.onclick = () => {
      updateModal(galleries.find((g) => g.name === item.dataset.gallery));
      openModal();
    };
  });
}

function attachArrowEventListeners() {
  modalBtn.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      if (isMoving) return;
      isMoving = true;
      if (e.target.closest(".modal-btn-next")) {
        currentIndex++;
      } else {
        currentIndex--;
      }
      modalTrack.style.transition = `transform ${transitionSpeed}ms ease-in-out`;
      moveGalleryImage();
    })
  );
}

function attachTransitionEndListener() {
  modalTrack.addEventListener("transitionend", () => {
    isMoving = false;
    if (currentIndex === lastIndex) {
      currentIndex = 0;
      modalTrack.style.transition = "none";
      moveGalleryImage();
    }
    if (currentIndex < 0) {
      currentIndex = lastIndex - 1;
      modalTrack.style.transition = "none";
      moveGalleryImage();
    }
  });
}

window.addEventListener("keyup", (e) => {
  if (e.key === "Escape" && modalContainer.classList.contains("active")) {
    closeModal();
  }
});

export default async function initGallery(result, options) {
  await fetch(result)
    .then((response) => response.json())
    .then((data) => {
      galleries = data;
      transitionSpeed = options?.speed || 300;
      modalImages = addContentToModal(data.map((g) => g.images[0]));
      attachOpenGalleryEventListeners();
      attachArrowEventListeners();
      attachTransitionEndListener();
    })
    .catch((error) => {
      console.log("There has been a problem with your fetch operation:", error);
    });
}
