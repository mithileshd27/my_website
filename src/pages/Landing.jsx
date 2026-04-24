import '../styles/Landing.css'
import { codeSnippets } from '../data/projects'
import { FaCamera } from 'react-icons/fa6';

export default function Landing({ onNavigate }) {
  return (
    <div className="landing page active">
      {/* Name banner */}
      <div className="landing-name">
        <h1>Mithilesh Domala</h1>
        <p>{(new Date().getFullYear())}</p>
      </div>

      {/* ── Code Half (left) ── */}
      <div className="half half-code" onClick={() => onNavigate('coding')}>
        <div className="code-rain">
          {codeSnippets.join('\n')}
        </div>

        <div className="half-label">
          <h2 className="half-title jetbrains-mono-code ">&gt;_ Code</h2>
          <p className="half-desc">
            Full-stack web development, React ecosystems, Node.js APIs, and generative AI integrations.
          </p>
          <button
            className="half-cta"
            onClick={(e) => { e.stopPropagation(); onNavigate('coding') }}
          >
            View Work <span className="cta-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="divider" />

      {/* ── Photo Half (right) ── */}
      <div className="half half-photo" onClick={() => onNavigate('photo')}>
        <div className="half-label">
          <h2 className="half-title photography-font-artistic"><FaCamera /> Photography</h2>
          <p className="half-desc">
            Wildlife encounters and sweeping landscapes — a portfolio of moments frozen in light.
          </p>
          <button
            className="half-cta"
            onClick={(e) => { e.stopPropagation(); onNavigate('photo') }}
          >
            Enter Gallery <span className="cta-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}
