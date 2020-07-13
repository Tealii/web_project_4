


class Card {
  constructor(data, cardTemplateSelector) {
    this._link = data.link;
    this._text = data.text;
    
    this._cardTemplateSelector = cardTemplateSelector;
    
    this._element = this._getCardTemplate();
    this._likeBtn = this._element.querySelector(".photo-grid__heart-icon");
    this._trashBtn = this._element.querySelector(".trash-container");
  }
  
  _getCardTemplate() {
    const photoTemplate = document
      .querySelector(this._cardTemplateSelector)
      .content
      .cloneNode(true);

    return photoTemplate;
  }

  _addEventListeners() {

    // events for heart and trash
    this._likeBtn.addEventListener("click", (evt) => {
      evt.target.classList.toggle("photo-grid__heart-icon_active");
    });
    this._trashBtn.addEventListener("click", () => {
      picTrash.parentElement.remove();
    });

    // pic pop-up
    this._element.querySelector(".photo-grid__pic").addEventListener("click", (e) => {
      const figModal = document.querySelector(".fig-modal");
      const figModalImg = figModal.querySelector(".modal__fig");
      const figCap = figModal.querySelector(".modal__figcaption");
      

      figModalImg.src = e.target.src;
      figCap.alt = e.target.alt;
      figCap.textContent = e.target.alt;
      
      toggleModal(figModal);
    });
  }

  generateCard = () => {
    this._element.querySelector(".photo-grid__pic").src = this._link;
    this._element.querySelector(".photo-grid__pic").alt = this._text;
    this._element.querySelector(".photo-grid__title").textContent = this._text;

    this._addEventListeners();
    
    return this._element;
  }

}

