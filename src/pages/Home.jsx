// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import properties from '../data/properties.json';
import WhatsAppButton from '../components/WhatsAppButton';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const featuredProperties = properties.slice(0, 6); // more for carousel

  // React Slick settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 700, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          borderRadius: '12px',
          margin: '20px 0',
          overflow: 'hidden',
          backgroundImage: `url('/src/assets/homes.PNG')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 43, 127, 0.25)',
          }}
        />
        {/* Hero Content */}
        <div style={{ position: 'relative', textAlign: 'center', color: 'white', zIndex: 1, padding: '0 20px' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '12px' }}>Find Your Perfect Home with Ajidaik Homes</h1>
          <p style={{ fontSize: '20px', marginBottom: '20px' }}>
            Discover professionally managed, verified homes across Kenya.
          </p>
          <Link
            to="/browse"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              borderRadius: '8px',
              backgroundColor: '#d4af37',
              color: 'white',
              fontWeight: 'bold',
              textDecoration: 'none'
            }}
          >
            Browse Homes
          </Link>
        </div>
      </section>

      {/* Featured Properties Carousel */}
      <section style={{ margin: '40px 0' }}>
        <h2 style={{ marginBottom: '24px', color: '#002b7f', textAlign: 'center' }}>Featured Homes</h2>
        <Slider {...sliderSettings}>
          {featuredProperties.map(property => (
            <div key={property.id} style={{ padding: '0 8px' }}>
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                background: 'white'
              }}>
                <img
                  src={property.image}
                  alt={property.name}
                  style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                />
                <div style={{ padding: '16px', textAlign: 'center' }}>
                  <h4 style={{ margin: '12px 0 8px' }}>{property.name}</h4>
                  <p style={{ fontSize: '14px', color: '#555', marginBottom: '12px' }}>
                    {property.location} · {property.type} · {property.price}
                  </p>
                  <Link
                    to={`/property/${property.id}`}
                    style={{
                      display: 'inline-block',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: '2px solid #d4af37',
                      color: '#d4af37',
                      fontWeight: 'bold',
                      textDecoration: 'none'
                    }}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link
            to="/browse"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              borderRadius: '8px',
              backgroundColor: '#002b7f',
              color: 'white',
              fontWeight: 'bold',
              textDecoration: 'none'
            }}
          >
            Browse All Homes
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        textAlign: 'center',
        background: '#f2f8f8',
        padding: '40px 24px',
        borderRadius: '12px',
        margin: '40px 0'
      }}>
        <h3 style={{ color: '#002b7f', marginBottom: '16px' }}>Have a Property to List?</h3>
        <p style={{ fontSize: '16px', marginBottom: '24px' }}>
          Join Ajidaik Homes and reach thousands of potential guests across Kenya.
        </p>
        <Link
          to="/list-your-home"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            borderRadius: '8px',
            backgroundColor: '#d4af37',
            color: 'white',
            fontWeight: 'bold',
            textDecoration: 'none'
          }}
        >
          List Your Home
        </Link>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton text="Hello Ajidaik Homes, I am interested in learning more about your homes." />
    </div>
  );
}
