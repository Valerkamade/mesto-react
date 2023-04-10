import React from "react";

export default function ImagePopup({card, onClose }) {
  const {isOpen, cardOpen} = card;
  const cardDate = {...cardOpen};
  const className = `popup popup_type_img ${isOpen ? 'popup_opened' : ''}`;

  return (
    <div className={className}>
      <div className="popup__container popup__container_type_img">
        <h2 className="popup__title">{cardDate.name}</h2>
         <img className="popup__photo"
          src={cardDate.link}
          alt={cardDate.name} /> 
        <button className="popup__button-close button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}>
        </button>
      </div>
    </div>
  )
}