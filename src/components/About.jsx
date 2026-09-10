import user_image from '../assets/user-image.jpeg'
import dev_icon from '../assets/dev-icon.png'
import code_icon from '../assets/code-icon.png'
import code_icon_dark from '../assets/code-icon-dark.png'
import edu_icon from '../assets/edu-icon.png'
import edu_icon_dark from '../assets/edu-icon-dark.png'
import project_icon from '../assets/project-icon.png'
import project_icon_dark from '../assets/project-icon-dark.png'
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
    body: 'B.Tech, Computer Science (AI & ML) — VIT Bhopal, April 2025',
  },
  {
    iconLight: project_icon,
    iconDark: project_icon_dark,
    title: 'Focus',
    body: 'Backend & real-time systems — Node.js, PostgreSQL, Redis, Socket.io, Stripe',
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

const About = () => {
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
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-white dark:bg-darkSurface rounded-full shadow-glow flex items-center justify-center border border-zinc-100 dark:border-zinc-800">
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
          <Reveal delay={160}>
            <p className="text-slate-600 dark:text-zinc-400 font-Outfit leading-8 mb-5 max-w-2xl">
              I&apos;m a Full-Stack Developer and SDE I at{' '}
              <span className="text-violet-600 dark:text-violet-400 font-semibold">Responsenet.org</span>,
              working on two production multi-tenant SaaS platforms — a disaster coordination
              and humanitarian logistics platform, and a volunteer management platform used by
              nonprofits, corporates and government bodies.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="text-slate-600 dark:text-zinc-400 font-Outfit leading-8 mb-5 max-w-2xl">
              Most of my work sits on the backend: real-time tracking over Socket.io and Redis,
              per-seat Stripe billing, role-based access across 7 user types, and keeping two
              products&apos; databases in sync. I work in a small Agile team — daily standups, sprint
              planning and code reviews — and everything I build gets deployed and maintained,
              not just demoed.
            </p>
          </Reveal>

          {/* publication */}
          <Reveal delay={260}>
            <p className="text-sm text-slate-500 dark:text-zinc-500 font-Outfit mb-10 max-w-2xl">
              <span className="font-semibold text-slate-600 dark:text-zinc-400">Published:</span>{' '}
              <span className="italic">WebPedia 2.0 — Automating Knowledge Curation with Generative AI</span>, IJFMR.
            </p>
          </Reveal>

          {/* ── info cards ── */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {cards.map((card, i) => (
              <Reveal as="li" key={card.title} delay={280 + i * 90}>
                <div className="h-full rounded-2xl p-5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-darkSurface hover:border-violet-400 dark:hover:border-violet-600 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 cursor-default">
                  <img src={card.iconLight} alt="" className="w-6 mb-3 dark:hidden" />
                  <img src={card.iconDark}  alt="" className="w-6 mb-3 hidden dark:block" />
                  <h3 className="font-semibold text-slate-800 dark:text-white font-Outfit mb-1">{card.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 font-Outfit leading-relaxed">{card.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          {/* ── stack ── */}
          <Reveal delay={120}>
            <p className="text-sm font-semibold text-slate-500 dark:text-zinc-400 font-Outfit uppercase tracking-widest mb-4">
              Stack I build with
            </p>
            <ul className="flex flex-wrap gap-2 mb-8">
              {stack.map(t => (
                <li
                  key={t.label}
                  className={`${t.bg} text-xs font-semibold px-3 py-1.5 rounded-full hover:-translate-y-0.5 transition-transform duration-200 cursor-default select-none font-Outfit`}
                >
                  {t.label}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* ── everyday tooling ── */}
          <Reveal delay={160}>
            <p className="text-sm font-semibold text-slate-500 dark:text-zinc-400 font-Outfit uppercase tracking-widest mb-4">
              Day-to-day
            </p>
            <ul className="flex flex-wrap gap-2">
              {daily.map(t => (
                <li
                  key={t}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 bg-white dark:bg-darkSurface hover:-translate-y-0.5 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-200 cursor-default select-none font-Outfit"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

export default About
