import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import pinkZebra from '../../assets/pics/pinkZebra.png'

const contactContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '50%',
  width: '100%',
  backgroundColor: '#000000',
  padding: '0% 0% 5% 0%',
  color: "#FFFFFF"
};

const contactTitle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
  margin: 'auto',
  padding: '5% 0%',
  fontSize: '60px',
  color: '#FFFFFF',
  backgroundColor: '#000000'
};

const formContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const formComponent = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
  padding: '5% 0%',
  fontSize: '30px',
  color: '#FFFFFF',
  backgroundColor: '#000000',
};

const formButton = {
  fontFamily: 'obstacle',
  fontSize: '50px',
  color: '#FFFFFF',
  backgroundImage: `url(${pinkZebra})`,
  backgroundSize: 'cover',
  borderRadius: '5em'
}

function ContactForm() {

  const [formState, setFormState] = useState({ name: '', email: '', message: ''});

  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid condition statement
      if (!isValid) {
        setErrorMessage('Your email is invalid!');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    
    if(!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value })
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return(
    <section style={contactContainer}>
      <h1 style={contactTitle}>Contact me</h1>
      <form id="contact-form" style={formContainer}>
        <div style={formComponent}>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div style={formComponent}>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
        </div>
        <div style={formComponent}>
          <label htmlFor="message">Message:</label><br />
          <textarea type="message" defaultValue={message} onBlur={handleChange} rows="5" style={{resize: 'none'}}/>
        </div>
        {errorMessage && (
          <div style={formComponent}>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" onSubmit={handleSubmit} style={formButton}>Let's Connect!</button>
      </form>
    </section>
  )
}

export default ContactForm;