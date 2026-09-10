import profile_img from '../assets/profile-img.jpg'
import right_arrow_white from '../assets/right-arrow-white.png'
import download_icon from '../assets/download-icon.png'
import { Container } from './Section'

const stack = ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io', 'Docker', 'AWS']

const Header = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
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
      <Container className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">

        {/* ── LEFT — text ── */}
        <div className="flex-1 flex flex-col items-start">

          {/* available badge */}
          <div className="rise flex items-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full px-4 py-1.5 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
            <span className="text-xs font-semibold text-slate-600 dark:text-zinc-300 font-Outfit tracking-wide">
              SDE I &nbsp;·&nbsp; Currently @ Responsenet.org
            </span>
          </div>

          {/* ── BIG NAME ── */}
          <h1 className="font-Outfit font-black tracking-tighter leading-[0.88] mb-6 select-none">
            {/* "ANURODH" — hollow outline */}
            <span className="rise text-outline block text-[clamp(3.5rem,9vw,8rem)]" style={{ animationDelay: '90ms' }}>
              ANURODH
            </span>
            {/* "PANCHOLI" — solid gradient fill */}
            <span className="rise text-gradient block text-[clamp(3.5rem,9vw,8rem)]" style={{ animationDelay: '180ms' }}>
              PANCHOLI
            </span>
          </h1>

          {/* role */}
          <p className="rise text-sm sm:text-base text-slate-500 dark:text-zinc-400 font-Outfit mb-8 max-w-md leading-relaxed" style={{ animationDelay: '270ms' }}>
            Full-Stack Developer building multi-tenant SaaS platforms — real-time
            systems, subscription billing, and the backend infrastructure that
            keeps them running in production on AWS.
          </p>

          {/* CTAs */}
          <div className="rise flex flex-wrap gap-3 mb-10" style={{ animationDelay: '360ms' }}>
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
          <div className="rise flex flex-wrap gap-2" style={{ animationDelay: '450ms' }}>
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
        <div className="rise flex-shrink-0 w-full lg:w-[420px]" style={{ animationDelay: '300ms' }}>
        <div className="relative w-full h-[330px] sm:h-[400px] lg:h-[520px] flex items-center justify-center">

          {/* glow ring behind photo */}
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-tr from-violet-500/20 to-indigo-500/20 dark:from-violet-500/15 dark:to-indigo-500/15 blur-2xl animate-glow" />

          {/* profile photo — smaller on phones so the tags have corners to sit in */}
          <div className="gradient-ring shadow-glow z-10 relative">
            <img
              src={profile_img}
              alt="Anurodh Pancholi"
              className="w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover block"
            />
          </div>

          {/* ── Floating card 1 — top right: real-time ── */}
          <div className="float-1 absolute top-0 right-0 sm:top-4 sm:right-4 lg:top-8 lg:right-0 bg-white dark:bg-darkSurface border border-zinc-100 dark:border-zinc-800 rounded-xl sm:rounded-2xl px-2.5 py-2 sm:px-4 sm:py-3 shadow-card z-20 sm:min-w-[150px]">
            <p className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400 font-Outfit mb-0.5">Real-time</p>
            <p className="text-[11px] sm:text-sm font-bold text-slate-800 dark:text-white font-Outfit leading-tight">Live GPS tracking</p>
            <p className="text-[9px] sm:text-xs text-slate-400 dark:text-zinc-500 font-Outfit">Socket.io + Redis</p>
          </div>

          {/* ── Floating card 2 — left: in production ──
              Nudged out to -left-12 on desktop so it clips the edge of the
              photo rather than sitting on top of it. */}
          <div className="float-2 absolute bottom-14 left-0 sm:bottom-auto sm:top-1/2 sm:left-0 lg:-left-12 bg-white dark:bg-darkSurface border border-zinc-100 dark:border-zinc-800 rounded-xl sm:rounded-2xl px-2.5 py-2 sm:px-4 sm:py-3 shadow-card z-20">
            <p className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400 font-Outfit mb-0.5">In production</p>
            <p className="text-[11px] sm:text-sm font-bold text-slate-800 dark:text-white font-Outfit leading-tight">2 SaaS platforms</p>
            <p className="text-[9px] sm:text-xs text-slate-400 dark:text-zinc-500 font-Outfit">live on AWS</p>
          </div>

          {/* ── Floating card 3 — bottom right: open to work ── */}
          <div className="float-3 absolute bottom-0 right-0 sm:bottom-8 sm:right-2 lg:bottom-12 lg:-right-2 bg-white dark:bg-darkSurface border border-zinc-100 dark:border-zinc-800 rounded-xl sm:rounded-2xl px-2.5 py-2 sm:px-4 sm:py-3 shadow-card z-20 sm:min-w-[150px]">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
              <p className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-widest text-green-600 dark:text-green-400 font-Outfit">Available</p>
            </div>
            <p className="text-[10px] sm:text-xs font-semibold text-slate-700 dark:text-zinc-300 font-Outfit leading-tight">Open to new<br/>opportunities</p>
          </div>

          {/* ── Floating card 4 — top left: payments ── */}
          <div className="float-2 absolute top-12 left-0 sm:top-8 sm:left-4 lg:top-14 lg:left-2 bg-violet-600 rounded-xl sm:rounded-2xl px-2.5 py-2 sm:px-4 sm:py-3 shadow-glow-sm z-20">
            <p className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-widest text-violet-200 font-Outfit mb-0.5">Payments</p>
            <p className="text-[11px] sm:text-sm font-bold text-white font-Outfit leading-tight">Stripe billing</p>
            <p className="text-[9px] sm:text-xs text-violet-200/80 font-Outfit">6 organisation types</p>
          </div>

        </div>
        </div>
      </Container>

    </section>
  )
}

export default Header
