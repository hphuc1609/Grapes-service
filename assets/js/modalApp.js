import createModal from "./createModal.js";

createModal();

const modalGalleryItem = document.querySelectorAll(`[data-modal="true"]`);
const modalContainer = document.querySelector(".modal");
const modalTrack = document.querySelector(".modal-slide");
const modalHeading = document.querySelector(".modal-heading");
const modalIntro = document.querySelector(".modal-intro");
const modalBtn = document.querySelectorAll(".modal-btn");

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

class Modal {
  constructor(modal) {
    this.modal = modal;
    this.attachModalEventListener();
  }

  openModal() {
    this.modal.classList.add("active");
    document.body.style.overflow = "hidden";
    this.modal.style.overflow = "auto";
  }

  closeModal() {
    isMoving = false;
    this.modal.classList.remove("active");
    document.body.style.overflow = "auto";
    this.modal.style.overflow = "hidden";
  }

  attachModalEventListener() {
    this.modal.addEventListener("click", (e) => {
      e.target.classList.contains("modal-close") ? this.closeModal() : null;
    });
  }
}

const modal = new Modal(modalContainer);

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
    item.addEventListener("click", () => {
      updateModal(galleries.find((g) => g.name === item.dataset.gallery));
      modal.openModal();
    });
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
    modal.closeModal();
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
