import React from 'react';
import headerLogo from './images/vector.svg';
import profileAvatar from './images/image.jpg';
import popupWindow from './images/elbrus.jpg';
import cardElement from './images/kamchatka.jpg';

function App() {
  return (
    
    <div className="page">
      <div className="page__container page__center">
        <header className="header page__center">
            <img
              src={headerLogo}
              alt="Лого Место России"
              className="header__logo"
            />
        </header>
  
        <main className="content">
        <section className="profile page__center">
          <div className="profile__column">
            <img
              src={profileAvatar}
              alt="Аватар профиля"
              className="profile__avatar"
            />
            <button className="profile__avatar-edit" type="button"></button>
            <div className="profile__info">
              <div className="profile__row">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button
                  className="profile__button-edit-name"
                  type="button"
                  aria-label="edit-name"
                >
                </button>
              </div>
              <p className="profile__text">Исследователь океана</p>
            </div>
          </div>
          <button className="profile__button" type="button" aria-label="add-card">
          </button>
        </section>
  
        <section className="elements page__center">
        </section>
      </main>
  
      <footer className="footer page__center">
        <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>
  
      <section className="popups">
        <div className="popup popup_edit-profile">
          <div className="popup__container popup__container_form">
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__edit-profile" name="form-about-profile" novalidate>
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
              <button className="popup__save" type="submit">Сохранить</button>
            </form>
            <button className="popup__close-form" type="button" aria-label="close-form">
            </button>
          </div>
        </div>
  
        <div className="popup popup_add-card">
          <div className="popup__container popup__container_form">
            <h2 className="popup__title">Новое место</h2>
            <form className="popup__edit-profile" name="form-about-profile" novalidate>
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
              <button className="popup__save" type="submit">Создать</button>
            </form>
            <button className="popup__close-form" type="button" aria-label="close-form">
            </button>
          </div>
        </div>
  
        <div className="popup popup_confirm">
          <div className="popup__container popup__container_form">
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="popup__edit-profile" name="form-about-profile" novalidate>
              <button className="popup__save popup__save_type_confirm" type="submit">Да</button>
            </form>
            <button className="popup__close-form" type="button" aria-label="close-form">
            </button>
          </div>
        </div>
  
        <div className="popup popup_update-avatar">
          <div className="popup__container popup__container_form">
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__edit-profile" name="form-about-profile" novalidate>
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
              <button className="popup__save" type="submit">Сохранить</button>
            </form>
            <button className="popup__close-form" type="button" aria-label="close-form">
            </button>
          </div>
        </div>
  
        <div className="popup popup_view">
            <div className="popup__container">
              <figure className="popup__window">
                <img src={popupWindow} alt="Домбай" className="popup__image" />
                <figcaption className="popup__about">Домбай</figcaption>
              </figure>
              <button className="popup__close-form" type="button" aria-label="close-view">
              </button>
            </div>
        </div>
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
