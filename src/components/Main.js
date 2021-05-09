import React from 'react';
import Card from './Card';
import api from '../utils/api';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  const [cards, setCards] = React.useState([]);
  const [userName, setUserName] =React.useState("");
  const [userDescription, setUserDescription] =React.useState("");
  const [userAvatar, setUserAvatar] =React.useState("");

  React.useEffect(() => {
    Promise.all([api.getDataUser(), api.getInitialCards()])
      .then(([dataUser, initialData]) => {
        setUserName(dataUser.name);
        setUserDescription(dataUser.about);
        setUserAvatar(dataUser.avatar);
        setCards(initialData);
      })
      .catch(err => console.log(err));
  }, [])

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
