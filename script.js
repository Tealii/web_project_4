
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
const profileForm = modal.querySelector(".profile-form");
const createBtn = createModal.querySelector(".modal__form-submit");
const createForm = createModal.querySelector(".create-form");

// close buttons
const profileCloseBtn = profileModal.querySelector(".modal__exit-btn");
const createCloseBtn = createModal.querySelector(".modal__exit-btn");
const figCloseBtn = figModal.querySelector(".modal__exit-btn");


// elements dealing with figure modal
const figModalImg = figModal.querySelector(".modal__fig");
const figCap = figModal.querySelector(".modal__figcaption");

// form inputs
const name = document.querySelector(".profile-info__name");
const about = document.querySelector(".profile-info__about");
const nameInput = modal.querySelector(".modal__input_type_name");
const aboutInput = modal.querySelector(".modal__input_type_about");

// template stuff
const photoTemplate = document.querySelector("#photo-template").content;
const placeTitle = createModal.querySelector(".modal__input_type_title");
const placeLink = createModal.querySelector(".modal__input_type_img-link");

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


// functions & methods dealing with popUps and cards
function addPlace(placeTitleValue, placeLinkValue) {
  const photoElem = photoTemplate.cloneNode(true);
  const pic = photoElem.querySelector(".photo-grid__pic");
  const picTitle = photoElem.querySelector(".photo-grid__title");
  const picHeart = photoElem.querySelector(".photo-grid__heart-icon");
  const picTrash = photoElem.querySelector(".trash-container");
  pic.src = placeLinkValue;
  pic.alt = placeTitleValue;
  pic.textContent = placeTitleValue;
  
  picTitle.textContent = placeTitleValue;
  
  // events for heart and trash
  picHeart.addEventListener("click", (evt) => {
    evt.target.classList.toggle("photo-grid__heart-icon_active");
  });
  picTrash.addEventListener("click", () => {
    picTrash.parentElement.remove();
  });

  // pic pop-up
  pic.addEventListener("click", (e) => {
    figModalImg.src = e.target.src;
    figCap.alt = e.target.alt;
    figCap.textContent = e.target.alt;
    
    toggleModal(figModal);
  });
  
  return photoElem;
}

function insertCard(placeTitleValue, placeLinkValue) {
  photoContainer.prepend(addPlace(placeTitleValue, placeLinkValue));
}

initialCards.forEach((elem) => insertCard(elem.name, elem.link));


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

