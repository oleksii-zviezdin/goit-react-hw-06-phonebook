import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
// import { contactsReducer } from './contactsSlice';

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
      prepare: contact => {
        const { inputName, inputNumber } = contact;
        return {
          payload: {
            id: nanoid(),
            inputName,
            inputNumber,
          },
        };
      },
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
    //   readContactsFromLocalStorage: {
    //     reducer: (state, { payload }) => {
    //       state.contacts = payload;
    //     },
    //     prepare: LS_KEY => {
    //       const contactsFromLocalStorage = JSON.parse(
    //         localStorage.getItem(LS_KEY)
    //       );
    //       return {
    //         payload: contactsFromLocalStorage,
    //       };
    //     },
    //   },
  },
});

export const {
  addContact,
  deleteContact,
  filterContacts,
  readContactsFromLocalStorage,
} = contactsSlice.actions;

const contactsReducer = contactsSlice.reducer;

export const persistedReducer = persistReducer(persistConfig, contactsReducer);

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact: {
//       reducer: (state, action) => {
//         return {
//           contacts: [...state.contacts, action.payload],
//           filter: state.filter,
//         };
//       },
//       prepare: contact => {
//         const { inputName, inputNumber } = contact;
//         return {
//           payload: {
//             id: nanoid(),
//             inputName,
//             inputNumber,
//           },
//         };
//       },
//     },
//     deleteContact: (state, action) => {
//       return {
//         contacts: state.contacts.filter(({ id }) => id !== action.payload),
//         filter: state.filter,
//       };
//     },
//     filterContacts: (state, action) => {
//       return {
//         contacts: state.contacts,
//         filter: action.payload,
//       };
//     },
//     readContactsFromLocalStorage: {
//       reducer: (state, action) => {
//         return {
//           contacts: action.payload,
//           filter: state.filter,
//         };
//       },
//       prepare: LS_KEY => {
//         const contactsFromLocalStorage = JSON.parse(
//           localStorage.getItem(LS_KEY)
//         );
//         return {
//           payload: contactsFromLocalStorage,
//         };
//       },
//     },
//   },
// });
