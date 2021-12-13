import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import * as storage from '../../services/LocalStorage';

class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = storage.get('contacts');
    this.setState({ contacts: savedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      storage.save('contacts', this.state.contacts);
    }
  }

  addNewContact = newContact => {
    const isDuplicate = this.state.contacts.some(
      contact => contact.name === newContact.name,
    );
    if (isDuplicate) {
      return alert(`${newContact.name} is already in contacts`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDelete = idToDelete => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idToDelete),
    }));
  };

  getFilterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  render() {
    const filterContacts = this.getFilterContacts();
    return (
      <div>
        <div>
          <h1>Phonebook</h1>
          <ContactForm addNewContact={this.addNewContact} />
          <h2>Contacts</h2>
          <Filter filter={this.state.filter} handleChange={this.handleChange} />
        </div>
        {filterContacts.length > 0 && (
          <ContactList
            filterContacts={filterContacts}
            handleDelete={this.handleDelete}
          />
        )}
      </div>
    );
  }
}

export default Phonebook;
