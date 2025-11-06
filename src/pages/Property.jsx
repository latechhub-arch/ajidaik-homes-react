// src/pages/Property.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import properties from '../data/properties.json'
import InquiryForm from '../components/InquiryForm'
import WhatsAppButton from '../components/WhatsAppButton'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Property() {
  const { id } = useParams()
  const property = properties.find((x) => x.id === Number(id))

  if (!property) {
    return (
      <div className="page-container">
        <div className="page-hero">
          <h2>Property not found</h2>
        </div>
      </div>
    )
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <div className="page-container">
      <div className="page-hero">
        <h2>{property.name}</h2>
        <p className="small-note">{property.location} · {property.type} · {property.price}</p>
      </div>

      <div className="property-hero">
        <div className="property-gallery">
          <Slider {...sliderSettings}>
            <img src={property.image} alt={property.name} className="carousel-image" />
            <img src="/src/assets/sample_properties/prop2.jpg" alt="Sample" className="carousel-image" />
            <img src="/src/assets/sample_properties/prop3.jpg" alt="Sample" className="carousel-image" />
            <img src="/src/assets/sample_properties/prop4.jpg" alt="Sample" className="carousel-image" />
          </Slider>
        </div>

        <aside className="property-info page-section">
          <h3>Property Details</h3>
          <p className="small-note">{property.location} · {property.type} · {property.price}</p>

          <div style={{ marginTop: 16 }}>
            <h4>Amenities</h4>
            <ul>
              <li>Wi-Fi</li>
              <li>Parking</li>
              <li>Kitchen</li>
              <li>24/7 Support</li>
            </ul>
          </div>

          <div style={{ marginTop: 16 }}>
            <h4>Inquire About This Property</h4>
            <InquiryForm propertyName={property.name} />
          </div>
        </aside>
      </div>

      <section className="page-section">
        <h3>Other Homes You May Like</h3>
        <div className="card-grid">
          {properties
            .filter((x) => x.id !== property.id)
            .slice(0, 4)
            .map((p) => (
              <div key={p.id} className="card">
                <img src={p.image} alt={p.name} />
                <div className="card-body">
                  <h4>{p.name}</h4>
                  <p className="small-note">{p.location} · {p.type} · {p.price}</p>
                  <Link className="cta" to={`/property/${p.id}`}>
                    View Details
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>

      <WhatsAppButton text={`Hello Ajidaik Homes, I am interested in ${property.name}.`} />
    </div>
  )
}
