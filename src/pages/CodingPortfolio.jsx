import '../styles/CodingPortfolio.css'
import BackButton from '../components/BackButton'
import ProjectCard from '../components/ProjectCard'
import { projects, skills } from '../data/projects'

export default function CodingPortfolio({ active, onBack }) {
  return (
    <div className={`coding-page page${active ? ' active' : ''}`}>
      <div className="code-grid-bg" />
      <div className="code-glow" />

      <BackButton onClick={onBack} />

      <div className="code-content">
        <div className="code-header animate a1">
          <span className="eyebrow">Engineering Portfolio</span>
          <h2>
            Building things<br />that <span>work.</span>
          </h2>
          <p>
            Full-stack developer focused on React, Node.js, and the intersection of
            modern web tech with generative AI.
          </p>
        </div>

        <div className="skills-row animate a2">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>

        <div className="projects-grid animate a3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}
