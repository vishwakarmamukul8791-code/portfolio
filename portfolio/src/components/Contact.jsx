import "./Contact.css"

const links = [
  { label: "GitHub", href: "https://github.com/vishwakarmamukul8791-code" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mukul-s-8s677" },
  { label: "LeetCode", href: "https://leetcode.com/u/Mukul863024/" },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <div className="contact__lead">
          <span className="section-eyebrow">Contact</span>
          <h2>Let’s build reliable AI products.</h2>
          <p>
            I’m open to AI Engineer, ML Engineer, and Generative AI roles where
            product thinking and strong engineering matter as much as the model.
          </p>
        </div>

        <div className="contact__actions">
          <a className="contact__email" href="mailto:mmukul8791@gmail.com">
            <span>Email me</span>
            <strong>mmukul8791@gmail.com</strong>
            <i aria-hidden="true">↗</i>
          </a>

          <div className="contact__links">
            {links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container contact__footer">
        <span>Designed around evidence, evaluation, and safe AI.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </section>
  )
}
