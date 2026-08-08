import "./Projects.css"

const resolveIqFacts = [
  { label: "Retrieval", value: "BM25 + pgvector / FAISS + RRF" },
  { label: "Reliability", value: "Confidence gating + safe abstention" },
  { label: "Production", value: "Role-based auth + persistent Supabase data" },
]

const queryForgeFacts = [
  { label: "Model plan", value: "Qwen2.5-Coder 1.5B + QLoRA" },
  { label: "Safety target", value: "Read-only SQL + AST validation" },
  { label: "Eval target", value: "Exact match + execution accuracy" },
]

function Architecture({ items }) {
  return (
    <div className="project-card__architecture" aria-label={`Architecture: ${items.join(" then ")}`}>
      {items.map((item, index) => (
        <span key={item}>
          <strong>{item}</strong>
          {index < items.length - 1 && <i aria-hidden="true">→</i>}
        </span>
      ))}
    </div>
  )
}

function Facts({ items }) {
  return (
    <dl className="project-card__facts">
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-eyebrow">Selected work</span>
            <h2 className="section-heading">Systems, not just demos.</h2>
          </div>
          <p className="section-intro">
            Two projects covering complementary AI engineering problems:
            retrieving trustworthy knowledge and generating safe structured
            outputs on unseen schemas.
          </p>
        </div>

        <article className="project-card project-card--primary">
          <div className="project-card__index">01 / PRODUCTION RAG</div>

          <div className="project-card__main">
            <div className="project-card__title-row">
              <div>
                <h3>ResolveIQ</h3>
                <p>Incident resolution, grounded in evidence.</p>
              </div>
              <span className="project-card__status project-card__status--live">Live product</span>
            </div>

            <p className="project-card__desc">
              A full-stack AI incident-resolution platform for support
              engineers. ResolveIQ retrieves from enterprise knowledge,
              produces source-grounded Gemini answers, cites its evidence, and
              safely abstains when retrieval is too weak.
            </p>

            <span className="project-card__micro-label">Core request path</span>
            <Architecture items={["Question", "Hybrid retrieval", "RRF", "Confidence gate", "Cited answer"]} />

            <Facts items={resolveIqFacts} />

            <div className="project-card__footer">
              <div className="project-card__tags" aria-label="ResolveIQ technologies">
                {[
                  "Python", "FastAPI", "React", "Gemini", "PostgreSQL",
                  "Supabase", "Docker", "GitHub Actions",
                ].map((tag) => <span key={tag}>{tag}</span>)}
              </div>

              <div className="project-card__links">
                <a
                  href="https://resolveiq-five.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary"
                >
                  Try live product <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://github.com/vishwakarmamukul8791-code/resolveiq-platform"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--outline"
                >
                  View repository <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="project-card project-card--secondary">
          <div className="project-card__index">02 / MODEL ADAPTATION</div>

          <div className="project-card__main">
            <div className="project-card__title-row">
              <div>
                <h3>QueryForge</h3>
                <p>Safe SQL generation for unseen schemas.</p>
              </div>
              <span className="project-card__status project-card__status--building">Building in public</span>
            </div>

            <p className="project-card__desc">
              An in-progress natural-language-to-SQL system focused on adapting
              a small language model for schema-aware generation. The target is
              not SQL that merely looks correct, but read-only SQL that is
              validated, executable, and measurable.
            </p>

            <span className="project-card__micro-label">Training & validation roadmap</span>
            <Architecture items={["Spider data", "Schema SFT", "QLoRA", "AST guard", "Execution eval"]} />

            <Facts items={queryForgeFacts} />

            <div className="project-card__footer">
              <div className="project-card__tags" aria-label="QueryForge technologies">
                {[
                  "Python", "Text-to-SQL", "SLM", "QLoRA", "PEFT",
                  "SQLGlot", "Spider",
                ].map((tag) => <span key={tag}>{tag}</span>)}
              </div>

              <div className="project-card__links">
                <a
                  href="https://github.com/vishwakarmamukul8791-code/queryforge-slm"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--outline"
                >
                  Follow the build <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
