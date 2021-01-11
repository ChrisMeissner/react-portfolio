import React, { useState } from 'react';

const contactContainer = {
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
  alignItems: 'left',
  width: '50%',
  margin: 'auto'
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
  width: '50%',
  margin: 'auto',
}

function ContactForm() {

  const [formState, setFormState] = useState({ name: '', email: '', message: ''});

  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value })
  }

  console.log(formState);

  return(
    <section style={contactContainer}>
      <h1 style={contactTitle}>Contact me</h1>
      <form id="contact-form" style={formContainer}>
        <div style={formComponent}>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onChange={handleChange} name="name" />
        </div>
        <div style={formComponent}>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} onChange={handleChange} name="email" />
        </div>
        <div style={formComponent}>
          <label htmlFor="message">Message:</label><br />
          <textarea type="message" defaultValue={message} onChange={handleChange} rows="5" style={{resize: 'none'}}/>
        </div>
        <button type="submit" style={formButton}>Let's Connect!</button>
      </form>
    </section>
  )
}

export default ContactForm;