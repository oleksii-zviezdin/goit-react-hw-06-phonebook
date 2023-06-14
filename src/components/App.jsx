import { ContactForm, ContactList, Notification, Filter } from './index';
import { Container, FormTitle, ContnactsTitle } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm />
      {contacts.length !== 0 && <Filter />}
      {contacts.length === 0 && (
        <Notification
          message={'This is where your added contacts will be displayed'}
        />
      )}
      {contacts.length !== 0 && (
        <>
          <ContnactsTitle>Contacts</ContnactsTitle>
          <ContactList />
        </>
      )}
    </Container>
  );
};
