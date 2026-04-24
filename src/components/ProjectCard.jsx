export default function ProjectCard({ num, featured, title, desc, stack, link, linkLabel }) {
  return (
    <div className={`project-card${featured ? ' featured' : ''}`}>
      <p className="card-num">Project · {num}{featured ? ' · Featured' : ''}</p>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{desc}</p>
      <div className="card-stack">
        {stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <a className="card-link" href={link}>
        {linkLabel} →
      </a>
    </div>
  )
}
