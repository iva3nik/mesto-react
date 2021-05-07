import React from 'react';

function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  };

  return(
    <div className="card" id={card._id}>
          <img
            src={card.link}
            alt={card.name}
            className="card__element"
            onClick={handleClick}
          />
          <button className="card__trash" type="button" aria-label="card-trash">
          </button>
          <div className="card__info">
            <h2 className="card__title">{card.name}</h2>
            <div className="card__column-like">
              <button className="card__like" type="button" aria-label="like-heart">
              </button>
              <div className="card__count">{card.likes.length}</div>
            </div>
          </div>
        </div>
  )
};

export default Card;
