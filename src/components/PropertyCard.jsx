import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PropertyCard({p, index}) {
  return (
    <motion.article className="card"
      initial={{opacity:0, y:20}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.5, delay: index * 0.08}}
    >
      <img src={p.image} alt={p.name} />
      <div className="card-body">
        <h3>{p.name}</h3>
        <div className="small-note">{p.location} · {p.type} · {p.price}</div>
        <p style={{marginTop:8}}>
          <Link className="cta" to={`/property/${p.id}`}>View Details</Link>
        </p>
      </div>
    </motion.article>
  )
}
