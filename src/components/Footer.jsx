const Footer = () => {
  return (
    <footer className="w-full px-[8%] py-10 border-t border-zinc-100 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* left — monogram + name */}
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold text-xs font-Outfit select-none">
            AP
          </span>
          <span className="text-sm font-semibold text-slate-700 dark:text-zinc-300 font-Outfit">
            Anurodh Pancholi
          </span>
        </a>

        {/* center — copyright */}
        <p className="text-xs text-slate-400 dark:text-zinc-500 font-Outfit">
          © {new Date().getFullYear()} Anurodh Pancholi. All rights reserved.
        </p>

        {/* right — social links */}
        <ul className="flex items-center gap-5">
          <li>
            <a
              href="https://github.com/anupancholi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-slate-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-Outfit"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/anurodh-pancholi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-slate-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-Outfit"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:pancholianurodh@gmail.com"
              className="text-xs font-semibold text-slate-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-Outfit"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
