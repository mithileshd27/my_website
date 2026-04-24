import { useState } from 'react'
import '../styles/PhotoPortfolio.css'
import BackButton from '../components/BackButton'
import PhotoItem from '../components/PhotoItem'
import { photos } from '../data/photos'

const CATEGORIES = ['all', 'wildlife', 'landscape']

export default function PhotoPortfolio({ active, onBack }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? photos
    : photos.filter((p) => p.category === activeCategory)

  return (
    <div className={`photo-page page${active ? ' active' : ''}`}>
      <div className="photo-vignette" />
      <div className="photo-glow" />

      <BackButton onClick={onBack} />

      <div className="photo-content">
        <div className="photo-header animate a1">
          <span className="eyebrow">Photography Portfolio</span>
          <h2>
            Light &amp;<br />Wild.
          </h2>
          <p>
            Chasing golden hours across continents — wildlife encounters and
            landscapes that demand stillness.
          </p>
        </div>

        <div className="photo-tabs animate a2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`tab${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="photo-masonry animate a3">
          {filtered.map((photo) => (
            <PhotoItem key={photo.id} {...photo} />
          ))}
        </div>
      </div>
    </div>
  )
}
