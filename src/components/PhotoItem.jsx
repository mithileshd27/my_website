/**
 * PhotoItem — renders a placeholder SVG.
 * To use a real photo, replace the <svg> block with:
 *   <img src={src} alt={title} className="photo-placeholder" style={{ height }} />
 */
export default function PhotoItem({ id, height, title, location, gradient }) {
  const gradId = `grad-${id}`

  // Pick a simple shape motif per photo to differentiate placeholders
  const motifs = [
    // wildlife 1 – leopard silhouette suggestion
    <g key="m1">
      <ellipse cx="200" cy="130" rx="120" ry="80" fill="#3a2a10" opacity="0.6" />
      <circle cx="200" cy="110" r="35" fill="#c8a97e" opacity="0.25" />
      <path d="M160 150 Q180 120 200 140 Q220 120 240 150 Q220 180 200 170 Q180 180 160 150Z" fill="#8b6030" opacity="0.5" />
      <path d="M0 280 Q100 240 200 260 Q300 240 400 270 L400 320 L0 320Z" fill="#1a1209" />
    </g>,
    // landscape 2 – mountain + moon
    <g key="m2">
      <ellipse cx="200" cy="80" rx="60" ry="60" fill="#c8a97e" opacity="0.15" />
      <path d="M0 250 Q80 180 160 220 Q240 140 320 190 Q370 150 400 170 L400 420 L0 420Z" fill="#1a2010" opacity="0.8" />
      <path d="M0 320 Q120 280 220 300 Q320 270 400 290 L400 420 L0 420Z" fill="#0d0a06" />
      <circle cx="200" cy="80" r="30" fill="#c8a97e" opacity="0.3" />
    </g>,
    // wildlife 3 – eagle + highland
    <g key="m3">
      <circle cx="310" cy="70" r="25" fill="#c8a97e" opacity="0.2" />
      <path d="M100 180 Q140 120 180 150 Q200 100 240 140 Q260 110 290 130 L290 260 L100 260Z" fill="#2a3a15" opacity="0.7" />
      <ellipse cx="190" cy="130" rx="40" ry="25" fill="#4a3a20" opacity="0.6" />
    </g>,
    // landscape 4 – dolomite sunrise
    <g key="m4">
      <path d="M0 120 Q200 60 400 100 L400 0 L0 0Z" fill="#c85000" opacity="0.15" />
      <path d="M0 180 Q60 100 120 150 Q180 80 240 130 Q300 70 360 120 Q380 100 400 110 L400 350 L0 350Z" fill="#1a0d06" />
      <path d="M150 200 L200 80 L250 200Z" fill="#3a2010" opacity="0.5" />
      <ellipse cx="200" cy="50" rx="80" ry="30" fill="#c87040" opacity="0.2" />
    </g>,
    // wildlife 5 – whale
    <g key="m5">
      <ellipse cx="200" cy="180" rx="90" ry="110" fill="#102030" opacity="0.8" />
      <ellipse cx="200" cy="160" rx="45" ry="55" fill="#c8a97e" opacity="0.1" />
      <circle cx="175" cy="145" r="8" fill="#c8a97e" opacity="0.4" />
      <circle cx="225" cy="145" r="8" fill="#c8a97e" opacity="0.4" />
      <path d="M160 380 Q200 310 240 380Z" fill="#0a1520" />
    </g>,
    // landscape 6 – reflection
    <g key="m6">
      <rect x="0" y="140" width="400" height="140" fill="#1a1308" opacity="0.5" />
      <line x1="0" y1="140" x2="400" y2="140" stroke="#c8a97e" strokeWidth="0.5" opacity="0.2" />
      <rect x="140" y="60" width="4" height="80" fill="#c8a97e" opacity="0.15" />
      <rect x="180" y="80" width="4" height="60" fill="#c8a97e" opacity="0.1" />
      <rect x="220" y="70" width="4" height="70" fill="#c8a97e" opacity="0.12" />
      <rect x="260" y="90" width="3" height="50" fill="#c8a97e" opacity="0.08" />
    </g>,
  ]

  const gradDir = gradient.dir === 'diagonal'
    ? { x1: '0%', y1: '0%', x2: '100%', y2: '100%' }
    : gradient.dir === 'horizontal'
    ? { x1: '0%', y1: '0%', x2: '100%', y2: '0%' }
    : { x1: '0%', y1: '0%', x2: '0%', y2: '100%' }

  return (
    <div className="photo-item" style={{ height }}>
      <svg
        className="photo-placeholder"
        height={height}
        viewBox={`0 0 400 ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradId} {...gradDir}>
            <stop offset="0%" style={{ stopColor: gradient.x1 }} />
            <stop offset="100%" style={{ stopColor: gradient.x2 }} />
          </linearGradient>
        </defs>
        <rect width="400" height={height} fill={`url(#${gradId})`} />
        {motifs[(id - 1) % motifs.length]}
      </svg>
      <div className="photo-overlay">
        <p className="photo-title">{title}</p>
        <p className="photo-meta">{location}</p>
      </div>
    </div>
  )
}
