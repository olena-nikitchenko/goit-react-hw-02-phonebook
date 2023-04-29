import React from 'react';
import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

const ContactList = ({ contacts }) => (
  <ul className={css.ContactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.ContactListItem}>
        {name}: {number}
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
