import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar(){
  return (
    <header className="header">
      <img src={logo} alt="Ajidaik Homes logo" />
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/browse">Browse Homes</Link>
        <Link to="/list-your-home">List Your Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      {/* Contact info removed for a cleaner, countrywide look */}
    </header>
  )
}
