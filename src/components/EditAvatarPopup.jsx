import React, { useContext, useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = useContext(CurrentUserContext);
  const inputRef = useRef(0);

  useEffect(() => {
    inputRef.current.value = currentUser.avatar;
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name='avatar'
      title='Обновить аватар'
      buttonText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className='popup__label'>
        <input
          className='popup__input popup__input_type_avatar'
          type='url'
          name='avatar'
          placeholder='Ссылка на аватар'
          required
          ref={inputRef}
        />
        <span className='popup__error avatar-error'></span>
      </label>
    </PopupWithForm>
  );
}
