import { Form, Span, AddButton, Label, Input } from './ContactForm.styled';
import { useRef, useState } from 'react';
import { addContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';

export const ContactForm = () => {
  const [inputName, setTypeName] = useState('');
  const [inputNumber, setTypetNumber] = useState('');
  const dispatch = useDispatch();

  const formReff = useRef(null);
  const  contacts  = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setTypeName(value);
    } else if (name === 'number') {
      setTypetNumber(value);
    }
  };

  const handleAddContactSubmit = e => {
    e.preventDefault();

    const isIncludeContactName = contacts.find(
      contact => contact.inputName === inputName
    );
    const isIncludeContactNumber = contacts.find(
      contact => contact.inputNumber === inputNumber
    );

    if (isIncludeContactName) {
      return alert(`"${inputName}" is already in contacts`);
    } else if (isIncludeContactNumber) {
      return alert(`"${inputNumber}" is already in contacts`);
    } else {
      dispatch(addContact({ inputName, inputNumber }));
      setTypeName('');
      setTypetNumber('');
    }
  };

  return (
    <Form ref={formReff} onSubmit={handleAddContactSubmit}>
      <Label>
        <Span>Name</Span>
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          value={inputName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <Span>Number</Span>
        <Input
          onChange={handleChange}
          type="tel"
          name="number"
          value={inputNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
};
