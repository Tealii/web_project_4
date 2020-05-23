const editBtn = document.querySelector(".profile-info__edit-btn");

const modal = document.querySelector(".modal");

const closeBtn = modal.querySelector(".modal__exit-btn");

const saveBtn = modal.querySelector(".modal__form-submit")

const form = modal.querySelector(".modal__form");


// opening/closing modal
function openCloseModal() {
  modal.classList.toggle("modal_active");
}

// form handler
function formSubmit(evt) {
  evt.preventDefault();
  const nameInput = modal.querySelector(".modal__form-name");
  const aboutInput = modal.querySelector(".modal__form-about");
  
  const name = document.querySelector(".profile-info__name");
  const about = document.querySelector(".profile-info__about");
  
  name.textContent = nameInput.value;
  about.textContent = aboutInput.value;
}

// events
editBtn.addEventListener("click", openCloseModal);
closeBtn.addEventListener("click", openCloseModal);
saveBtn.addEventListener("click", openCloseModal);
form.addEventListener("submit", formSubmit);