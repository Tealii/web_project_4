
import {FormValidator} from "./FormValidator.js";
import {Card} from "./Card.js";

const photoContainer = document.querySelector(".photo-grid__items");
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
      name: "Vanois National Park",
      link: "https://code.s3.yandex.net/web-code/vanois.jpg"
  },
  {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
  ];
  
// modals
const modal = document.querySelector(".modal");
const profileModal = document.querySelector(".profile-modal");
const figModal = document.querySelector(".fig-modal");
const createModal = document.querySelector(".create-modal");
// buttons
const addBtn = document.querySelector(".profile__add-button");
const editBtn = document.querySelector(".profile-info__edit-btn");
const saveBtn = modal.querySelector(".modal__form-submit");
const createBtn = createModal.querySelector(".modal__form-submit");
// forms
const profileForm = profileModal.querySelector(".profile-form");
const createForm = createModal.querySelector(".create-form");
// close buttons
const profileCloseBtn = profileModal.querySelector(".modal__exit-btn");
const createCloseBtn = createModal.querySelector(".modal__exit-btn");
const figCloseBtn = figModal.querySelector(".modal__exit-btn");
// form inputs
const name = document.querySelector(".profile-info__name");
const about = document.querySelector(".profile-info__about");
const nameInput = modal.querySelector(".modal__input_type_name");
const aboutInput = modal.querySelector(".modal__input_type_about");

///////////////////////
const defaultConfig = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__form-submit",
  inactiveButtonClass: "modal__form-submit_inactive",
  inputErrorClass: "modal__input_type_error",
  errorClass: "input-error_active"
}

const editProfileValidation = new FormValidator(defaultConfig, profileForm);
const addCardValidation = new FormValidator(defaultConfig, createForm);

editProfileValidation.enableValidation();
addCardValidation.enableValidation();

const photoTemplateSelector = "#photo-template"

// opening/closing modals
function toggleModal(modalElem) {
  modalElem.classList.toggle("modal_active");
}


addBtn.addEventListener("click", () => {
  toggleModal(createModal);
});
profileCloseBtn.addEventListener("click", () => {
  toggleModal(profileModal);
});
createCloseBtn.addEventListener("click", () => {
  toggleModal(createModal);
});
figCloseBtn.addEventListener("click", () => {
  toggleModal(figModal);
});



function insertCard(data) {
  const card = new Card(data, photoTemplateSelector);

  return photoContainer.prepend(card.generateCard());
}

initialCards.forEach((elem) => insertCard(elem));


// form handlers
function profileFormSubmit(evt) {
  evt.preventDefault();
  
  name.textContent = nameInput.value;
  about.textContent = aboutInput.value;
}

function createFormSubmit(evt) {
  evt.preventDefault();
  insertCard(placeTitle.value, placeLink.value);
}

// escape key and "click out" ways of closing modal

function closeOverlay(evt) {
  toggleModal(evt.target.closest(".modal"));
  evt.target.removeEventListener("click", closeOverlay);
}

function escKeyOverlay(evt) {
  const escKeyCode = 27;
  if (evt.keyCode === escKeyCode) {
    toggleModal(document.querySelector(".modal_active"));
  }
  evt.target.removeEventListener("keyup", escKeyOverlay);
}

const altCloseModal = () => {
  const modalList = Array.from(document.querySelectorAll(".modal"));
  
  modalList.forEach((modalElem) => {
    modalElem.addEventListener("click", closeOverlay);
  });
   

  modalList.forEach(() => {
    document.addEventListener("keyup", escKeyOverlay);
  });
};

altCloseModal();

// events for buttons
editBtn.addEventListener("click", () => {
  toggleModal(profileModal);
});
saveBtn.addEventListener("click", () => {
  toggleModal(profileModal);
});
createBtn.addEventListener("click", () => {
  toggleModal(createModal);
});
profileForm.addEventListener("submit", profileFormSubmit);
createForm.addEventListener("submit", createFormSubmit);

