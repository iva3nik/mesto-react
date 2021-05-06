import React from 'react';
import popupWindow from '../images/elbrus.jpg';

function ImagePopup({ isOpen }) {
  return (
    <div className={`popup popup_view ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <figure className="popup__window">
          <img src={popupWindow} alt="Домбай" className="popup__image" />
          <figcaption className="popup__about">Домбай</figcaption>
        </figure>
        <button className="popup__close-form" type="button" aria-label="close-view">
        </button>
      </div>
    </div>
  )
}

export default ImagePopup;
