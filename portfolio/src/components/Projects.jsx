import "./Projects.css"

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="section-eyebrow">Projects</span>

        <h2 className="section-heading">Featured work</h2>

        {/* ResolveIQ */}
        <div className="project-card project-card--primary">
          <div className="project-card__body">
            <h3 className="project-card__title">
              ResolveIQ
            </h3>

            <p className="project-card__desc">
              A production-oriented AI incident resolution platform for
              support engineers. Combines BM25 and FAISS hybrid retrieval
              with Reciprocal Rank Fusion, source-grounded Gemini responses,
              confidence gating, citations, evaluation, and persistent
              storage using Supabase PostgreSQL.
            </p>

            <div className="project-card__tags">
              {[
                "Python",
                "FastAPI",
                "React",
                "RAG",
                "BM25",
                "FAISS",
                "RRF",
                "Gemini",
                "PostgreSQL",
                "Supabase",
                "Docker",
                "GitHub Actions",
              ].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="project-card__links">
              <a
                href="https://resolveiq-five.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary"
              >
                Live demo
              </a>

              <a
                href="https://github.com/vishwakarmamukul8791-code/resolveiq-platform"
                target="_blank"
                rel="noreferrer"
                className="btn btn--outline"
              >
                Repository
              </a>
            </div>
          </div>
        </div>

        {/* QueryForge */}
        <div className="project-card project-card--secondary">
          <div className="project-card__body">
            <div className="project-card__title-row">
              <h3 className="project-card__title">
                QueryForge
              </h3>

              <span className="project-card__status">
                In progress
              </span>
            </div>

            <p className="project-card__desc">
              A natural-language-to-SQL system focused on adapting small
              language models for structured query generation. The project
              explores supervised fine-tuning, LoRA-based parameter-efficient
              adaptation, database schema understanding, and validation of
              generated SQL before execution.
            </p>

            <div className="project-card__tags">
              {[
                "Python",
                "Text-to-SQL",
                "SLM",
                "Fine-tuning",
                "LoRA",
                "PEFT",
                "SQL",
                "Spider",
              ].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="project-card__links">
              <a
                href="https://github.com/vishwakarmamukul8791-code/queryforge-slm"
                target="_blank"
                rel="noreferrer"
                className="btn btn--outline"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}