import { nanoid } from '@reduxjs/toolkit';

export const addContact = contact => {
  const { inputName, inputNumber } = contact;
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      inputName,
      inputNumber,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const filterContacts = typeValue => {
  return {
    type: 'contacts/filterContacts',
    payload: typeValue,
  };
};

export const readContactsFromLocalStorage = LS_KEY => {
  const contactsFromLocalStorage = JSON.parse(localStorage.getItem(LS_KEY));
  return {
    type: 'contacts/readContactsFromLocalStorage',
    payload: contactsFromLocalStorage,
  };
};
