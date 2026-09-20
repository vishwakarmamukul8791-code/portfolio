import { useState } from 'react'
import { projects } from '../data/projects'
import SystemDiagram, { ProjectMark } from './SystemDiagram'
import './Hero.css'
export default function Hero() {
  const [active, setActive] = useState(projects[0])
  return <section id="top" className="hero"><div className="container hero__inner">
    <div className="hero__content"><span className="hero__eyebrow">Mukul · AI/ML Engineer</span>
      <h1 className="hero__headline">Practical AI.<br/><span>Thoughtful engineering.</span></h1>
      <p className="hero__subhead">I build applications that connect information to action—from grounded answers to controlled agent workflows and Python automation.</p>
      <p className="hero__identity">Currently at TCS <span aria-hidden="true">/</span> Gurugram, India</p>
      <div className="hero__cta"><a href="#projects" className="btn btn--primary">Explore projects <span aria-hidden="true">↘</span></a><a href="#contact" className="btn btn--outline">Get in touch <span aria-hidden="true">↗</span></a></div>
      <div className="hero__proof"><div><strong>Retrieval</strong><span>Evidence before answers</span></div><div><strong>Agents</strong><span>Explicit execution controls</span></div><div><strong>Automation</strong><span>Repeatable data workflows</span></div></div>
    </div>
    <div className="architecture-panel"><div className="architecture-panel__top"><span>PROJECT ARCHITECTURE</span><span>01 — 03</span></div>
      <div className="architecture-panel__switch" aria-label="Choose a project architecture">{projects.map(p=><button key={p.id} type="button" aria-pressed={active.id===p.id} onClick={()=>setActive(p)}>{p.name}</button>)}</div>
      <div className="architecture-panel__title"><ProjectMark kind={active.id}/><div><h2>{active.name}</h2><p>{active.category}</p></div></div>
      <SystemDiagram project={active}/><div className="architecture-panel__note"><span aria-hidden="true">↳</span><p>{active.note}</p></div>
      <a className="architecture-panel__link" href={active.architecture} target="_blank" rel="noreferrer">Explore the architecture <span aria-hidden="true">↗</span></a>
    </div>
  </div></section>
}
