import { useState, useEffect } from 'react'
import './AnnouncementBar.css'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const announcements = [
    "ENVIOS GRATIS EN TACNA",
    "HASTA 40% OFF",
    "NUEVA COLECCIÓN DISPONIBLE",
    "ENVÍO GRATIS EN PEDIDOS MAYORES A $50"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [announcements.length])

  if (!isVisible) return null

  return (
    <div className="announcement-bar">
      <span className="announcement-item active" key={currentIndex}>
        {announcements[currentIndex]}
      </span>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  )
}
