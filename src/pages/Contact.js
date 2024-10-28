import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all fields.');
      return;
    }

    console.log('Form submitted:', formData);
    setSuccess('Your message has been sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Please reach out to us for any inquiries.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="contact-button">Send</button>
      </form>
      {error && <p className="contact-error">{error}</p>}
      {success && <p className="contact-success">{success}</p>}
    </div>
  );
};

export default Contact;
