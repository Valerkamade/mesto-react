import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({isOpen,onClose, onAddPlace}) {
  const [value, setValue] = useState({});

  function handleChange(evt) {
    setValue({ ...value, [evt.target.name]: evt.target.value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace(value);
    setValue({[evt.target.name]: '' });
  }

  return (
    <PopupWithForm
          name='place'
          title='Новое место'
          buttonText='Создать'
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
        >
          <label className='popup__label'>
            <input
              className='popup__input popup__input_type_title'
              type='text'
              name='name'
              placeholder='Название'
              minLength='2'
              maxLength='30'
              required
              value={value.name ?? ''}
              onChange={handleChange}
            />
            <span className='popup__error name-error'></span>
          </label>

          <label className='popup__label'>
            <input
              className='popup__input popup__input_type_link'
              type='url'
              name='link'
              placeholder='Ссылка на картинку'
              required
              value={value.link ?? ''}
              onChange={handleChange}
            />
            <span className='popup__error link-error'></span>
          </label>
        </PopupWithForm>
  )
}