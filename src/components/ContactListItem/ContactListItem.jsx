import { PropTypes } from 'prop-types';
import { ContactItem, RemoveButton } from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getFilter } from 'redux/selector';

export const ContactListItem = ({ id, name, tel }) => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  const hanldeDelete = () => dispatch(deleteContact(id));
  console.log(filterValue);
  return (
    <ContactItem>
      <p>
        {name}: <span>{tel}</span>
      </p>
      <RemoveButton type="button" onClick={hanldeDelete}>
        Revome contact
      </RemoveButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
};
