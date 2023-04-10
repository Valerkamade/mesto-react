import React from "react";
import { api } from '../utils/api'
import Cards from "./Cards";

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick
}) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfoApi(), api.getInitialCardsApi()])
      .then(([promUser, promCard]) => {
        setUserName(promUser.name);
        setUserDescription(promUser.about);
        setUserAvatar(promUser.avatar);
        setCards(promCard);
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
          // style={{ backgroundImage: `url(${userAvatar})` }} 
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
          {cards.map((card, i) => (
            <Cards card={card} onCardClick={onCardClick} key={i} />
          ))}
        </ul>
      </section>
    </main>
  );
}