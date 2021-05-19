import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

  const linkRef = React.useRef("");

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: linkRef.current.value,
    });
  }

  return(
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      buttonSubmit="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          type="url"
          id="url-input-avatar"
          className="popup__item-profile popup__item-profile_input_job"
          defaultValue=""
          name="link"
          placeholder="Ссылка на картинку"
          ref={linkRef}
          required
        />
        <span className="popup__input-error url-input-avatar-error"></span>
      </label>
    </PopupWithForm>
  )

}

export default EditAvatarPopup;
