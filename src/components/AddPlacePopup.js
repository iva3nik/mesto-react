import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleAddPlaceName(e) {
    setName(e.target.value);
  }

  function handleAddPlaceLink(e) {
    setLink(e.target.value);
  }

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link
    });
  };

  return(
    <PopupWithForm
      name="add-card"
      title="Новое место"
      buttonSubmit="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}
    >
      <label className="popup__field">
        <input
          type="text"
          id="name-place-input"
          className="popup__item-profile popup__item-profile_input_name"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          value={name}
          onChange={handleAddPlaceName}
          required
        />
        <span className="popup__input-error name-place-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          type="url"
          id="url-input"
          className="popup__item-profile popup__item-profile_input_job"
          name="link"
          placeholder="Ссылка на картинку"
          value={link}
          onChange={handleAddPlaceLink}
          required
        />
        <span className="popup__input-error url-input-error"></span>
      </label>
    </PopupWithForm>
  )

};

export default AddPlacePopup;
