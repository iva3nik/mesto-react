import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmPopup({ isOpen, onClose, onCardDelete, card }) {

  function handleConfirmDeleteSubmit(e) {
    e.preventDefault();
    onCardDelete(card);
  }

  return(
    <PopupWithForm
      name="confirm"
      title="Вы уверены?"
      buttonSubmit="Да"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleConfirmDeleteSubmit}
    >
    </PopupWithForm>
  )

};

export default ConfirmPopup;
