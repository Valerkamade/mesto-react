import React, { useState, useEffect } from 'react';
import { api } from '../utils/api'
import Card from "./Card";

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick
}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfoApi(), api.getInitialCardsApi()])
      .then(([user, card]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(card);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <main className="main">
      <section className="profile page__profile">
        <div className="profile__wrapper">
          <div className="profile__name-edit">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__button-edit button"
              type="button"
              aria-label="Изменить аватар"
              onClick={onEditProfile}>
            </button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button className="profile__button-avatar"
          onClick={onEditAvatar}>
          <img className="profile__avatar"
            src={userAvatar}
            alt={userName}
          />
        </button>
        <button className="profile__button-add button"
          type="button"
          aria-label="Добавить место"
          onClick={onAddPlace}>
        </button>
      </section>

      <section className="gallery page__gallery" aria-label="Галерея">
        <ul className="gallery__list">
          {cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} key={card._id} />
          ))}
        </ul>
      </section>
    </main>
  );
}