import "./Hero.css"

const pipeline = [
  { label: "Query" },
  { label: "BM25 + FAISS" },
  { label: "RRF fusion" },
  { label: "Confidence gate" },
]

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <span className="hero__eyebrow">AI engineer</span>
        <h1 className="hero__headline">
          AI Engineer building retrieval systems that ground every answer in evidence — or say nothing at all.
        </h1>
        <p className="hero__subhead">
          AI Engineer at TCS. About a year of experience building applied RAG and LLM systems in production.
        </p>
        <div className="hero__cta">
          <a href="https://github.com/vishwakarmamukul8791-code" target="_blank" rel="noreferrer" className="btn btn--primary">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mukul-s-8s677" target="_blank" rel="noreferrer" className="btn btn--outline">
            LinkedIn
          </a>
        </div>

        <div className="pipeline" role="img" aria-label="Diagram: query goes through BM25 and FAISS retrieval, then RRF fusion, then a confidence gate, which either answers or abstains">
          {pipeline.map((step, i) => (
            <div className="pipeline__step" key={step.label}>
              <span className="pipeline__node">{step.label}</span>
              {i < pipeline.length - 1 && <span className="pipeline__arrow">→</span>}
            </div>
          ))}
          <span className="pipeline__arrow">→</span>
          <div className="pipeline__outcome">
            <span className="pipeline__answer">Answer</span>
            <span className="pipeline__abstain">Abstain</span>
          </div>
        </div>
      </div>
    </section>
  )
}
