import "./Experience.css"

const bullets = [
  "Developed AI-powered support workflows using Python, Flask REST APIs, and React, incorporating a Retrieval-Augmented Generation (RAG) search process over historical incident logs to help engineers quickly locate similar past incidents.",
  "Built NLP retrieval pipelines using TF-IDF and BM25 across 2,000+ historical defect records, including text preprocessing and relevance testing with incident queries.",
  "Fine-tuned and customized existing small language models (SLMs) to power domain-specific Q&A for client platforms (e.g., banking), enabling the model to answer procedural queries with clear, step-by-step responses.",
  "Reviewed retrieval and model-assisted responses for relevance, factual grounding, and consistency; investigated weak results and refined search or prompting logic.",
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
              <h3 className="experience__role">Assistant System Engineer, AI/ML Team</h3>
              <p className="experience__org">Tata Consultancy Services (TCS)</p>
            </div>
            <span className="experience__dates">Jun 2025 – Present</span>
          </div>
          <ul className="experience__bullets">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
