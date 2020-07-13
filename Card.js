


class Card {
  constructor(data, cardTemplateSelector) {
    this._image = data.link;
    this._title = data.name;
    
    this._cardTemplateSelector = cardTemplateSelector;
    
    this._element = this._getCardTemplate();
    this._likeBtn = this._element.querySelector(".photo-grid__heart-icon");
    this._trashBtn = this._element.querySelector(".trash-container");
  }
  
  _getCardTemplate() {
    const photoTemplate = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".photo-grid__item")
      .cloneNode(true);

    return photoTemplate;
  }

  _addEventListeners() {

    // events for heart and trash
    this._likeBtn.addEventListener("click", (evt) => {
      evt.target.classList.toggle("photo-grid__heart-icon_active");
    });
    this._trashBtn.addEventListener("click", (evt) => {
      this._trashBtn.parentElement.remove();
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
    this._element.querySelector(".photo-grid__pic").src = this._image;
    this._element.querySelector(".photo-grid__pic").alt = this._title;
    this._element.querySelector(".photo-grid__title").textContent = this._title;

    this._addEventListeners();
    
    return this._element;
  }

}


export {Card};
