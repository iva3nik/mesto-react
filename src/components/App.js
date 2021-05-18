import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getDataUser() ,api.getInitialCards()])
      .then(([dataUser ,initialData]) => {
        setCurrentUser(dataUser);
        setCards(initialData);
      })
      .catch(err => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => console.log(err));
  };

  function handleCardDelete(card) {
    const isOwn = card.owner._id === currentUser._id;

    if (isOwn) {
      api.removeCard(card._id)
        .then((newCard) => {
          setCards((state) => state.filter((c) => c._id !== card._id))
        })
        .catch((err) => console.log(err))
    };
  }

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

  function handleUpdateUser(data) {
    api.patchDataUser(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  return (

    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container page__center">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
          <Footer />

          <section className="popups">
            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
            />
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
    </CurrentUserContext.Provider>

  );
}

export default App;
