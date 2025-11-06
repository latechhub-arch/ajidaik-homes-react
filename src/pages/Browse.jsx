import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import properties from '../data/properties.json';
import WhatsAppButton from '../components/WhatsAppButton';

export default function BrowseHomes() {
  const [typeFilter, setTypeFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  // Get unique types and locations for dropdowns
  const propertyTypes = Array.from(new Set(properties.map(p => p.type)));
  const propertyLocations = Array.from(new Set(properties.map(p => p.location)));

  // Filtered properties
  const filteredProperties = properties.filter(p => {
    return (typeFilter === '' || p.type === typeFilter) &&
           (locationFilter === '' || p.location === locationFilter);
  });

  return (
    <div className="page-container">
      {/* Hero section */}
      <div className="page-hero browse-hero">
        <div className="browse-hero-content">
          <h2>Browse Ajidaik Homes</h2>
          <p>Explore our verified short- and long-term homes across Kenya, professionally managed for comfort and trust.</p>
        </div>
      </div>

      {/* Filters */}
      <section className="page-section filters-section">
        <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
          <option value="">All Types</option>
          {propertyTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <select value={locationFilter} onChange={e => setLocationFilter(e.target.value)}>
          <option value="">All Locations</option>
          {propertyLocations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>

        <button onClick={() => { setTypeFilter(''); setLocationFilter(''); }} className="reset-btn">
          Reset Filters
        </button>
      </section>

      {/* Property grid */}
      <section className="page-section">
        {filteredProperties.length === 0 ? (
          <p>No properties match your filter criteria.</p>
        ) : (
          <div className="card-grid">
            {filteredProperties.map((property) => (
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
        )}
      </section>

      <WhatsAppButton text="Hello Ajidaik Homes, I am interested in browsing your homes." />
    </div>
  );
}
