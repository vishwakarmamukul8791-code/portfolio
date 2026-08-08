import { useState } from "react"
import "./Hero.css"

const systems = [
  {
    id: "resolveiq",
    name: "ResolveIQ",
    type: "Production RAG",
    status: "Live",
    input: "Why does OAuth token exchange fail?",
    stages: ["Hybrid retrieval", "RRF fusion", "Confidence gate"],
    output: "Grounded answer + citations",
    note: "Weak evidence triggers a safe abstention.",
  },
  {
    id: "queryforge",
    name: "QueryForge",
    type: "Text-to-SQL SLM",
    status: "In build",
    input: "Show Q2 revenue grouped by region",
    stages: ["Schema context", "Fine-tuned SLM", "AST validation"],
    output: "Validated read-only SQL",
    note: "Architecture preview for the system in development.",
  },
]

export default function Hero() {
  const [activeSystem, setActiveSystem] = useState(systems[0])

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Product Engineer · AI/ML</span>

          <h1 className="hero__headline">
            I build AI systems that know when to answer{" — "}and when to
            abstain.
          </h1>

          <p className="hero__subhead">
            I take applied AI from retrieval and evaluation to backend APIs and
            production deployment—building RAG, LLM, and model-adaptation
            systems that stay grounded in evidence.
          </p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              Explore my work
              <span aria-hidden="true">↓</span>
            </a>

            <a
              href="https://github.com/vishwakarmamukul8791-code"
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero__proof" aria-label="Areas of engineering focus">
            <div>
              <strong>Production RAG</strong>
              <span>Deployed end to end</span>
            </div>
            <div>
              <strong>Retrieval quality</strong>
              <span>Hybrid search + evaluation</span>
            </div>
            <div>
              <strong>Model adaptation</strong>
              <span>SLMs + safe execution</span>
            </div>
          </div>
        </div>

        <div className="system-console" aria-label="Interactive AI system architecture preview">
          <div className="system-console__chrome">
            <div className="system-console__dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span>mukul / ai-systems</span>
            <span className="system-console__signal">● operational</span>
          </div>

          <div className="system-console__tabs" role="tablist" aria-label="Select a project">
            {systems.map((system) => (
              <button
                key={system.id}
                type="button"
                role="tab"
                aria-selected={activeSystem.id === system.id}
                className={activeSystem.id === system.id ? "is-active" : ""}
                onClick={() => setActiveSystem(system)}
              >
                {system.name}
              </button>
            ))}
          </div>

          <div className="system-console__body" role="tabpanel" key={activeSystem.id}>
            <div className="system-console__meta">
              <div>
                <span className="system-console__label">SYSTEM</span>
                <strong>{activeSystem.type}</strong>
              </div>
              <span className={`system-console__status system-console__status--${activeSystem.id}`}>
                {activeSystem.status}
              </span>
            </div>

            <div className="system-console__input">
              <span className="system-console__label">INPUT</span>
              <p>“{activeSystem.input}”</p>
            </div>

            <div className="system-console__flow">
              {activeSystem.stages.map((stage, index) => (
                <div className="system-console__stage" key={stage}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{stage}</strong>
                  <span className="system-console__check" aria-hidden="true">✓</span>
                </div>
              ))}
            </div>

            <div className="system-console__output">
              <span className="system-console__label">DECISION</span>
              <div>
                <strong>{activeSystem.output}</strong>
                <span aria-hidden="true">→</span>
              </div>
              <p>{activeSystem.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
