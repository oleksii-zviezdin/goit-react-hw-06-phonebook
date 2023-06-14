export const getContacts = state => state.contacts;
console.log(getContacts);
export const getFilter = state => state.filter;
console.log(getFilter);

export const getFilteredContacts = (filter, contacts) => {
  if (!filter) {
    return contacts;
  }
  console.log(filter);
  const normalizedFilter = filter.toLowerCase();
  if (contacts.length !== 0) {
    return contacts.filter(contact =>
      contact.inputName.toLowerCase().includes(normalizedFilter)
    );
  }
};
