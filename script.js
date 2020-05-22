const editBtn = document.querySelector(".profile-info__edit-btn");

const modal = document.querySelector(".modal");

const closeBtn = modal.querySelector(".modal__exit-btn");

const saveBtn = modal.querySelector(".modal__form-submit")

const form = modal.querySelector(".modal__form");


// opening/closing modal
editBtn.addEventListener("click", openCloseModal);
closeBtn.addEventListener("click", openCloseModal);
saveBtn.addEventListener("click", openCloseModal);

function openCloseModal() {
  modal.classList.toggle("display-modal");
}

// form handler
form.addEventListener("submit", formSubmit);

function formSubmit(evt) {
  evt.preventDefault();
  let nameInput = modal.querySelector(".modal__form-name");
  let aboutInput = modal.querySelector(".modal__form-about");

  let name = document.querySelector(".profile-info__name");
  let about = document.querySelector(".profile-info__about");

  name.textContent = nameInput.value;
  about.textContent = aboutInput.value;
}