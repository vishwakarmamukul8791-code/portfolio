import "./Skills.css"

const groups = [
  { label: "Languages", items: ["Python", "Java", "SQL"] },
  { label: "Backend & APIs", items: ["FastAPI", "Flask"] },
  { label: "AI / ML / LLMs", items: ["RAG", "LLMs", "BM25", "FAISS", "Hybrid Retrieval", "Gemini"] },
  { label: "Frontend", items: ["React"] },
  { label: "Tooling", items: ["Docker", "GitHub Actions", "Git", "MySQL"] },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-heading">What I work with</h2>
        <div className="skills__groups">
          {groups.map((group) => (
            <div className="skills__group" key={group.label}>
              <span className="skills__group-label">{group.label}</span>
              <div className="skills__chips">
                {group.items.map((item) => (
                  <span className="skills__chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
