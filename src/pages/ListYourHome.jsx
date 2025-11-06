import React from 'react'

export default function ListYourHome(){
  return (
    <div className="container">
      <h2>List Your Home with Ajidaik Homes</h2>
      <p>Complete this form and we'll contact you to verify and onboard your property.</p>
      <form action={`mailto:ajidaiksolutions@gmail.com`} method="post" encType="text/plain" style={{maxWidth:700}}>
        <label>Full name<br/><input name="OwnerName" type="text" style={{width:'100%', padding:8, marginTop:6}} required/></label><br/>
        <label>Phone number<br/><input name="Phone" type="text" style={{width:'100%', padding:8, marginTop:6}} required/></label><br/>
        <label>Email<br/><input name="Email" type="email" style={{width:'100%', padding:8, marginTop:6}}/></label><br/>
        <label>Property name<br/><input name="PropertyName" type="text" style={{width:'100%', padding:8, marginTop:6}}/></label><br/>
        <label>Location<br/><input name="Location" type="text" style={{width:'100%', padding:8, marginTop:6}}/></label><br/>
        <label>Stay type<br/><select name="StayType" style={{width:'100%', padding:8, marginTop:6}}><option>Short Stay</option><option>Long Stay</option></select></label><br/>
        <label>Description<br/><textarea name="Description" style={{width:'100%', padding:8, marginTop:6}}></textarea></label><br/>
        <div style={{marginTop:12}}><button className="cta" type="submit">Submit Property</button></div>
      </form>
    </div>
  )
}
