import PropTypes from 'prop-types';
import { ListContacts, ItemContact, DelBtn } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {

  return (
    <ListContacts>
      {contacts.map(({ id, name, number }) => (
        <ItemContact key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <DelBtn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </DelBtn>
        </ItemContact>
      ))}
    </ListContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};