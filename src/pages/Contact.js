import React from 'react';
import ContactForm from '../components/Form';
import Arrow from '../img/fleche-contact.svg';

function Contact() {
  return (
    <div className='contact-us'>
      <h1 className="contactTitle"> On ne mord pas, promis</h1>
      <p className='contact'>contact@</p>
      <p className='doo'>dooweb.agency</p>
      <div className='arrowToForm'>
        <img src={Arrow} alt="Flèche"/>
      </div>
    <ContactForm />
    </div>
  )
}

export default Contact