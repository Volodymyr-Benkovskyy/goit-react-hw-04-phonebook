import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './ContactForm.module.css';

export const ContactForm = ({addContact}) =>  {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

 const handleSubmit = event => {
    event.preventDefault();
    addContact({name, number});
    setName('');
    setNumber('');
    event.target.reset(); 
  }

    return (
      
        <form className={s.formBox} onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            className={s.formInput}
            value={name}
            onChange={handleNameChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label>Number</label>
          <input
            className={s.formInput}
            value={number}
            onChange={handleNameChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={s.formButton} type="submit">
            Add contact
          </button>
        </form>
    );
  }


ContactForm.propTypes = {
  addContact: PropTypes.func,
};
