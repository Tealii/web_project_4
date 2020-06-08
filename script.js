
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
const editBtn = document.querySelector(".profile-info__edit-btn");
const closeBtn = document.querySelectorAll(".modal__exit-btn");
const saveBtn = modal.querySelector(".modal__form-submit");
const profileForm = modal.querySelector(".profile-form");
const createBtn = createModal.querySelector(".modal__form-submit");
const createForm = createModal.querySelector(".create-form");
// const form = modal.querySelector(".modal__form");
const addBtn = document.querySelector(".profile__add-button");
const heartBtn = document.querySelectorAll(".photo-grid__heart-icon");

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

// functions & methods
function addPlace(placeTitleValue, placeLinkValue) {
  // if photoElem is placed out it doesn't seem to work..
  const photoElem = photoTemplate.cloneNode(true);
  const pic = photoElem.querySelector(".photo-grid__pic");
  const picTitle = photoElem.querySelector(".photo-grid__title");
  const picHeart = photoElem.querySelector(".photo-grid__heart-icon");
  const picTrash = photoElem.querySelector(".trash-container");
  pic.src = placeLinkValue;
  pic.alt = placeTitleValue;
  pic.textContent = placeTitleValue;
  
  picTitle.textContent = placeTitleValue;
  // pic.setAttribute("style", `background-image: url(${placeLinkValue})`);
  
  // events for heart and trash
  picHeart.addEventListener("click", (evt) => {
    evt.target.classList.toggle("photo-grid__heart-icon_active");
  });
  picTrash.addEventListener("click", () => {
    picTrash.parentElement.remove();
  })

  // pic pop-up
  // don't know how to get this to work if pic was a div tag
  // with bg image instead.
  pic.addEventListener("click", function(e) {
    figModalImg.src = e.target.src;
    figCap.alt = e.target.alt;
    figCap.textContent = e.target.alt;
    
    openModal(figModal);
  });
  
  photoContainer.prepend(photoElem);
  console.log("2");
}

initialCards.reverse();
initialCards.forEach(elem => addPlace(elem.name, elem.link));

// opening/closing modals
function openModal(modalElem) {
  modalElem.classList.toggle("modal_active");
}

function closeModal(){
  if (figModal.classList.contains("modal_active") ||
  profileModal.classList.contains("modal_active") ||
  createModal.classList.contains("modal_active")) {
    
    figModal.classList.remove("modal_active");
    profileModal.classList.remove("modal_active");
    createModal.classList.remove("modal_active");
  }
}

addBtn.addEventListener("click", () => {
  openModal(createModal);
  // console.log("1");
});

closeBtn.forEach( closeBtn => {
  closeBtn.addEventListener("click", closeModal);
});
  
// form handler
function profileFormSubmit(evt) {
  evt.preventDefault();
  
  name.textContent = nameInput.value;
  about.textContent = aboutInput.value;
}

function createFormSubmit(evt) {
  evt.preventDefault();
  // console.log("4");
}

// events for buttons
editBtn.addEventListener("click", () => {
  openModal(profileModal);
});
saveBtn.addEventListener("click", () => {
  openModal(profileModal);
});
createBtn.addEventListener("click", () => {
  openModal(createModal);
  addPlace(placeTitle.value, placeLink.value);
  // console.log("3");
});
profileForm.addEventListener("submit", profileFormSubmit);
createForm.addEventListener("submit", createFormSubmit);
