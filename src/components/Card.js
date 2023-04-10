import React from "react";

export default function Card({ card, onCardClick }) {
  // const classNameLike = isLiked(card.likes) ? 'gallery__button-like_active ' : '';

  // function isLiked(likes) {
  //   return likes.some((like) => {
  //     return like._id === '5166ef7eeca61821d9341f48';
  //   })
  // }

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="gallery__item">
      <button className="gallery__button-trash button"></button>
      <div className="gallery__info">
        <h2 className="gallery__title">{card.name}</h2>
        <div className="gallery__like-wrapper">
          {/* <button className={`gallery__button-like button ${classNameLike}`}> */}
          <button className="gallery__button-like button">
          </button>
          <span className="gallery__likes-count">{card.likes.length}</span>
        </div>
      </div>
      <img className="gallery__photo"
        src={card.link}
        alt={card.name}
        // style={{ backgroundImage: `url(${card.link})` }}
        onClick={handleClick}
      />
    </li>
  )
}

