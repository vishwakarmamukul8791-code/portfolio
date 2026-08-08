import "./Experience.css"

const bullets = [
  "Develop AI-powered support workflows using Python, backend APIs, retrieval-augmented generation, and enterprise knowledge data.",
  "Build and evaluate information-retrieval pipelines, including text preprocessing, BM25-based retrieval, relevance testing, and investigation of weak results.",
  "Work with small language models and model-adaptation workflows for domain-specific enterprise question answering.",
  "Evaluate generated responses for relevance, factual grounding, consistency, and failure modes, then refine retrieval and prompting strategies.",
]

const scope = ["Applied AI", "Retrieval", "Evaluation", "Backend APIs"]

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-eyebrow">Experience</span>
            <h2 className="section-heading">Building AI for real workflows.</h2>
          </div>
          <p className="section-intro">
            Working across retrieval, model-assisted workflows, evaluation, and
            backend engineering in an enterprise AI/ML team.
          </p>
        </div>

        <article className="experience__card">
          <div className="experience__rail">
            <span className="experience__current">Current role</span>
            <span className="experience__dates">Jun 2025 — Present</span>
          </div>

          <div className="experience__body">
            <div className="experience__header">
              <div>
                <h3 className="experience__role">Product Engineer — AI/ML</h3>
                <p className="experience__org">Tata Consultancy Services (TCS)</p>
              </div>

              <div className="experience__scope" aria-label="Role focus">
                {scope.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>

            <ul className="experience__bullets">
              {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}
