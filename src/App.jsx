import { useState } from 'react'
import Landing from './pages/Landing'
import CodingPortfolio from './pages/CodingPortfolio'
import PhotoPortfolio from './pages/PhotoPortfolio'

/**
 * App manages the top-level navigation state.
 * Pages are all mounted and toggled via CSS opacity/pointer-events
 * so that enter/exit transitions work without a router.
 */
export default function App() {
  const [current, setCurrent] = useState('landing')

  return (
    <>
      {/* Landing is always rendered; active class drives visibility */}
      <div className={`page${current === 'landing' ? ' active' : ''}`}>
        <Landing onNavigate={setCurrent} />
      </div>

      <CodingPortfolio
        active={current === 'coding'}
        onBack={() => setCurrent('landing')}
      />

      <PhotoPortfolio
        active={current === 'photo'}
        onBack={() => setCurrent('landing')}
      />
    </>
  )
}
