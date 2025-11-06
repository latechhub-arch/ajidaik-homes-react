import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import properties from '../data/properties.json';
import WhatsAppButton from '../components/WhatsAppButton';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const featuredProperties = properties.slice(0, 6); // show more for carousel

  // React Slick settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 700,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
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
      </section>

      {/* Featured Properties Carousel */}
      <section className="page-section">
        <h2 style={{ marginBottom: '24px', color: '#002b7f' }}>Featured Homes</h2>
        <Slider {...sliderSettings}>
          {featuredProperties.map((property) => (
            <div key={property.id} style={{ padding: '0 8px' }}>
              <div className="card" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                <img src={property.image} alt={property.name} style={{ height: '220px', objectFit: 'cover' }} />
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <h4 style={{ margin: '12px 0 8px' }}>{property.name}</h4>
                  <p className="small-note">{property.location} · {property.type} · {property.price}</p>
                  <Link className="cta" to={`/property/${property.id}`} style={{ marginTop: '8px', display: 'inline-block' }}>
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link to="/browse" className="cta">
            Browse All Homes
          </Link>
        </div>
      </section>

      {/* Call to Action: List Your Home */}
      <section 
        className="page-section" 
        style={{ textAlign: 'center', background: '#f2f8f8', padding: '40px 24px', borderRadius: '12px', margin: '40px 0' }}
      >
        <h3 style={{ color: '#002b7f', marginBottom: '16px' }}>Have a Property to List?</h3>
        <p style={{ fontSize: '16px', marginBottom: '24px' }}>
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
