import React, { useState } from 'react';
import SubmissionSuccess from './SubmissionSuccess'; // Add this line

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <SubmissionSuccess formData={formData} />;
  }

  return (
    <div className="container mt-4">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', margin: '10px 0' }}
        />
        
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', margin: '10px 0' }}
        />
        
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', margin: '10px 0' }}
        ></textarea>
        
        <button type="submit" style={{ padding: '10px 15px' }}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
