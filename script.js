const editBtn = document.querySelector(".profile-info__edit-btn");

const modal = document.querySelector(".modal");

const closeBtn = modal.querySelector(".modal__exit-btn");

editBtn.addEventListener("click", openCloseModal);

closeBtn.addEventListener("click", openCloseModal);

function openCloseModal() {
  modal.classList.toggle("display-modal");
}