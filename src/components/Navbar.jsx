import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <header className="header">
      {/* Logo and text */}
      <div className="logo-area">
        <img
          src={logo}
          alt="Ajidaik Homes logo"
          className="logo"
          draggable="false"
        />
        <span className="logo-text">Ajidaik Homes</span>
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
  );
}
