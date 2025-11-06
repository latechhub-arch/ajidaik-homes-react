import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Browse from './pages/Browse'
import Property from './pages/Property'
import ListYourHome from './pages/ListYourHome'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App(){
  return (
    <div>
      <Navbar />
      <main style={{minHeight: '70vh'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/property/:id" element={<Property />} />
          <Route path="/list-your-home" element={<ListYourHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
