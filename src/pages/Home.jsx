import React from 'react';
import { Link } from 'react-router-dom';
import properties from '../data/properties.json';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  // Show first 4 properties as featured
  const featuredProperties = properties.slice(0, 4);

  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="hero">
        <h1>Find Your Perfect Home with Ajidaik Homes</h1>
        <p style={{ fontSize: '20px', marginTop: '12px' }}>
          Discover professionally managed, verified homes across Kenya.
        </p>
        <Link 
          to="/browse" 
          className="cta" 
          style={{ marginTop: '20px', display: 'inline-block' }}
        >
          Browse Homes
        </Link>
      </div>

      {/* Featured Properties */}
      <section className="page-section">
        <h2 style={{ marginBottom: '24px', color: '#002b7f' }}>Featured Homes</h2>
        <div className="card-grid">
          {featuredProperties.map((property) => (
            <div key={property.id} className="card">
              <img src={property.image} alt={property.name} />
              <div className="card-body">
                <h4>{property.name}</h4>
                <p className="small-note">{property.location} · {property.type} · {property.price}</p>
                <Link className="cta" to={`/property/${property.id}`}>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="page-section" style={{ textAlign: 'center', background: '#f2f8f8' }}>
        <h3>Have a Property to List?</h3>
        <p style={{ fontSize: '16px', marginBottom: '16px' }}>
          Join Ajidaik Homes and reach thousands of potential guests across Kenya.
        </p>
        <Link to="/list-your-home" className="cta">
          List Your Home
        </Link>
      </section>

      <WhatsAppButton text="Hello Ajidaik Homes, I am interested in learning more about your homes." />
    </div>
  );
}
