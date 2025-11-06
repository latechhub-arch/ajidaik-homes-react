import React, {useState} from 'react'

export default function InquiryForm({propertyName}) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(`I am interested in ${propertyName}.`)

  function handleSubmit(e){
    e.preventDefault()
    const body = `Property: ${propertyName}%0D%0AName: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0AMessage:%0D%0A${message}`
    const mailto = `mailto:ajidaiksolutions@gmail.com?subject=${encodeURIComponent('Property Inquiry - '+propertyName)}&body=${body}`
    window.location.href = mailto
  }

  return (
    <form onSubmit={handleSubmit} className="mini-form">
      <label>Full name<br/><input required value={name} onChange={e=>setName(e.target.value)} style={{width:'100%', padding:8}}/></label><br/>
      <label>Phone number<br/><input required value={phone} onChange={e=>setPhone(e.target.value)} style={{width:'100%', padding:8}}/></label><br/>
      <label>Email (optional)<br/><input value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%', padding:8}}/></label><br/>
      <label>Message<br/><textarea value={message} onChange={e=>setMessage(e.target.value)} style={{width:'100%', padding:8}} rows={4}></textarea></label><br/>
      <div style={{marginTop:8}}>
        <button className="cta" type="submit">Send Inquiry (Email)</button>
        <a className="cta" style={{marginLeft:8}} href={`https://wa.me/254117613599?text=${encodeURIComponent('Hello Ajidaik Homes, I am interested in '+propertyName)}`} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
      </div>
    </form>
  )
}
