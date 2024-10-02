
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_y46lmbo', 'template_otwoufu', formData, 'NlQi0xL0wXRFQnzgM')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMessage('Message sent successfully!');
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' }); // Reset form
        hideAlerts(); // Call the function to hide alerts
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setErrorMessage('Failed to send message. Please try again.');
        setSuccessMessage('');
        hideAlerts(); // Call the function to hide alerts
      });
  };

  const hideAlerts = () => {
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 3000); // Hide alerts after 3 seconds
  };

  return (
    <div className="container mt-5 bg-gradient">
      <h2 className='text-center '>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="BtnStyle">Send Message</button>
      </form>
      {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
    </div>
  );
};

export default ContactForm;