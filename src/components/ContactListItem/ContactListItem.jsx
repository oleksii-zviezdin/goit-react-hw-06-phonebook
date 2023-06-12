import { PropTypes } from 'prop-types';
import { ContactItem, RemoveButton } from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactListItem = ({ id }) => {
  const { inputName, inputNumber } = useSelector(state =>
    state.contacts.find(contact => id === contact.id)
  );
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
