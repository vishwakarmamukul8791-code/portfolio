import "./About.css"

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <span className="section-eyebrow">About</span>
        <h2 className="section-heading">A little about me</h2>
        <p className="about__text">
          AI Engineer with 1+ year of experience at Tata Consultancy Services, building and evaluating
          LLM-powered retrieval systems. I work across the stack — from data pipelines and retrieval logic
          to production APIs — with a focus on systems that stay honest about what they don't know rather
          than guessing.
        </p>
        <ul className="about__meta">
          <li>BCA, Uttaranchal University</li>
          <li>Gurugram, India</li>
          <li>Open to AI / ML Engineer roles</li>
        </ul>
      </div>
    </section>
  )
}
