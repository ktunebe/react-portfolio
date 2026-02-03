import React from "react"
import { Link } from "react-router-dom"

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
]

export default function Nav({ scrollToSection }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const menuRef = React.useRef(null)

  function closeMenu() {
    setIsOpen(false)
  }

  function toggleMenu() {
    setIsOpen((v) => !v)
  }

  // Close on outside click
  React.useEffect(() => {
    function onMouseDown(e) {
      if (!isOpen) return
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu()
      }
    }

    function onKeyDown(e) {
      if (e.key === "Escape") closeMenu()
    }

    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("keydown", onKeyDown)

    return () => {
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen])

  function handleAnchorClick(href) {
    scrollToSection(href.slice(1))
    closeMenu()
  }

  const linkBase =
    "w-full rounded-lg px-3 py-2 text-left text-text-primary hover:bg-primary-400/15 transition"

  return (
    <nav className="relative" ref={menuRef}>
      {/* Mobile: hamburger */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          className="inline-flex items-center justify-center rounded-full border border-primary-400/30 bg-bg-3/60 p-2 text-text-primary backdrop-blur hover:bg-bg-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {isOpen && (
          <div
            id="mobile-nav-menu"
            className="absolute right-0 mt-2 w-40 overflow-hidden rounded-2xl border border-primary-400/25 bg-bg-3/80 p-2 backdrop-blur shadow-lg z-50"
          >
            {navItems.map((navItem) => {
              const isAnchor = navItem.href.startsWith("#")

              return isAnchor ? (
                <button
                  key={navItem.href}
                  type="button"
                  onClick={() => handleAnchorClick(navItem.href)}
                  className={linkBase}
                >
                  {navItem.label}
                </button>
              ) : (
    <div key={navItem.href} className="mt-2 border-t border-primary-400/20 pt-2">
      <Link
        to={navItem.href}
        onClick={closeMenu}
        className="block rounded-full bg-primary-600/80 px-3 py-2 text-center"
      >
        {navItem.label}
      </Link>
    </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Desktop: inline */}
      <div className="hidden md:flex items-center gap-3">
        {navItems.map((navItem) => {
          const isAnchor = navItem.href.startsWith("#")

          return isAnchor ? (
            <button
              key={navItem.href}
              type="button"
              onClick={() => scrollToSection(navItem.href.slice(1))}
              className="rounded-full px-3 py-2 text-text-primary hover:bg-primary-400/15 transition"
            >
              {navItem.label}
            </button>
          ) : (
                <Link
                  key={navItem.href}
                  to={navItem.href}
                  onClick={closeMenu}
                  className="bg-primary-600/80 rounded-full px-3 py-2"
                >
                  {navItem.label}
                </Link>
          )
        })}
      </div>
    </nav>
  )
}




