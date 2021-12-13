import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import './ContactForm.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewContact({
      name: this.state.name,
      number: this.state.number,
      id: nanoid(10),
    });
    this.reset();
  };

  reset = () => this.setState({ name: '', number: '' });

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ContactForm">
        <div className="ContactForm__div">
          <label className="ContactForm__form__label" htmlFor="text">
            Contact{' '}
          </label>
          <input
            className="ContactForm__form__input"
            label="last"
            type="text"
            name="name"
            id="text"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </div>
        <div className="ContactForm__div">
          <label className="ContactForm__form__label" htmlFor="tel">
            Phone Number{' '}
          </label>
          <input
            className="ContactForm__form__input"
            type="tel"
            name="number"
            id="tel"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </div>
        <button className="ContactForm__form__btn" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {};

export default ContactForm;
