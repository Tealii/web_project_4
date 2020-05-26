
const modal = document.querySelector(".modal");
const profileModal = document.querySelector(".profile-modal");
const figModal = document.querySelector(".fig-modal");
const createModal = document.querySelector(".create-modal");

const editBtn = document.querySelector(".profile-info__edit-btn");
const closeBtn = document.querySelectorAll(".modal__exit-btn");
const saveBtn = modal.querySelector(".modal__form-submit")
const form = modal.querySelector(".modal__form");
const addBtn = document.querySelector(".profile__add-button");

const nameInput = modal.querySelector(".modal__input_type_name");
const aboutInput = modal.querySelector(".modal__input_type_about");

const name = document.querySelector(".profile-info__name");
const about = document.querySelector(".profile-info__about");

const pic = document.querySelectorAll(".photo-grid__item");


// opening/closing modals
function toggleProfileModal() {
  profileModal.classList.toggle("modal_active");
}

function toggleCreateModal() {
  createModal.classList.toggle("modal_active");
}

  pic.forEach( pic => {
    pic.addEventListener("click", (e) => {
      figModal.classList.toggle("modal_active");
      figModal.src = this.src;
    });
  });


 function closeModal(){
   if (figModal.classList.contains("modal_active") ||
   profileModal.classList.contains("modal_active") ||
   createModal.classList.contains("modal_active")) {
     
     figModal.classList.remove("modal_active");
      profileModal.classList.remove("modal_active");
      createModal.classList.remove("modal_active");
   }
 }


closeBtn.forEach( closeBtn => {
  closeBtn.addEventListener("click", closeModal);
});


// form handler
function formSubmit(evt) {
  evt.preventDefault();
  
  name.textContent = nameInput.value;
  about.textContent = aboutInput.value;
}


// events
editBtn.addEventListener("click", toggleProfileModal);
saveBtn.addEventListener("click", toggleProfileModal);
form.addEventListener("submit", formSubmit);
addBtn.addEventListener("click", toggleCreateModal);