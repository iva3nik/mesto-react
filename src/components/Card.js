import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike }) {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__trash ${isOwn ? 'card__trash_active' : ''}`
  );
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like ${isLiked ? 'card__like_active' : ''}`;

  function handleClick() {
    onCardClick(card);
  };

  function handleLikeClick() {
    onCardLike(card);
  }

  return(
    <div className="card" id={card._id}>
          <img
            src={card.link}
            alt={card.name}
            className="card__element"
            onClick={handleClick}
          />
          <button className={cardDeleteButtonClassName} type="button" aria-label="card-trash">
          </button>
          <div className="card__info">
            <h2 className="card__title">{card.name}</h2>
            <div className="card__column-like">
              <button
                className={cardLikeButtonClassName}
                type="button"
                aria-label="like-heart"
                onClick={handleLikeClick}
              >
              </button>
              <div className="card__count">{card.likes.length}</div>
            </div>
          </div>
        </div>
  )
};

export default Card;
