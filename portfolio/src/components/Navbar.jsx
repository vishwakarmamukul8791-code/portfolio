import { useEffect, useState } from "react"
import "./Navbar.css"

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Capabilities", href: "#skills" },
  { label: "Work", href: "#projects" },
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
          <a href="/resume.pdf" download className="navbar__resume">
            Resume
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
              <path d="M5 21h14" />
            </svg>
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
