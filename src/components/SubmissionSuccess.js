import React from 'react';

const SubmissionSuccess = ({ formData }) => {
  return (
    <div className="container mt-4">
      <h2>Thank you, {formData.name}!</h2>
      <p>Your message has been sent.</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Message:</strong> {formData.message}</p>
    </div>
  );
};

export default SubmissionSuccess;
