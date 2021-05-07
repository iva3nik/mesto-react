import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    card && (
    <div className={`popup popup_view ${card ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <figure className="popup__window">
          <img src={card.link} alt={card.name} className="popup__image" />
          <figcaption className="popup__about">{card.name}</figcaption>
        </figure>
        <button
          className="popup__close-form"
          type="button"
          aria-label="close-view"
          onClick={onClose}
        >
        </button>
      </div>
    </div>
    )
  )
}

export default ImagePopup;
