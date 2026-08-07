import "./Experience.css"

const bullets = [
  "Develop AI-powered support workflows using Python, backend APIs, and retrieval-augmented generation over historical incident and enterprise knowledge data.",

  "Build and evaluate information retrieval pipelines using techniques such as TF-IDF and BM25, including text preprocessing, relevance testing, and investigation of weak retrieval results.",

  "Work with small language models for domain-specific question answering, including model customization and fine-tuning workflows for enterprise use cases.",

  "Evaluate retrieval and model-generated responses for relevance, factual grounding, consistency, and failure cases, refining retrieval and prompting strategies when needed.",
]

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <span className="section-eyebrow">Experience</span>

        <h2 className="section-heading">Where I've worked</h2>

        <div className="experience__card">
          <div className="experience__header">
            <div>
              <h3 className="experience__role">
                Product Engineer – AI/ML
              </h3>

              <p className="experience__org">
                Tata Consultancy Services (TCS)
              </p>
            </div>

            <span className="experience__dates">
              Jun 2025 – Present
            </span>
          </div>

          <ul className="experience__bullets">
            {bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}