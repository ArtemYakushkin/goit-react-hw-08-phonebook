import PropTypes from 'prop-types';
// import { ContactContainer, ContactEl, ContactBtn } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  //   console.log(contacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>- {name}: </span>
          <span>{number}</span>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};