import { getContacts, getFilter } from 'redux/selector';
import { ContactListItem } from '../index';
import { ContnactsList } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selector';
export const ContactList = () => {
  const { contacts } = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilter);
  console.log(filter);

  const filteredContacts = getFilteredContacts(filter, contacts);
  console.log(filteredContacts);

  return (
    <ContnactsList>
      {filteredContacts &&
        filteredContacts.map(({ id }) => {
          return <ContactListItem key={id} id={id} />;
        })}
    </ContnactsList>
  );
};
