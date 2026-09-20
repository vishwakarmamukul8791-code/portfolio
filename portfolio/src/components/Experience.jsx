import "./Experience.css"

const bullets = [
  "Built a defect similarity search application from scratch using Python and Flask to find relevant historical defects from CSV records.",
  "Implemented three-stage filtering with BM25, word and character TF-IDF, Word2Vec, and WordNet for lexical shortlisting, semantic reranking, and final similarity scoring.",
  "Built Python automation to extract interface metadata, including interface IDs and incoming/outgoing direction, from XML into Excel.",
  "Implemented conditional XML transformations that generate both XML and Excel outputs from source interface data.",
]
const scope = ["NLP search", "Python", "XML / Excel"]

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-eyebrow">Experience</span>
            <h2 className="section-heading">Search and automation at TCS.</h2>
          </div>
          <p className="section-intro">
            Built NLP search and interface-data automation applications from scratch,
            with a focus on practical enterprise workflows.
          </p>
        </div>

        <article className="experience__card">
          <div className="experience__rail">
            <span className="experience__current">Current role</span>
            <span className="experience__dates">Jun 2025 — Present</span>
          </div>

          <div className="experience__body">
            <div className="experience__header">
              <div>
                <h3 className="experience__role">Product Engineer — AI/ML</h3>
                <p className="experience__org">Tata Consultancy Services (TCS)</p>
              </div>

              <div className="experience__scope" aria-label="Role focus">
                {scope.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>

            <ul className="experience__bullets">
              {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}
