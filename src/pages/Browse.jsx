import React from 'react';

export default function Browse() {
  // Sample properties array
  const properties = [
    { id: 1, title: "Cozy Apartment in Nairobi", img: "/src/assets/home1.jpg", desc: "2 Beds · 1 Bath · Furnished" },
    { id: 2, title: "Luxury Villa in Mombasa", img: "/src/assets/home2.jpg", desc: "4 Beds · 3 Baths · Pool" },
    { id: 3, title: "Modern Studio in Kisumu", img: "/src/assets/home3.jpg", desc: "1 Bed · 1 Bath" },
  ];

  return (
    <div className="page-container">
      <section className="page-hero">
        <h2>Browse Homes</h2>
        <p>Explore our curated list of verified properties across Kenya.</p>
      </section>

      <section className="page-section">
        <div className="card-grid">
          {properties.map((prop) => (
            <div className="card" key={prop.id}>
              <img src={prop.img} alt={prop.title} />
              <div className="card-body">
                <h3>{prop.title}</h3>
                <p>{prop.desc}</p>
                <a href={`/property/${prop.id}`} className="cta">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
