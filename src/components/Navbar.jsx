import { useEffect, useRef, useState } from 'react'
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

const Navbar = () => {
  const sideMenuRef = useRef()
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const openMenu  = () => { sideMenuRef.current.style.transform = 'translateX(-16rem)' }
  const closeMenu = () => { sideMenuRef.current.style.transform = 'translateX(16rem)' }

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

    // Scroll listener
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── Desktop nav ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/80 dark:bg-darkTheme/80 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-800/60 shadow-sm'
          : 'py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* Logo / monogram */}
          <a href="#top" className="flex items-center gap-2 group">
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
                  className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/40 transition-all duration-200 font-Outfit"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
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
            <button className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800" onClick={openMenu}>
              <img src={menu_black} alt="" className="w-4 dark:hidden" />
              <img src={menu_white} alt="" className="w-4 hidden dark:block" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile slide-in drawer ── */}
      <div
        ref={sideMenuRef}
        className="fixed top-0 right-0 bottom-0 w-64 z-[100] bg-white dark:bg-darkSurface border-l border-zinc-100 dark:border-zinc-800 shadow-2xl transition-transform duration-400 translate-x-64"
        style={{ transform: 'translateX(16rem)' }}
      >
        <button
          onClick={closeMenu}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-700 flex items-center justify-center"
        >
          <img src={close_black} alt="" className="w-3 dark:hidden" />
          <img src={close_white} alt="" className="w-3 hidden dark:block" />
        </button>

        <div className="pt-20 px-8">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold text-sm">AP</span>
            <span className="font-semibold dark:text-white">Anurodh</span>
          </div>
          <ul className="flex flex-col gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-4 py-2.5 rounded-xl text-slate-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/40 transition-all font-Outfit font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-8 w-full flex items-center justify-center px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-full transition-colors font-Outfit"
          >
            Hire me
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
