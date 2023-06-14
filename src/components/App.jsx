import { ContactForm, ContactList, Notification, Filter } from './index';
import { Container, FormTitle, ContnactsTitle } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';

export const App = () => {
  const { contacts } = useSelector(getContacts);

  const contactsLength = contacts.length;
  console.log(contactsLength);

  return (
    <Container>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm />
      {contactsLength !== 0 && <Filter />}
      {contactsLength === 0 && (
        <Notification
          message={'This is where your added contacts will be displayed'}
        />
      )}
      {contactsLength !== 0 && (
        <>
          <ContnactsTitle>Contacts</ContnactsTitle>
          <ContactList />
        </>
      )}
    </Container>
  );
};
