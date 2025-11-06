import React, { useState } from 'react';

export default function ListYourHome() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', property: '' });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert("Form submitted!"); };

  return (
    <div className="page-container">
      <section className="page-hero">
        <h2>List Your Home</h2>
        <p>Reach thousands of potential guests by listing your property with Ajidaik Homes.</p>
      </section>

      <section className="page-section">
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <textarea name="property" placeholder="Property Description" value={formData.property} onChange={handleChange} rows="4" required />
          <button type="submit" className="cta">Submit Listing</button>
        </form>
      </section>
    </div>
  );
}
