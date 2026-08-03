import { useEffect } from "react"

export default function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])
}
