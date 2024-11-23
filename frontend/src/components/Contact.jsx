import React from 'react'
import '../styles/Contact.css'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section id='contact' className='contact-container'>
      <h1 className='contact-title'>Get in Touch!</h1>
      <p>I'd love to hear from you! Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out.</p>
      <p>You can reach me directly at:</p>
      <div className='contact-data'>
        <a href='mailto:nicoding9@gmail.com' className='contact-link' target='_blank' rel='noopener noreferrer'>
          <i className="fa-regular fa-envelope fa-xl"></i> nicoding89@gmail.com
        </a>
        <a href='https://www.linkedin.com/in/nicolas-labarca-sierra/' className='contact-link' target='_blank' rel='noopener noreferrer'>
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </a>
        <a href='https://github.com/Nicoding-89' className='contact-link' target='_blank' rel='noopener noreferrer'>
          <i className="fa-brands fa-github fa-xl"></i>
        </a>
      </div>
      <div className='form-container'>
        <p>...Or, you can fill out the following form:</p>
        <ContactForm />
      </div>      
      <p>I look forward to connecting with you!</p>
    </section>
  )
}

export default Contact
