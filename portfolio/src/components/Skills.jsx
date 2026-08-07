import "./Skills.css"

const groups = [
  {
    label: "Languages",
    items: [
      "Python",
      "Java",
      "SQL",
    ],
  },

  {
    label: "Generative AI & LLMs",
    items: [
      "Generative AI",
      "RAG",
      "LLMs",
      "SLMs",
      "Fine-tuning",
      "LoRA",
      "PEFT",
      "Gemini",
    ],
  },

  {
    label: "Retrieval & NLP",
    items: [
      "BM25",
      "FAISS",
      "Hybrid Retrieval",
      "Reciprocal Rank Fusion",
      "Information Retrieval",
      "NLP",
    ],
  },

  {
    label: "Backend & Data",
    items: [
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "Supabase",
      "MySQL",
    ],
  },

  {
    label: "Frontend",
    items: [
      "React",
    ],
  },

  {
    label: "Engineering",
    items: [
      "Docker",
      "Git",
      "GitHub Actions",
      "CI/CD",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="section-eyebrow">
          Skills
        </span>

        <h2 className="section-heading">
          What I work with
        </h2>

        <div className="skills__groups">
          {groups.map((group) => (
            <div
              className="skills__group"
              key={group.label}
            >
              <span className="skills__group-label">
                {group.label}
              </span>

              <div className="skills__chips">
                {group.items.map((item) => (
                  <span
                    className="skills__chip"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}