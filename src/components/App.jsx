import { ContactForm, ContactList, Notification, Filter } from './index';
import { Container, FormTitle, ContnactsTitle } from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readContactsFromLocalStorage } from '../redux/contactsSlice';
import { getContacts } from 'redux/selector';

const LS_KEY = 'contact_list';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts);

  useEffect(() => {
    const contactsFromLocalStorage = JSON.parse(localStorage.getItem(LS_KEY));
    if (contactsFromLocalStorage?.length !== 0)
      dispatch(readContactsFromLocalStorage(LS_KEY));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const contactsLength = contacts.length;

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
