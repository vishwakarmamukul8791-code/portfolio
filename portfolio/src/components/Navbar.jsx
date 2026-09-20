import { useEffect, useState } from "react"
import "./Navbar.css"

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Toolkit", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min((window.scrollY / scrollable) * 100, 100) : 0)
    }

    updateProgress()
    window.addEventListener("scroll", updateProgress, { passive: true })
    window.addEventListener("resize", updateProgress)
    return () => {
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", updateProgress)
    }
  }, [])

  useEffect(() => {
    const closeOnEscape = (event) => { if (event.key === "Escape") { setOpen(false); document.querySelector(".navbar__toggle")?.focus() } }
    const closeOnDesktop = () => { if (window.innerWidth > 800) setOpen(false) }
    window.addEventListener("keydown", closeOnEscape)
    window.addEventListener("resize", closeOnDesktop)
    return () => { window.removeEventListener("keydown", closeOnEscape); window.removeEventListener("resize", closeOnDesktop) }
  }, [])
  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand" onClick={closeMenu} aria-label="Mukul, back to top">
          <span>M</span>
          <strong>Mukul</strong>
        </a>

        <nav className="navbar__links" aria-label="Main navigation">
          <ul>
            {links.map((link) => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          {/* <a href="mailto:mmukul8791@gmail.com?subject=Resume%20request" className="navbar__resume">
            Request resume
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 6h16v12H4zM4 6l8 6 8-6" />
              
            </svg>
          </a> */}
          <a href="/Mukul_Resume.pdf" download className="navbar__resume">
              Download Resume
                </a>

          <button
            type="button"
            className="navbar__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" className="navbar__mobile-menu" aria-label="Mobile navigation">
          <ul>
            {links.map((link) => (
              <li key={link.href}><a href={link.href} onClick={closeMenu}>{link.label}</a></li>
            ))}
          </ul>
        </nav>
      )}

      <span className="navbar__progress" style={{ width: `${progress}%` }} aria-hidden="true" />
    </header>
  )
}
