import { initialState } from './initialState';

export const rootReducer = (state = initialState, action) => {
  const { payload, type } = action;
  if (type === 'contacts/addContact') {
    // if (payload.length !== 0)
    return {
      contacts: [...state.contacts, payload],
      filter: state.filter,
    };
  } else if (type === 'contacts/deleteContact') {
    return {
      contacts: state.contacts.filter(({ id }) => id !== payload),
      filter: state.filter,
    };
  } else if (type === 'contacts/filterContacts') {
    return {
      contacts: state.contacts,
      filter: payload,
    };
  } else if (type === 'contacts/readContactsFromLocalStorage') {
    return {
      contacts: payload,
      filter: state.filter,
    };
  }
  return state;
};
