import React, {useState} from 'react'
import properties from '../data/properties.json'
import PropertyCard from '../components/PropertyCard'

export default function Browse(){
  const [loc, setLoc] = useState('All')
  const [type, setType] = useState('Any')
  const filtered = properties.filter(p => (loc==='All' || p.location.includes(loc)) && (type==='Any' || p.type===type))
  const locations = Array.from(new Set(properties.map(p=>p.location.split(',')[0])))
  return (
    <div className="container">
      <h2>Browse Homes</h2>
      <div style={{display:'flex', gap:12, marginBottom:12}}>
        <select onChange={e=>setLoc(e.target.value)}><option value="All">All locations</option>{locations.map(l=> <option key={l} value={l}>{l}</option>)}</select>
        <select onChange={e=>setType(e.target.value)}><option value="Any">Any stay type</option><option value="Short Stay">Short Stay</option><option value="Long Stay">Long Stay</option></select>
      </div>
      <div className="card-grid">
        {filtered.map((p,i)=> <PropertyCard key={p.id} p={p} index={i} />)}
      </div>
    </div>
  )
}
