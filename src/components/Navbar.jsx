import { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <nav
      className={`navbar${isOpen ? ' navbar--open' : ''}`}
      aria-label="Main navigation"
    >
      <div className="navbar__bar">
        <a className="navbar__brand" href="#home" onClick={closeMenu}>
          <svg viewBox="0 0 36 36" aria-hidden="true">
            <path d="M29.8 6.2C18 6.4 8.6 9.1 8.6 19.1c0 4.7 3.2 7.9 7.6 7.9 8.4 0 12.9-10.4 13.6-20.8ZM7 29.5c4.2-7.5 9.1-11.4 16.9-15.1" />
          </svg>
          <span>evergreen</span>
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="navbar__toggle-icon" aria-hidden="true">
            {isOpen ? '×' : '☰'}
          </span>
        </button>
      </div>

      <div className="navbar__menu" id="primary-menu">
        <ul className="navbar__links">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a className="navbar__cta" href="#signup" onClick={closeMenu}>
          Create account
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
