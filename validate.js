const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add("modal__input_type_error"); 
  errorElement.textContent = errorMessage; 
  errorElement.classList.add("input-error_active"); 
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove("modal__input_type_error");
  errorElement.classList.remove("input-error_active");
  errorElement.textContent = ""; 
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) { 
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
  else {
    hideInputError(formElement, inputElement);
  }
};


const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid; 
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("modal__form-submit_inactive");
    buttonElement.setAttribute("disabled", true);
  }
  else {
    buttonElement.classList.remove("modal__form-submit_inactive");
    buttonElement.removeAttribute("disabled");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input")); 
  const buttonElement = formElement.querySelector(".modal__form-submit");

  toggleButtonState(inputList, buttonElement); 

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function() {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement); 
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".modal__form"));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function(evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};


enableValidation();