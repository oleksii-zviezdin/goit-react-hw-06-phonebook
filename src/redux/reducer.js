import { contactsReducer } from './contactsSlice';

export const reducer = {
  contacts: contactsReducer,
};

// import { createReducer } from '@reduxjs/toolkit';
// import { initialState } from './initialState';
// import {
//   ADD_CONTACT,
//   DELETE_CONTACT,
//   FILTER_CONTACT,
//   READ_CONTACT_FROM_LOCAL_STORAGE,
// } from './type';
// import {
//   addContact,
//   deleteContact,
//   filterContacts,
//   readContactsFromLocalStorage,
// } from './actions';

// ---NEW VERTION createReducer WITH use builder and Immer---
// export const rootReducer = createReducer(initialState, builder => {
//   builder
//     .addCase(addContact, (state, { payload }) => {
//       state.contacts.push(payload);
//     })
//     .addCase(deleteContact, (state, { payload }) => {
//       state.contacts = state.contacts.filter(({ id }) => id !== payload);
//     })
//     .addCase(filterContacts, (state, { payload }) => {
//       state.filter = payload;
//     })
//     .addCase(readContactsFromLocalStorage, (state, { payload }) => {
//       state.contacts = payload;
//     });
// });

// ---NEW VERTION createReducer WITH use builder WITHUOT Immer---
// export const rootReducer = createReducer(initialState, builder => {
//   builder
//     .addCase(addContact, (state, action) => {
//       return {
//         contacts: [...state.contacts, action.payload],
//         filter: state.filter,
//       };
//     })
//     .addCase(deleteContact, (state, action) => {
//       return {
//         contacts: state.contacts.filter(({ id }) => id !== action.payload),
//         filter: state.filter,
//       };
//     })
//     .addCase(filterContacts, (state, action) => {
//       return {
//         contacts: state.contacts,
//         filter: action.payload,
//       };
//     })
//     .addCase(readContactsFromLocalStorage, (state, action) => {
//       return {
//         contacts: action.payload,
//         filter: state.filter,
//       };
//     });
// });

// ***

// ---OLD VERTION createReducer---
// export const rootReducer = createReducer(initialState, {
//   [addContact]: (state, action) => {
//     return {
//       contacts: [...state.contacts, action.payload],
//       filter: state.filter,
//     };
//   },
//   [deleteContact]: (state, action) => {
//     return {
//       contacts: state.contacts.filter(({ id }) => id !== action.payload),
//       filter: state.filter,
//     };
//   },
//   [filterContacts]: (state, action) => {
//     return {
//       contacts: state.contacts,
//       filter: action.payload,
//     };
//   },
//   [readContactsFromLocalStorage]: (state, action) => {
//     return {
//       contacts: action.payload,
//       filter: state.filter,
//     };
//   },
// });

// export const rootReducer = (state = initialState, action) => {
//   const { payload, type } = action;
//   if (type === ADD_CONTACT) {
//     return {
//       contacts: [...state.contacts, payload],
//       filter: state.filter,
//     };
//   } else if (type === DELETE_CONTACT) {
//     return {
//       contacts: state.contacts.filter(({ id }) => id !== payload),
//       filter: state.filter,
//     };
//   } else if (type === FILTER_CONTACT) {
//     return {
//       contacts: state.contacts,
//       filter: payload,
//     };
//   } else if (type === READ_CONTACT_FROM_LOCAL_STORAGE) {
//     return {
//       contacts: payload,
//       filter: state.filter,
//     };
//   }
//   return state;
// };
