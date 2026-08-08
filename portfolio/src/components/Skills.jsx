import "./Skills.css"

const groups = [
  {
    number: "01",
    label: "Applied AI",
    description: "Building grounded AI products and model-assisted workflows.",
    items: ["Generative AI", "RAG", "LLMs", "SLMs", "Gemini"],
  },
  {
    number: "02",
    label: "Retrieval & evaluation",
    description: "Finding the right evidence and measuring where systems fail.",
    items: ["BM25", "FAISS", "pgvector", "Hybrid Retrieval", "RRF", "Reranking"],
  },
  {
    number: "03",
    label: "Model adaptation",
    description: "Adapting smaller models for domain-specific tasks.",
    items: ["Fine-tuning", "LoRA", "QLoRA", "PEFT", "Text-to-SQL"],
  },
  {
    number: "04",
    label: "Product engineering",
    description: "Taking systems from Python code to reliable deployments.",
    items: ["Python", "FastAPI", "PostgreSQL", "React", "Docker", "CI/CD"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-eyebrow">Capabilities</span>
            <h2 className="section-heading">My engineering toolkit.</h2>
          </div>
          <p className="section-intro">
            A focused stack for building, evaluating, and shipping applied AI
            systems—not a list of every tool I have ever touched.
          </p>
        </div>

        <div className="skills__groups">
          {groups.map((group) => (
            <article className="skills__group" key={group.label}>
              <span className="skills__number">{group.number}</span>
              <div className="skills__copy">
                <h3>{group.label}</h3>
                <p>{group.description}</p>
              </div>
              <div className="skills__chips">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
