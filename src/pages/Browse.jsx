import React from 'react';
import { Link } from 'react-router-dom';
import properties from '../data/properties.json';
import WhatsAppButton from '../components/WhatsAppButton';

export default function BrowseHomes() {
  return (
    <div className="page-container">
      {/* Hero section */}
      <div className="page-hero">
        <h2>Browse Ajidaik Homes</h2>
        <p>Explore our verified short- and long-term homes across Kenya, professionally managed for comfort and trust.</p>
      </div>

      {/* Property grid */}
      <section className="page-section">
        <div className="card-grid">
          {properties.map((property) => (
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

      <WhatsAppButton text="Hello Ajidaik Homes, I am interested in browsing your homes." />
    </div>
  );
}
