"use client"

import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Email sent successfully');
      setFormData({ email: '', subject: '', message: '' });  // Reset the form
    } else {
      alert(`Failed to send email: ${data.message}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-mono mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full text-black p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-2  text-black border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className="w-full p-2 text-black  border rounded"
            rows={4}
            required
          />
        </div>
        <button type="submit" className="w-full bg-gray-950 hover:bg-gray-700 text-white p-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
