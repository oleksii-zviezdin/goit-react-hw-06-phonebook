// import { nanoid } from '@reduxjs/toolkit';
// import { createAction } from '@reduxjs/toolkit';
// import {
//   ADD_CONTACT,
//   DELETE_CONTACT,
//   FILTER_CONTACT,
//   READ_CONTACT_FROM_LOCAL_STORAGE,
// } from './type';

// export const addContact = createAction(ADD_CONTACT, contact => {
//   const { inputName, inputNumber } = contact;
//   return {
//     payload: {
//       id: nanoid(),
//       inputName,
//       inputNumber,
//     },
//   };
// });

// export const deleteContact = createAction(DELETE_CONTACT);

// export const filterContacts = createAction(FILTER_CONTACT);

// export const readContactsFromLocalStorage = createAction(
//   READ_CONTACT_FROM_LOCAL_STORAGE,
//   LS_KEY => {
//     const contactsFromLocalStorage = JSON.parse(localStorage.getItem(LS_KEY));
//     return {
//       payload: contactsFromLocalStorage,
//     };
//   }
// );
