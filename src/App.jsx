import React, { Component } from 'react';
import PhonebookForm from './components/Phonebook/PhonebookForm';
import Section from './components/Phonebook/Section';
import ContactList from './components/Phonebook/ContactList';

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <PhonebookForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <ContactList contacts={contacts} />
        </Section>
      </>
    );
  }
}

export default App;
