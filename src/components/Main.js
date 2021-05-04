import React from 'react';
import './Main.css';
import profileAvatar from '../images/image.jpg';

function Main() {
  return (
    <>
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
    </>
  )
};

export default Main;
