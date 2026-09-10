import { useEffect, useState } from 'react'
import moon_icon from '../assets/moon_icon.png'
import sun_icon from '../assets/sun_icon.png'
import menu_black from '../assets/menu-black.png'
import menu_white from '../assets/menu-white.png'
import close_black from '../assets/close-black.png'
import close_white from '../assets/close-white.png'

const navLinks = [
  { label: 'Home',      href: '#top' },
  { label: 'About',     href: '#about' },
  { label: 'Expertise', href: '#services' },
  { label: 'Work',      href: '#work' },
  { label: 'Contact',   href: '#contact' },
]

const sectionIds = navLinks.map(l => l.href.slice(1))

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [active, setActive] = useState('top')
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleTheme = () => {
    const html = document.documentElement
    html.classList.toggle('dark')
    const dark = html.classList.contains('dark')
    localStorage.theme = dark ? 'dark' : 'light'
    setIsDark(dark)
  }

  useEffect(() => {
    // Restore saved theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const useDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && prefersDark)
    if (useDark) { document.documentElement.classList.add('dark') }
    else          { document.documentElement.classList.remove('dark') }
    setIsDark(useDark)

    // Scroll listener — condensed navbar, reading progress and active section
    let frame = 0
    const measure = () => {
      frame = 0
      const doc = document.documentElement
      const y = window.scrollY

      setScrolled(y > 40)

      const scrollable = doc.scrollHeight - doc.clientHeight
      setProgress(scrollable > 0 ? Math.min(y / scrollable, 1) : 0)

      // The section that has crossed the upper third of the viewport wins.
      const line = y + window.innerHeight * 0.35
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= line) current = id
      }
      setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Close the drawer on Escape, and stop the page scrolling behind it.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = e => { if (e.key === 'Escape') setMenuOpen(false) }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  return (
    <>
      {/* ── Desktop nav ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/80 dark:bg-darkTheme/80 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-800/60 shadow-sm'
          : 'py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between gap-4">

          {/* Logo / monogram */}
          <a href="#top" className="flex items-center gap-2 group flex-shrink-0">
            <span className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold text-sm font-Outfit select-none">
              AP
            </span>
            <span className="font-semibold text-slate-800 dark:text-white font-Outfit hidden sm:block">
              Anurodh<span className="text-violet-600 dark:text-violet-400"> Pancholi</span>
            </span>
          </a>

          {/* Pill nav — desktop */}
          <ul className={`hidden md:flex items-center gap-1 rounded-full px-3 py-1.5 transition-all duration-300 ${
            scrolled
              ? 'bg-transparent'
              : 'bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-700/50 shadow-sm'
          }`}>
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href.slice(1) ? 'page' : undefined}
                  className={`block px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 font-Outfit ${
                    active === link.href.slice(1)
                      ? 'text-violet-700 dark:text-violet-300 bg-violet-100 dark:bg-violet-950/60'
                      : 'text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/40'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 hover:bg-violet-100 dark:hover:bg-violet-950/50 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark
                ? <img src={sun_icon}  alt="Light mode" className="w-4" />
                : <img src={moon_icon} alt="Dark mode"  className="w-4" />
              }
            </button>

            {/* Hire me button */}
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-2 px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-full transition-colors font-Outfit"
            >
              Hire me
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <img src={menu_black} alt="" className="w-4 dark:hidden" />
              <img src={menu_white} alt="" className="w-4 hidden dark:block" />
            </button>
          </div>
        </div>

        {/* reading progress */}
        <div
          className={`scroll-progress absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-violet-500 to-indigo-500 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transform: `scaleX(${progress})` }}
        />
      </nav>

      {/* ── Mobile drawer backdrop ── */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`md:hidden fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* ── Mobile slide-in drawer ──
          Anchored at right-0 and slid out by its own width, so open is simply
          translate-x-0. (It used to open to translateX(-16rem), which pushed it
          a full width past the left edge and cut every link in half.) */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 right-0 bottom-0 w-72 max-w-[85vw] z-[100] bg-white dark:bg-darkSurface border-l border-zinc-100 dark:border-zinc-800 shadow-2xl transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-700 flex items-center justify-center"
        >
          <img src={close_black} alt="" className="w-3 dark:hidden" />
          <img src={close_white} alt="" className="w-3 hidden dark:block" />
        </button>

        <div className="pt-20 px-6">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold text-sm">AP</span>
            <span className="font-semibold dark:text-white font-Outfit">Anurodh</span>
          </div>
          <ul className="flex flex-col gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === link.href.slice(1) ? 'page' : undefined}
                  className={`block px-4 py-3 rounded-xl transition-all font-Outfit font-medium ${
                    active === link.href.slice(1)
                      ? 'text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-950/40'
                      : 'text-slate-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/40'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-8 w-full flex items-center justify-center px-5 py-3 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-full transition-colors font-Outfit"
          >
            Hire me
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
