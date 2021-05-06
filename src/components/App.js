import React from 'react';
import cardElement from '../images/kamchatka.jpg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (

    <div className="page">
      <div className="page__container page__center">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        />
        <Footer />

        <section className="popups">
          <PopupWithForm
            name="edit-profile"
            title="Редактировать профиль"
            buttonSubmit="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
            <label className="popup__field">
              <input
                type="text"
                id="name-input"
                className="popup__item-profile popup__item-profile_input_name"
                value="Жак-Ив Кусто"
                name="name"
                placeholder="Имя профиля"
                minlength="2"
                maxlength="40"
                required
              />
              <span className="popup__input-error name-input-error"></span>
            </label>
            <label className="popup__field">
              <input
                type="text"
                id="about-input"
                className="popup__item-profile popup__item-profile_input_job"
                value="Исследователь океана"
                name="about"
                placeholder="О профиле"
                minlength="2"
                maxlength="200"
                required
              />
              <span className="popup__input-error about-input-error"></span>
            </label>
          </PopupWithForm>
          <PopupWithForm
            name="add-card"
            title="Новое место"
            buttonSubmit="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <label className="popup__field">
              <input
                type="text"
                id="name-place-input"
                className="popup__item-profile popup__item-profile_input_name"
                value=""
                name="name"
                placeholder="Название"
                minlength="2"
                maxlength="30"
                required
              />
              <span className="popup__input-error name-place-input-error"></span>
            </label>
            <label className="popup__field">
              <input
                type="url"
                id="url-input"
                className="popup__item-profile popup__item-profile_input_job"
                value=""
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__input-error url-input-error"></span>
            </label>
          </PopupWithForm>
          <PopupWithForm
            name="confirm"
            title="Вы уверены?"
            buttonSubmit="Да"
            onClose={closeAllPopups}
          >
          </PopupWithForm>
          <PopupWithForm
            name="update-avatar"
            title="Обновить аватар"
            buttonSubmit="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <label className="popup__field">
              <input
                type="url"
                id="url-input-avatar"
                className="popup__item-profile popup__item-profile_input_job"
                value=""
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__input-error url-input-avatar-error"></span>
            </label>
          </PopupWithForm>
          <ImagePopup />
        </section>

        <template id="card">
        <div className="card" id="">
          <img
            src={cardElement}
            alt="Камчатка"
            className="card__element"
          />
          <button className="card__trash" type="button" aria-label="card-trash">
          </button>
          <div className="card__info">
            <h2 className="card__title"></h2>
            <div className="card__column-like">
              <button className="card__like" type="button" aria-label="like-heart">
              </button>
              <div className="card__count">0</div>
            </div>
          </div>
        </div>
      </template>

      </div>
    </div>

  );
}

export default App;
