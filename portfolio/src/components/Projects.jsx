import "./Projects.css"

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="section-eyebrow">Projects</span>
        <h2 className="section-heading">Featured work</h2>

        <div className="project-card project-card--primary">
          <div className="project-card__body">
            <h3 className="project-card__title">ResolveIQ</h3>
            <p className="project-card__desc">
              A full-stack RAG platform for investigating IT incidents against an internal knowledge base,
              built to fail safely rather than answer confidently on weak evidence. Combines BM25 and FAISS
              retrieval with Reciprocal Rank Fusion, optional cross-encoder reranking, and confidence-gated
              generation with Gemini — with grounded citations on every answer.
            </p>
            <div className="project-card__tags">
              {["FastAPI", "React", "BM25", "FAISS", "Gemini", "Docker", "GitHub Actions"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="project-card__links">
              <a href="https://resolveiq-five.vercel.app" target="_blank" rel="noreferrer" className="btn btn--primary">
                Live demo
              </a>
              <a href="https://github.com/vishwakarmamukul8791-code/intelligent-incident-resolution-assistant" target="_blank" rel="noreferrer" className="btn btn--outline">
                Repository
              </a>
            </div>
          </div>
        </div>

        <div className="project-card project-card--secondary">
          <div className="project-card__body">
            <div className="project-card__title-row">
              <h3 className="project-card__title">QueryForge</h3>
              <span className="project-card__status">In progress</span>
            </div>
            <p className="project-card__desc">
              A natural-language-to-SQL platform powered by a fine-tuned small language model, focused on
              safe, validated query generation rather than executing anything a model guesses.
            </p>
            <div className="project-card__tags">
              {["Python", "Fine-tuned SLM", "SQL"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="project-card__links">
              <a href="https://github.com/vishwakarmamukul8791-code/queryforge-slm" target="_blank" rel="noreferrer" className="btn btn--outline">
                Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
