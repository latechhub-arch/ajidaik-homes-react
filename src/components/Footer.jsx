import React from 'react'
import logo from '../assets/logo.png'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
        <div><img src={logo} alt="logo" style={{height:48}}/></div>
        <div style={{textAlign:'right'}}>
          Ajidaik Solutions · Kenya-wide<br/>
          Phone: +254 117 613 599<br/>
          Email: info@ajidaiksolutions.co.ke<br/>
          © 2025 Ajidaik Solutions. All Rights Reserved.
        </div>
      </div>
      <a
        className="whatsapp-float"
        href="https://wa.me/254117613599?text=Hello%20Ajidaik%20Homes,%20I%20am%20interested%20in%20one%20of%20your%20properties."
        target="_blank"
        rel="noreferrer"
        style={{position:'fixed', right:20, bottom:20}}
      >
        <div className="whatsapp-btn" title="Chat with Ajidaik Homes">WA</div>
      </a>
    </footer>
  )
}
