import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function ConfirmationPopup({ isOpen, onClose, onConfirm }) {
  function handleSubmit(evt) {
    evt.preventDefault();

    onConfirm();
  }

  return (
    <PopupWithForm
      title='Вы уверены?'
      buttonText='Да'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}