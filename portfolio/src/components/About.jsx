import "./About.css"

const principles = [
  {
    index: "01",
    title: "Grounded by design",
    text: "Evidence, citations, and safe abstention are system requirements—not UI polish.",
  },
  {
    index: "02",
    title: "Measured, not assumed",
    text: "I evaluate retrieval quality and failure cases before trusting an AI response.",
  },
  {
    index: "03",
    title: "Connected end to end",
    text: "Data processing, backend logic, persistence, and interfaces designed to work together.",
  },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-eyebrow">About</span>
            <h2 className="section-heading">A practical approach to AI.</h2>
          </div>

          <div>
            <p className="about__text">
              I’m a Product Engineer working in AI/ML at Tata Consultancy
              Services. My professional work includes defect similarity search and XML/Excel automation.
              Alongside this, I build personal projects in RAG, agent orchestration,
              and full-stack application development.
            </p>
            <p className="about__text about__text--secondary">
              I care less about confident-looking output and more about whether
              a system can retrieve the right evidence, explain its answer, and
              fail safely when that evidence is missing.
            </p>
          </div>
        </div>

        <div className="principles" aria-label="Engineering principles">
          {principles.map((principle) => (
            <article className="principle" key={principle.index}>
              <span>{principle.index}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>

        <ul className="about__meta" aria-label="Profile details">
          <li>BCA · Uttaranchal University</li>
          <li>Gurugram, India</li>
          <li>Open to AI / ML / Generative AI roles</li>
        </ul>
      </div>
    </section>
  )
}
