// src/components/Navbar.jsx
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
  // Optional scroll effect (you can remove this if not needed)
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header')
      if (window.scrollY > 50) {
        header.classList.add('shrink')
      } else {
        header.classList.remove('shrink')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="header">
      {/* Logo: Left aligned, large and crisp */}
      <div className="logo-area">
        <img
          src={logo}
          alt="Ajidaik Homes logo"
          className="logo"
          draggable="false"
        />
      </div>

      {/* Navigation */}
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/browse">Browse Homes</Link>
        <Link to="/list-your-home">List Your Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
