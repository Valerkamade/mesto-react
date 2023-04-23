import React from 'react';
// import React, {useState} from 'react';

export default function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose,
  buttonText,
  onSubmit,
}) {
  const className = `popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`;
// const [error, setError] = useState();

  return (
    <div className={className}>
      <div className='popup__container'>
        <h2 className='popup__heading'>{title}</h2>
        <form
          className={`popup__form popup__form_type_${name}`}
          method='post'
          name={name}
          autoComplete='off'
          noValidate
          onSubmit={onSubmit}
        >
          {children}
          <button className='popup__button-save button' type='submit' >
            {buttonText}
          </button>
        </form>
        <button
          className='popup__button-close button'
          type='button'
          aria-label='Закрыть'
          onClick={onClose}
        />
      </div>
    </div>
  );
}
