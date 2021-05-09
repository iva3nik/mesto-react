import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

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
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  };

  return (

    <div className="page">
      <div className="page__container page__center">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
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
                name="name"
                placeholder="Имя профиля"
                minLength="2"
                maxLength="40"
                required
              />
              <span className="popup__input-error name-input-error"></span>
            </label>
            <label className="popup__field">
              <input
                type="text"
                id="about-input"
                className="popup__item-profile popup__item-profile_input_job"
                name="about"
                placeholder="О профиле"
                minLength="2"
                maxLength="200"
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
                defaultValue=""
                name="name"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span className="popup__input-error name-place-input-error"></span>
            </label>
            <label className="popup__field">
              <input
                type="url"
                id="url-input"
                className="popup__item-profile popup__item-profile_input_job"
                defaultValue=""
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
                defaultValue=""
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__input-error url-input-avatar-error"></span>
            </label>
          </PopupWithForm>
          <ImagePopup
            onClose={closeAllPopups}
            card={selectedCard}
          ></ImagePopup>
        </section>
      </div>
    </div>

  );
}

export default App;
