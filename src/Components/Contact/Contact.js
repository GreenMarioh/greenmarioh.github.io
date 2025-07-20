import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

     emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID, 
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    formData,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY // This is your Public Key
  )
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setStatus('Message sent successfully!');
       setFormData({ name: '', email: '', message: '' });
    }, (err) => {
       console.log('FAILED...', err);
       setStatus('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} rows="6" onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </section>
  );
};

export default Contact;