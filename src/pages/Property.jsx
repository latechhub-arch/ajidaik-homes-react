import React from 'react'
import { useParams } from 'react-router-dom'
import properties from '../data/properties.json'
import InquiryForm from '../components/InquiryForm'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Property(){
  const { id } = useParams()
  const p = properties.find(x => x.id === Number(id))
  if(!p) return <div className="container"><h2>Property not found</h2></div>
  return (
    <div className="container">
      <div className="property-hero">
        <div className="property-gallery">
          <img src={p.image} alt={p.name} style={{width:'100%', borderRadius:6}}/>
          <div style={{display:'flex', gap:8, marginTop:8}}>
            <img src="/src/assets/sample_properties/prop2.jpg" style={{width:120,height:80,objectFit:'cover'}}/>
            <img src="/src/assets/sample_properties/prop3.jpg" style={{width:120,height:80,objectFit:'cover'}}/>
            <img src="/src/assets/sample_properties/prop4.jpg" style={{width:120,height:80,objectFit:'cover'}}/>
          </div>
        </div>
        <aside className="property-info">
          <h2>{p.name}</h2>
          <div className="small-note">{p.location} · {p.type} · {p.price}</div>
          <div style={{marginTop:12}}>
            <h4>Amenities</h4>
            <ul><li>Wi-Fi</li><li>Parking</li><li>Kitchen</li><li>24/7 Support</li></ul>
          </div>
          <div style={{marginTop:12}}>
            <h4>Inquire about this property</h4>
            <InquiryForm propertyName={p.name} />
          </div>
        </aside>
      </div>
      <section style={{padding:'24px 0'}}>
        <h3>Other Homes You May Like</h3>
        <div className="card-grid">
          {properties.filter(x=>x.id!==p.id).slice(0,4).map((q,i)=>(
            <div key={q.id} className="card">
              <img src={q.image} alt={q.name} />
              <div className="card-body">
                <h4>{q.name}</h4>
                <div className="small-note">{q.location} · {q.type} · {q.price}</div>
                <p style={{marginTop:8}}><a className="cta" href={`/property/${q.id}`}>View Details</a></p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <WhatsAppButton text={`Hello Ajidaik Homes, I am interested in ${p.name}.`} />
    </div>
  )
}
