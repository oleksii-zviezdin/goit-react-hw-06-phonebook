import { PropTypes } from 'prop-types';
import { ContactItem, RemoveButton } from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';

export const ContactListItem = ({ id }) => {
  const contact = useSelector(state =>
    state.contacts.find(contact => id === contact.id)
  );
  const dispatch = useDispatch();
  const hanldeDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem>
      <p>
        {contact.inputName}: <span>{contact.inputNumber}</span>
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
