import user_image from '../assets/user-image.jpeg'
import dev_icon from '../assets/dev-icon.png'
import code_icon from '../assets/code-icon.png'
import code_icon_dark from '../assets/code-icon-dark.png'
import edu_icon from '../assets/edu-icon.png'
import edu_icon_dark from '../assets/edu-icon-dark.png'
import project_icon from '../assets/project-icon.png'
import project_icon_dark from '../assets/project-icon-dark.png'

const cards = [
  {
    iconLight: code_icon,
    iconDark: code_icon_dark,
    title: 'Languages',
    body: 'TypeScript, JavaScript, Python, SQL, HTML/CSS',
  },
  {
    iconLight: edu_icon,
    iconDark: edu_icon_dark,
    title: 'Education',
    body: 'B.Tech CS (AI & ML) — VIT Bhopal, April 2025',
  },
  {
    iconLight: project_icon,
    iconDark: project_icon_dark,
    title: 'Stack',
    body: 'Next.js, React, Node.js, PostgreSQL, Redis, Prisma, Docker, AWS, Socket.io, Stripe, OpenAI',
  },
]

const tools = [
  { label: 'Next.js',        bg: 'bg-zinc-900 text-white dark:bg-zinc-700' },
  { label: 'Node.js',        bg: 'bg-green-700 text-white' },
  { label: 'PostgreSQL',     bg: 'bg-blue-700 text-white' },
  { label: 'Redis',          bg: 'bg-red-600 text-white' },
  { label: 'Docker',         bg: 'bg-sky-600 text-white' },
  { label: 'AWS EC2 / S3',   bg: 'bg-orange-500 text-white' },
  { label: 'Socket.io',      bg: 'bg-zinc-700 text-white' },
  { label: 'Prisma',         bg: 'bg-indigo-700 text-white' },
  { label: 'Stripe',         bg: 'bg-violet-600 text-white' },
  { label: 'GitHub Actions', bg: 'bg-zinc-600 text-white' },
  { label: 'Postman',        bg: 'bg-orange-600 text-white' },
  { label: 'VSCode',         bg: 'bg-blue-500 text-white' },
]

const About = () => {
  return (
    <section id="about" className="w-full px-[8%] py-24 scroll-mt-20">

      {/* ── section label ── */}
      <p className="text-center text-xs font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 font-Outfit mb-3">
        Introduction
      </p>
      <h2 className="text-center text-4xl sm:text-5xl font-extrabold font-Outfit text-slate-900 dark:text-white mb-16 tracking-tight">
        About me
      </h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-16 lg:gap-20 max-w-6xl mx-auto">

        {/* ── left — photo ── */}
        <div className="flex-shrink-0 relative">
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

        {/* ── right — content ── */}
        <div className="flex-1 min-w-0">
          <p className="text-slate-600 dark:text-zinc-400 font-Outfit leading-8 mb-10 max-w-2xl">
            I'm a Full-Stack Developer and SDE I at{' '}
            <span className="text-violet-600 dark:text-violet-400 font-semibold">Responsenet.org</span>,
            where I build large-scale SaaS platforms, real-time systems, and AI-powered features.
            I've shipped a 62-page multi-tenant volunteer platform, a disaster coordination platform
            integrating 8+ live APIs, and an AI chatbot with RAG and hybrid intent classification —
            all running in production on AWS.
          </p>

          {/* ── stat cards ── */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {cards.map(card => (
              <li
                key={card.title}
                className="rounded-2xl p-5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-darkSurface hover:border-violet-400 dark:hover:border-violet-600 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 cursor-default"
              >
                <img src={card.iconLight} alt="" className="w-6 mb-3 dark:hidden" />
                <img src={card.iconDark}  alt="" className="w-6 mb-3 hidden dark:block" />
                <h3 className="font-semibold text-slate-800 dark:text-white font-Outfit mb-1">{card.title}</h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 font-Outfit leading-relaxed">{card.body}</p>
              </li>
            ))}
          </ul>

          {/* ── tools ── */}
          <p className="text-sm font-semibold text-slate-500 dark:text-zinc-400 font-Outfit uppercase tracking-widest mb-4">
            Tools I use
          </p>
          <ul className="flex flex-wrap gap-2">
            {tools.map(t => (
              <li
                key={t.label}
                className={`${t.bg} text-xs font-semibold px-3 py-1.5 rounded-full hover:-translate-y-0.5 transition-transform duration-200 cursor-default select-none font-Outfit`}
              >
                {t.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
