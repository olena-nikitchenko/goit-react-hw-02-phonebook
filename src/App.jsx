import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhonebookForm from './components/Phonebook/PhonebookForm';
import Section from './components/Phonebook/Section';
import ContactList from './components/Phonebook/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  // state = {
  //   contacts: [],
  // };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleFilterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <Section title="Phonebook">
          <PhonebookForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <input
            type="text"
            placeholder="Search contacts"
            value={filter}
            onChange={this.handleFilterChange}
          />
          <ContactList contacts={filteredContacts} />
        </Section>
      </>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default App;
