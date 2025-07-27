import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import contacts from '../assets/logo.png' 

export default function ContactsSection() {
  return (
    <section
      className="relative py-20 text-gray-900 bg-white-50 min-h-[500px]"
      style={{
        backgroundImage: `url(${contacts})`,
        backgroundSize: '150px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute top-8 left-0 right-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-4xl font-bold text-gray-800">
            Ensemble pour la promotion des libertés fondamentales
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid md:grid-cols-3 gap-8">
          <ContactCard 
            icon={<FaMapMarkerAlt />} 
            title="Adresse" 
            content={<a href="https://goo.gl/maps/youraddress" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
              N'Djamena, Tchad
            </a>} 
          />
          <ContactCard 
            icon={<FaPhone />} 
            title="Téléphone" 
            content={<a href="tel:+23522523456" className="text-black hover:underline">+235 22 52 34 56</a>} 
          />
          <ContactCard 
            icon={<FaEnvelope />} 
            title="Email" 
            content={<a href="mailto:contact@aplft.org" className="text-black hover:underline">contact@aplft.org</a>} 
          />
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, title, content }) {
  return (
    <div className="flex items-center justify-between text-left bg-white p-4 rounded-lg shadow-md">
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-black text-sm">{content}</p>
      </div>
      <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-xl ml-4">
        {React.cloneElement(icon, { className: 'text-yellow-400' })}
      </div>
    </div>
  )
}
