import user_image from '../assets/user-image.jpeg'
import dev_icon from '../assets/dev-icon.png'
import code_icon from '../assets/code-icon.png'
import code_icon_dark from '../assets/code-icon-dark.png'
import edu_icon from '../assets/edu-icon.png'
import edu_icon_dark from '../assets/edu-icon-dark.png'
import project_icon from '../assets/project-icon.png'
import project_icon_dark from '../assets/project-icon-dark.png'
import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import { Section, SectionHeading } from './Section'

const cards = [
  {
    iconLight: code_icon,
    iconDark: code_icon_dark,
    title: 'Languages',
    body: 'TypeScript, JavaScript, SQL, HTML/CSS',
  },
  {
    iconLight: edu_icon,
    iconDark: edu_icon_dark,
    title: 'Education',
    body: 'B.Tech CS (AI & ML) — VIT Bhopal, 2025',
  },
  {
    iconLight: project_icon,
    iconDark: project_icon_dark,
    title: 'Focus',
    body: 'Backend & real-time systems',
  },
]

/* Tech I actually build with, per the stack in production today */
const stack = [
  { label: 'TypeScript',   bg: 'bg-blue-600 text-white' },
  { label: 'Next.js',      bg: 'bg-zinc-900 text-white dark:bg-zinc-700' },
  { label: 'React',        bg: 'bg-sky-500 text-white' },
  { label: 'Tailwind CSS', bg: 'bg-teal-500 text-white' },
  { label: 'Node.js',      bg: 'bg-green-700 text-white' },
  { label: 'Express',      bg: 'bg-zinc-700 text-white' },
  { label: 'PostgreSQL',   bg: 'bg-blue-700 text-white' },
  { label: 'Redis',        bg: 'bg-red-600 text-white' },
  { label: 'Sequelize',    bg: 'bg-cyan-700 text-white' },
  { label: 'Supabase',     bg: 'bg-emerald-600 text-white' },
  { label: 'Firebase',     bg: 'bg-amber-500 text-white' },
  { label: 'Socket.io',    bg: 'bg-zinc-800 text-white dark:bg-zinc-600' },
  { label: 'Stripe',       bg: 'bg-violet-600 text-white' },
  { label: 'Docker',       bg: 'bg-sky-600 text-white' },
  { label: 'AWS EC2 / S3', bg: 'bg-orange-500 text-white' },
  { label: 'Nginx',        bg: 'bg-green-600 text-white' },
  { label: 'Jest',         bg: 'bg-rose-600 text-white' },
]

/* Everyday workflow — kept separate so it reads as tooling, not engineering claims */
const daily = ['Git', 'GitLab CI/CD', 'PM2', 'Postman', 'VS Code', 'Claude Code', 'Cursor']

/* One shell for all three blocks — h-full makes them stretch to a common
   height instead of ending at three different depths. */
const Panel = ({ label, children }) => (
  <div className="h-full flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-darkSurface p-5">
    <p className="text-[10px] font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 font-Outfit mb-4">
      {label}
    </p>
    {children}
  </div>
)

/* Panel content only depends on module-level data, so it lives out here —
   rebuilding it each render made the carousel effect churn its deps. */
const panels = [
  {
    tab: 'Quick facts',
    label: 'Quick facts',
    span: 'md:col-span-4',
    content: (
      <dl className="divide-y divide-zinc-100 dark:divide-zinc-800">
        {cards.map(card => (
          <div key={card.title} className="flex items-start gap-3 py-2.5 first:pt-0 last:pb-0">
            <span className="w-7 h-7 mt-0.5 flex-shrink-0 rounded-md bg-violet-50 dark:bg-violet-950/50 flex items-center justify-center">
              <img src={card.iconLight} alt="" className="h-3.5 w-auto object-contain dark:hidden" />
              <img src={card.iconDark}  alt="" className="h-3.5 w-auto object-contain hidden dark:block" />
            </span>
            <div className="min-w-0">
              <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 font-Outfit">
                {card.title}
              </dt>
              <dd className="text-xs text-slate-600 dark:text-zinc-300 font-Outfit leading-relaxed mt-0.5">
                {card.body}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    ),
  },
  {
    tab: 'Stack',
    label: 'Stack I build with',
    span: 'md:col-span-5',
    content: (
      <ul className="flex flex-wrap gap-1.5 content-start">
        {stack.map(t => (
          <li
            key={t.label}
            className={`${t.bg} text-[11px] font-semibold px-2.5 py-1 rounded-full hover:-translate-y-0.5 transition-transform duration-200 cursor-default select-none font-Outfit`}
          >
            {t.label}
          </li>
        ))}
      </ul>
    ),
  },
  {
    tab: 'Day-to-day',
    label: 'Day-to-day',
    span: 'md:col-span-3',
    content: (
      <ul className="flex flex-wrap gap-1.5 content-start">
        {daily.map(t => (
          <li
            key={t}
            className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-700 text-slate-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/60 hover:-translate-y-0.5 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-200 cursor-default select-none font-Outfit"
          >
            {t}
          </li>
        ))}
      </ul>
    ),
  },
]

const About = () => {
  const [expanded, setExpanded] = useState(false)
  const [panel, setPanel] = useState(0)
  const [panelPaused, setPanelPaused] = useState(false)

  // Auto-advance the phone carousel only — on md+ every panel is already visible.
  useEffect(() => {
    if (panelPaused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(min-width: 768px)').matches) return
    const t = setInterval(() => setPanel(p => (p + 1) % panels.length), 5000)
    return () => clearInterval(t)
  }, [panelPaused])


  return (
    <Section id="about">
      <SectionHeading eyebrow="Introduction" title="About me" />

      {/* Photo top-aligns with the text on wide screens — centring it against a
          much taller column left it floating in the middle of nowhere. */}
      <div className="flex w-full flex-col lg:flex-row items-center lg:items-start gap-14 lg:gap-16">

        {/* ── left — photo ── */}
        <Reveal delay={100} className="flex-shrink-0 lg:pt-1">
          <div className="relative">
            <div className="relative w-64 sm:w-72">
              <img
                src={user_image}
                alt="Anurodh Pancholi"
                className="w-full rounded-3xl object-cover shadow-card-hover"
              />
              {/* gradient border overlay effect */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-violet-500/20" />
            </div>

            {/* circular SVG badge */}
            <div className="absolute -bottom-7 -right-7 w-24 h-24 bg-white dark:bg-darkSurface rounded-full shadow-glow flex items-center justify-center border-2 border-zinc-100 dark:border-zinc-800">
              <svg viewBox="0 0 100 100" className="w-full animate-spin_slow absolute" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path id="circle-path-about" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                </defs>
                <text fontSize="11.5" fill="#7c3aed" fontFamily="sans-serif" letterSpacing="2" fontWeight="600">
                  <textPath href="#circle-path-about">Full Stack ✦ SDE I ✦ </textPath>
                </text>
              </svg>
              <img src={dev_icon} alt="" className="w-8 relative z-10" />
            </div>
          </div>
        </Reveal>

        {/* ── right — content ── */}
        <div className="flex-1 min-w-0">
          {/* On phones the intro runs long, so collapse it behind a toggle.
              Desktop keeps the full text — sm: clears every clamp. */}
          <Reveal delay={160}>
            <div
              id="about-intro"
              className={`relative overflow-hidden sm:overflow-visible transition-[max-height] duration-500 ease-out ${
                expanded ? 'max-h-[60rem]' : 'max-h-[10rem]'
              } sm:max-h-none`}
            >
              <p className="text-slate-600 dark:text-zinc-400 font-Outfit leading-8 mb-5 max-w-2xl">
                I&apos;m a Full-Stack Developer and SDE I at{' '}
                <span className="text-violet-600 dark:text-violet-400 font-semibold">Responsenet.org</span>,
                working on two production multi-tenant SaaS platforms — a disaster coordination
                and humanitarian logistics platform, and a volunteer management platform used by
                nonprofits, corporates and government bodies.
              </p>

              <p className="text-slate-600 dark:text-zinc-400 font-Outfit leading-8 mb-5 max-w-2xl">
                Most of my work sits on the backend: real-time tracking over Socket.io and Redis,
                per-seat Stripe billing, role-based access across 7 user types, and keeping two
                products&apos; databases in sync. I work in a small Agile team — daily standups, sprint
                planning and code reviews — and everything I build gets deployed and maintained,
                not just demoed.
              </p>

              <p className="text-sm text-slate-500 dark:text-zinc-500 font-Outfit max-w-2xl">
                <span className="font-semibold text-slate-600 dark:text-zinc-400">Published:</span>{' '}
                <span className="italic">WebPedia 2.0 — Automating Knowledge Curation with Generative AI</span>, IJFMR.
              </p>

              {/* fade only while collapsed, and only on phones */}
              {!expanded && (
                <div className="sm:hidden absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white dark:from-darkTheme to-transparent pointer-events-none" />
              )}
            </div>

            <button
              type="button"
              onClick={() => setExpanded(v => !v)}
              aria-expanded={expanded}
              aria-controls="about-intro"
              className="sm:hidden mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400 font-Outfit"
            >
              {expanded ? 'Show less' : 'Read more'}
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </Reveal>
        </div>
      </div>

      {/* Mobile shows one panel at a time behind three tabs (three stacked
          panels made for a lot of scrolling); md+ shows all three side by side. */}
      <div
        className="mt-14"
        onMouseEnter={() => setPanelPaused(true)}
        onMouseLeave={() => setPanelPaused(false)}
        onFocusCapture={() => setPanelPaused(true)}
        onBlurCapture={() => setPanelPaused(false)}
      >
        {/* tabs — phones only */}
        <div role="tablist" aria-label="About details" className="md:hidden grid grid-cols-3 gap-1.5 mb-4">
          {panels.map((b, i) => (
            <button
              key={b.label}
              type="button"
              role="tab"
              aria-selected={i === panel}
              aria-controls={`about-panel-${i}`}
              onClick={() => setPanel(i)}
              className={`rounded-xl px-2 py-2.5 text-[11px] font-semibold font-Outfit leading-tight border transition-all duration-300 ${
                i === panel
                  ? 'bg-violet-600 text-white border-violet-600 shadow-glow-sm'
                  : 'bg-white dark:bg-darkSurface text-slate-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800'
              }`}
            >
              {b.tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
          {panels.map((b, i) => (
            <Reveal
              key={b.label}
              delay={i * 100}
              className={`${b.span} h-full ${i === panel ? '' : 'hidden md:block'}`}
            >
              <div id={`about-panel-${i}`} role="tabpanel" className="h-full">
                <Panel label={b.label}>{b.content}</Panel>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default About
