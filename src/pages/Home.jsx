import React from 'react';

export default function Home() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Find Your Perfect Home</h1>
        <p>Connecting guests with verified homes across Kenya.</p>
      </section>

      {/* Featured Properties */}
      <section className="page-section">
        <h2>Featured Homes</h2>
        <div className="card-grid">
          <div className="card">
            <img src="/src/assets/home1.jpg" alt="Home 1" />
            <div className="card-body">
              <h3>Cozy Apartment in Nairobi</h3>
              <p>2 Beds · 1 Bath · Furnished</p>
              <a href="/browse" className="cta">View Details</a>
            </div>
          </div>

          <div className="card">
            <img src="/src/assets/home2.jpg" alt="Home 2" />
            <div className="card-body">
              <h3>Luxury Villa in Mombasa</h3>
              <p>4 Beds · 3 Baths · Pool</p>
              <a href="/browse" className="cta">View Details</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
