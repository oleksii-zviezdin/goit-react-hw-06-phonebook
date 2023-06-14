export const getContacts = state => state.contacts;
console.log(getContacts);
export const getFilter = state => state.filter;
console.log(getFilter);

export const getFilteredContacts = (filter, contacts) => {
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  if (contacts.length !== 0)
    contacts.filter(contact =>
      contact?.inputName.toLowerCase().includes(normalizedFilter)
    );
  //     {
  //     return setContacts(
  //       contacts.filter(contact =>
  //         contact?.inputName.toLowerCase().includes(normalizedFilter)
  //       )
  //     );
  //   }
};
