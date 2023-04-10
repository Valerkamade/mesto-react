import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWhithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ isOpen: false });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ ...selectedCard, isOpen: false });
  }

  function handleCardClick(card) {
    setSelectedCard(selectedCard => (
      { ...selectedCard, isOpen: !selectedCard.isOpen, cardOpen: card }
    ));

  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />
      <Footer />
      <PopupWhithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <label className="popup__label">
          <input className="popup__input popup__input_type_name"
            type="text"
            name="name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required />
          <span className="popup__error name-error">
          </span>
        </label>

        <label className="popup__label">
          <input className="popup__input popup__input_type_job"
            type="text"
            name="about"
            placeholder="Вид деятельности"
            minLength="2"
            maxLength="200"
            required />
          <span className="popup__error about-error">
          </span>
        </label>
      </PopupWhithForm>

      <PopupWhithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__label">
          <input className="popup__input popup__input_type_title"
            type="text"
            name="name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required />
          <span className="popup__error name-error">
          </span>
        </label>

        <label className="popup__label">
          <input className="popup__input popup__input_type_link"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required />
          <span className="popup__error link-error">
          </span>
        </label>
      </PopupWhithForm>

      <PopupWhithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="popup__label">
          <input className="popup__input popup__input_type_avatar"
            type="url"
            name="avatar"
            placeholder="Ссылка на аватар"
            required />
          <span className="popup__error avatar-error">
          </span>
        </label>
      </PopupWhithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}>

      </ImagePopup>

      <div className="popup popup_type_delete">
        <div className="popup__container">
          <h2 className="popup__heading popup__heading_type_delete">Вы уверены?</h2>
          <button className="popup__button-save button"
            type="submit">
            Да
          </button>
          <button className="popup__button-close button"
            type="button"
            aria-label="Закрыть">
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
