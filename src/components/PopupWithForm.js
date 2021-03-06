import React from 'react';

function PopupWithForm({ title, name, children, isOpen, buttonSubmit,
    onClose, onSubmit, isLoading, buttonSubmitLoading }) {

  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_form">
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__edit-profile"
          name={name}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button
            className="popup__save"
            type="submit"
          >
            {isLoading ? buttonSubmitLoading : buttonSubmit}
          </button>
        </form>
        <button
          className="popup__close-form"
          type="button"
          aria-label="close-form"
          onClick={onClose}
        >
        </button>
      </div>
    </div>
  )

}

export default PopupWithForm;
