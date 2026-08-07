import "./About.css"

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <span className="section-eyebrow">About</span>

        <h2 className="section-heading">A little about me</h2>

        <p className="about__text">
          Product Engineer working in AI/ML at Tata Consultancy Services,
          focused on Generative AI, RAG, LLM applications, retrieval systems,
          and production AI backends. I work across retrieval pipelines,
          model-assisted workflows, APIs, and evaluation, with a focus on
          grounded and reliable AI systems rather than confident guessing.
        </p>

        <ul className="about__meta">
          <li>BCA, Uttaranchal University</li>
          <li>Gurugram, India</li>
          <li>Open to AI / ML / Generative AI Engineer roles</li>
        </ul>
      </div>
    </section>
  )
}