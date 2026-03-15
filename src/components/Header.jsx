import profile_img from '../assets/profile-img.jpg'
import right_arrow_white from '../assets/right-arrow-white.png'
import download_icon from '../assets/download-icon.png'

const stack = ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Socket.io']

const Header = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-[8%] pt-24 pb-12 overflow-hidden"
    >
      {/* ── background ── */}
      <div className="absolute inset-0 -z-10 dot-grid opacity-50" />
      {/* left glow */}
      <div className="absolute -z-10 top-1/3 -left-32 w-[500px] h-[500px] bg-violet-500/10 dark:bg-violet-500/6 rounded-full blur-3xl pointer-events-none" />
      {/* right glow */}
      <div className="absolute -z-10 bottom-1/4 right-0 w-[400px] h-[400px] bg-indigo-500/8 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* ════════════════════════════════════════
          SPLIT LAYOUT
      ════════════════════════════════════════ */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-6">

        {/* ── LEFT — text ── */}
        <div className="flex-1 flex flex-col items-start">

          {/* available badge */}
          <div className="flex items-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full px-4 py-1.5 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
            <span className="text-xs font-semibold text-slate-600 dark:text-zinc-300 font-Outfit tracking-wide">
              SDE I &nbsp;·&nbsp; Currently @ Responsenet.org
            </span>
          </div>

          {/* ── BIG NAME ── */}
          <h1 className="font-Outfit font-black tracking-tighter leading-[0.88] mb-6 select-none">
            {/* "ANURODH" — hollow outline */}
            <span className="text-outline block text-[clamp(3.5rem,9vw,8rem)]">
              ANURODH
            </span>
            {/* "PANCHOLI" — solid gradient fill */}
            <span className="text-gradient block text-[clamp(3.5rem,9vw,8rem)]">
              PANCHOLI
            </span>
          </h1>

          {/* role */}
          <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 font-Outfit mb-8 max-w-sm leading-relaxed">
            Full-Stack Developer building production-scale SaaS platforms,
            real-time infrastructure, and AI-powered systems — all shipped on AWS.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#work"
              className="px-7 py-3 bg-violet-600 hover:bg-violet-700 active:scale-95 text-white rounded-full font-Outfit font-semibold transition-all duration-200 flex items-center gap-2 shadow-glow-sm text-sm"
            >
              View my work
              <img src={right_arrow_white} alt="" className="w-3.5" />
            </a>
            <a
              href="https://drive.google.com/file/d/1wc_9KM9p14XBBJXpPnprET58ilS0utCh/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 active:scale-95 text-slate-800 dark:text-white rounded-full font-Outfit font-semibold transition-all duration-200 flex items-center gap-2 text-sm"
            >
              Resume
              <img src={download_icon} alt="" className="w-3.5" />
            </a>
          </div>

          {/* tech stack row */}
          <div className="flex flex-wrap gap-2">
            {stack.map(s => (
              <span
                key={s}
                className="text-[11px] font-medium text-slate-500 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-800 rounded-md px-2.5 py-1 font-Outfit bg-white/70 dark:bg-zinc-900/70"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT — photo + floating cards ── */}
        <div className="flex-shrink-0 relative w-full lg:w-[460px] h-[420px] lg:h-[560px] flex items-center justify-center">

          {/* glow ring behind photo */}
          <div className="absolute w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-tr from-violet-500/20 to-indigo-500/20 dark:from-violet-500/15 dark:to-indigo-500/15 blur-2xl animate-glow" />

          {/* profile photo */}
          <div className="gradient-ring shadow-glow z-10 relative">
            <img
              src={profile_img}
              alt="Anurodh Pancholi"
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover block"
            />
          </div>

          {/* ── Floating card 1 — top right: role ── */}
          <div className="float-1 absolute top-4 right-4 lg:top-8 lg:right-0 bg-white dark:bg-darkSurface border border-zinc-100 dark:border-zinc-800 rounded-2xl px-4 py-3 shadow-card z-20 min-w-[140px]">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400 font-Outfit mb-0.5">Role</p>
            <p className="text-sm font-bold text-slate-800 dark:text-white font-Outfit leading-tight">SDE I</p>
            <p className="text-xs text-slate-400 dark:text-zinc-500 font-Outfit">@ Responsenet.org</p>
          </div>

          {/* ── Floating card 2 — left middle: stats ── */}
          <div className="float-2 absolute top-1/2 -translate-y-1/2 left-0 lg:-left-4 bg-white dark:bg-darkSurface border border-zinc-100 dark:border-zinc-800 rounded-2xl px-4 py-3 shadow-card z-20">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400 font-Outfit mb-1">Production</p>
            <div className="flex gap-4">
              <div>
                <p className="text-xl font-black text-slate-900 dark:text-white font-Outfit leading-none">106+</p>
                <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-Outfit">REST APIs</p>
              </div>
              <div>
                <p className="text-xl font-black text-slate-900 dark:text-white font-Outfit leading-none">62</p>
                <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-Outfit">Pages</p>
              </div>
            </div>
          </div>

          {/* ── Floating card 3 — bottom right: open to work ── */}
          <div className="float-3 absolute bottom-8 right-2 lg:bottom-12 lg:-right-2 bg-white dark:bg-darkSurface border border-zinc-100 dark:border-zinc-800 rounded-2xl px-4 py-3 shadow-card z-20 min-w-[150px]">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-[10px] font-semibold uppercase tracking-widest text-green-600 dark:text-green-400 font-Outfit">Available</p>
            </div>
            <p className="text-xs font-semibold text-slate-700 dark:text-zinc-300 font-Outfit leading-tight">Open to new<br/>opportunities</p>
          </div>

          {/* ── Floating card 4 — top left: platform badge ── */}
          <div className="float-2 absolute top-8 left-4 lg:top-14 lg:left-2 bg-violet-600 rounded-2xl px-4 py-3 shadow-glow-sm z-20">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-violet-200 font-Outfit mb-0.5">Built &amp; Shipped</p>
            <p className="text-sm font-bold text-white font-Outfit leading-tight">2 Platforms<br/>on AWS</p>
          </div>

        </div>
      </div>

      {/* ── scroll cue ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
        <span className="text-[9px] font-Outfit tracking-[0.2em] uppercase text-slate-400">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-violet-400 to-transparent" />
      </div>
    </section>
  )
}

export default Header
