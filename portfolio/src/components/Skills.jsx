import "./Skills.css"

const groups = [
  {
    number: "01",
    label: "Applied AI",
    description: "Building grounded AI products and model-assisted workflows.",
    items: ["RAG", "Gemini", "LangGraph", "scikit-learn", "NLTK"],
  },
  {
    number: "02",
    label: "Retrieval & evaluation",
    description: "Finding the right evidence and measuring where systems fail.",
    items: ["BM25", "FAISS", "pgvector", "Hybrid Retrieval", "RRF", "Reranking"],
  },
  {
    number: "03",
    label: "Data & automation",
    description: "Transforming structured data into useful, repeatable outputs.",
    items: ["pandas", "NumPy", "SQL", "XML", "APScheduler"],
  },
  {
    number: "04",
    label: "Product engineering",
    description: "Taking systems from Python code to reliable deployments.",
    items: ["Python", "Java", "FastAPI", "Flask", "React", "PostgreSQL", "Supabase", "Docker", "GitHub Actions", "Pytest"],
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
            systems and automating data workflows.
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
