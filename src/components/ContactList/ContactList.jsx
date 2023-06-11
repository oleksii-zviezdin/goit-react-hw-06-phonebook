import { ContactListItem } from '../index';
import { ContnactsList } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);

  const filter = useSelector(state => state.filter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts.length !== 0) {
      return contacts.filter(
        ({ inputName }) =>
          inputName && inputName.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ContnactsList>
      {filteredContacts.map(({ id }) => {
        return <ContactListItem key={id} id={id} />;
      })}
    </ContnactsList>
  );
};
