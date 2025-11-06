import React from 'react'

export default function WhatsAppButton({text}) {
  const waText = text ? encodeURIComponent(text) : encodeURIComponent('Hello Ajidaik Homes, I am interested in one of your properties.')
  const href = `https://wa.me/254117613599?text=${waText}`
  return (
    <div className="whatsapp-float">
      <a className="whatsapp-btn" href={href} target="_blank" rel="noreferrer" title="Chat with Ajidaik Homes">WA</a>
    </div>
  )
}
