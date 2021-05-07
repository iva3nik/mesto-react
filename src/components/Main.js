import React from 'react';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace,
  userName, userDescription, userAvatar, cards, onCardClick }) {

  return (
    <>
      <section className="profile page__center">
        <div className="profile__column">
          <img
            src={userAvatar}
            alt="Аватар профиля"
            className="profile__avatar"
          />

          <button
            className="profile__avatar-edit"
            type="button"
            onClick={onEditAvatar}
          >
          </button>

          <div className="profile__info">
            <div className="profile__row">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__button-edit-name"
                type="button"
                aria-label="edit-name"
                onClick={onEditProfile}
              >
              </button>
            </div>
            <p className="profile__text">{userDescription}</p>
          </div>
        </div>

        <button
          className="profile__button"
          type="button" aria-label="add-card"
          onClick={onAddPlace}
        >
        </button>
      </section>

      <section className="elements page__center">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
          ></Card>
        ))}
      </section>
    </>
  )
};

export default Main;
