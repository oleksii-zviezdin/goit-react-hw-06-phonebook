import { PropTypes } from 'prop-types';
import { ContactItem, RemoveButton } from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts } from 'redux/selector';

export const ContactListItem = ({ id }) => {
  // const { inputName, inputNumber } = useSelector(getContacts);
  const { contacts } = useSelector(getContacts);
  console.log(contacts);
  const contactByID = contacts.filter(contact => id === contact.id);
  console.log(contactByID);
  const { inputName, inputNumber } = contactByID;
  console.log(inputName);
  console.log(inputNumber);
  const dispatch = useDispatch();
  const hanldeDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem>
      <p>
        {inputName}: <span>{inputNumber}</span>
      </p>
      <RemoveButton type="button" onClick={hanldeDelete}>
        Revome contact
      </RemoveButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
};
