import { useEffect, useState } from 'react'
import { ArrowDownToLine, Menu, X } from 'lucide-react'
import { navigation, cvPath } from '../data/portfolioData'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navigation.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.1, 0.3] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Amna Arshad home">
          <span className="brand-mark">AA</span>
          <span>AMNA ARSHAD<span className="brand-subtitle">ANIMAL SCIENCES</span></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div className={`nav-content${menuOpen ? ' nav-content-open' : ''}`}>
          <div className="nav-links">
            {navigation.map(({ label, id }) => (
              <a key={id} href={`#${id}`} className={active === id ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>{label}</a>
            ))}
          </div>
          <a className="button button-small button-green" href={cvPath} download="Amna_Arshad_Professional_CV.pdf" onClick={closeMenu}>
            <ArrowDownToLine size={15} strokeWidth={1.8} /> Download CV
          </a>
        </div>
      </nav>
    </header>
  )
}
