import { projects } from '../data/projects'
import { ProjectMark } from './SystemDiagram'
import './Projects.css'
export default function Projects() {
  return <section id="projects" className="section projects"><div className="container">
    <div className="section-header"><div><span className="section-eyebrow">Personal projects</span><h2 className="section-heading">Three problems.<br/>Three working systems.</h2></div><p className="section-intro">Independent projects exploring knowledge retrieval, controlled agent execution, and report automation. Each repository includes architecture, setup instructions, and implementation details.</p></div>
    {projects.map((p,i)=><article className="project-card" key={p.id}>
      <div className="project-card__index"><ProjectMark kind={p.id} size={42}/><span>0{i+1}</span><p>{p.category}</p></div>
      <div className="project-card__main"><div className="project-card__title-row"><div><h3>{p.name}</h3><p>{p.subtitle}</p></div><span className="project-card__status project-card__status--live">{p.status}</span></div>
        <p className="project-card__desc">{p.description}</p>
        <dl className="project-card__facts">{p.facts.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        <div className="project-card__footer"><div><span className="project-card__micro-label">Technology stack</span><div className="project-card__tags">{p.stack.map(t=><span key={t}>{t}</span>)}</div></div>
          <div className="project-card__links">{p.demo&&<a className="btn btn--primary" href={p.demo} target="_blank" rel="noreferrer">Open demo ↗</a>}<a className="btn btn--outline" href={p.repo} target="_blank" rel="noreferrer">Repository ↗</a><a className="btn btn--outline" href={p.architecture} target="_blank" rel="noreferrer">Architecture ↗</a></div>
        </div>{p.demo&&<p className="project-card__notice">The hosted backend may take a moment to wake up.</p>}
      </div>
    </article>)}
  </div></section>
}
