import React from 'react'

export default function Contact(){
  return (
    <div className="container">
      <h2>Contact Ajidaik Homes</h2>
      <p>For enquiries, use WhatsApp or send us a message below.</p>
      <form action={`mailto:ajidaiksolutions@gmail.com`} method="post" encType="text/plain" style={{maxWidth:700}}>
        <label>Your name<br/><input name="Name" type="text" style={{width:'100%', padding:8, marginTop:6}} required/></label><br/>
        <label>Your phone<br/><input name="Phone" type="text" style={{width:'100%', padding:8, marginTop:6}} required/></label><br/>
        <label>Your message<br/><textarea name="Message" style={{width:'100%', padding:8, marginTop:6}} required></textarea></label><br/>
        <div style={{marginTop:12}}><button className="cta" type="submit">Send Message</button></div>
      </form>
      <div style={{marginTop:18}}><strong>Or chat with us:</strong><br/>
        <a className="cta" href="https://wa.me/254117613599?text=Hello%20Ajidaik%20Homes,%20I%20would%20like%20to%20contact%20you." target="_blank" rel="noreferrer">Chat on WhatsApp</a>
      </div>
    </div>
  )
}
