import React from 'react'
import properties from '../data/properties.json'
import PropertyCard from '../components/PropertyCard'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <>
      <section className="hero">
        <div className="container">
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} style={{fontSize:36, marginBottom:8}}>Find Your Perfect Stay — Short or Long Term Homes Across Kenya</motion.h1>
          <div className="search" style={{display:'flex', gap:8}}>
            <input placeholder="Location (e.g., Mombasa)" style={{flex:1,padding:10,border:'1px solid #ddd',borderRadius:4}}/>
            <select style={{padding:10,border:'1px solid #ddd',borderRadius:4}}>
              <option>Any duration</option>
              <option>Short Stay</option>
              <option>Long Stay</option>
            </select>
            <button className="cta">Search</button>
          </div>
        </div>
      </section>
      <section className="container">
        <h2 style={{marginTop:20}}>Featured Homes</h2>
        <div className="card-grid">
          {properties.slice(0,6).map((p, i) => <PropertyCard key={p.id} p={p} index={i} />)}
        </div>
      </section>
    </>
  )
}
