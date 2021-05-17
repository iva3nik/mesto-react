import React from 'react';
import Card from './Card';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike }) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <section className="profile page__center">
        <div className="profile__column">
          <img
            src={currentUser.avatar}
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
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__button-edit-name"
                type="button"
                aria-label="edit-name"
                onClick={onEditProfile}
              >
              </button>
            </div>
            <p className="profile__text">{currentUser.about}</p>
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
            onCardLike={onCardLike}
          ></Card>
        ))}
      </section>
    </>
  )
};

export default Main;
