import "./Contact.css"

const links = [
  { label: "GitHub", href: "https://github.com/vishwakarmamukul8791-code" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mukul-s-8s677" },
  { label: "LeetCode", href: "https://leetcode.com/u/Mukul863024/" },
  { label: "Email", href: "mailto:mmukul8791@gmail.com" },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-heading">Let's connect</h2>
        <p className="contact__text">
          Open to AI / ML Engineer roles — reach out on any of these.
        </p>
        <div className="contact__links">
          {links.map((link) => (
            <a key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="btn btn--outline">
              {link.label}
            </a>
          ))}
        </div>
        <p className="contact__email">mmukul8791@gmail.com</p>
      </div>
    </section>
  )
}
