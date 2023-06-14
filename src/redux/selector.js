export const getContacts = state => state.contacts;
export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = (filter, contacts) => {
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  if (contacts.length !== 0) {
    return contacts.filter(contact =>
      contact.inputName.toLowerCase().includes(normalizedFilter)
    );
  }
};
