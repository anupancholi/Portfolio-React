import send_icon from '../assets/send-icon.png'
import right_arrow_blod from '../assets/right-arrow-bold.png'
import right_arrow_blod_dark from '../assets/right-arrow-bold-dark.png'
import impactVolunteerImg from '../assets/impact-volunteer-local.png'
import impactMatrixImg from '../assets/impact-matrix.jpg'
import careConnectImg from '../assets/CareConnect.png'
import bgRemoverImg from '../assets/work-4.png'

const projects = [
  {
    href: 'https://impactvolunteer.com',
    img: impactVolunteerImg,
    tag: 'SaaS · Full-Stack',
    title: 'ImpactVolunteer',
    desc: '7 roles · 62 pages · 106 REST APIs · AI chatbot with RAG',
    accent: 'from-violet-600 to-indigo-600',
  },
  {
    href: 'https://impactmatrix.com',
    img: impactMatrixImg,
    tag: 'Disaster Tech · Real-Time',
    title: 'ImpactMatrix',
    desc: '8+ live APIs · GPS tracking · Socket.io · Redis state machine',
    accent: 'from-blue-600 to-cyan-600',
  },
  {
    href: 'https://frontend-care-connect.vercel.app/',
    img: careConnectImg,
    tag: 'MERN · Healthcare',
    title: 'CareConnect',
    desc: 'Doctor appointment scheduling · multi-role auth',
    accent: 'from-teal-500 to-emerald-600',
  },
  {
    href: 'https://bg-removal-d9bi.vercel.app/',
    img: bgRemoverImg,
    tag: 'AI SaaS',
    title: 'BG Remover',
    desc: 'Full-stack AI background removal · drag & drop',
    accent: 'from-rose-500 to-pink-600',
  },
]

const Work = () => {
  return (
    <section id="work" className="w-full px-[8%] py-24 scroll-mt-20">

      {/* ── section label ── */}
      <p className="text-center text-xs font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 font-Outfit mb-3">
        My portfolio
      </p>
      <h2 className="text-center text-4xl sm:text-5xl font-extrabold font-Outfit text-slate-900 dark:text-white mb-4 tracking-tight">
        My latest work
      </h2>
      <p className="text-center max-w-xl mx-auto text-slate-500 dark:text-zinc-400 font-Outfit mb-16 text-sm leading-relaxed">
        Production-grade systems built at scale — multi-tenant SaaS platforms, real-time disaster
        coordination tools, AI-powered chatbots, and full-stack applications.
      </p>

      <div className="grid grid-cols-auto gap-6 max-w-6xl mx-auto">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-darkSurface hover:border-violet-400/50 dark:hover:border-violet-600/40 hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300"
          >
            {/* image */}
            <div className="relative overflow-hidden h-48">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* accent top bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${p.accent}`} />

              {/* tag pill */}
              <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full font-Outfit border border-white/10">
                {p.tag}
              </span>
            </div>

            {/* info row */}
            <div className="px-5 py-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-bold text-slate-800 dark:text-white font-Outfit truncate">{p.title}</h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 font-Outfit mt-0.5 leading-snug">{p.desc}</p>
              </div>
              <div className={`w-9 h-9 flex-shrink-0 rounded-full bg-gradient-to-br ${p.accent} flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-sm`}>
                <img src={send_icon} alt="" className="w-3.5 brightness-0 invert" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* show more */}
      <a
        href="https://github.com/anupancholi"
        target="_blank"
        rel="noopener noreferrer"
        className="w-max flex items-center gap-2 mx-auto mt-14 px-8 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 text-sm font-semibold font-Outfit hover:bg-violet-50 dark:hover:bg-violet-950/30 hover:border-violet-400 dark:hover:border-violet-600 transition-all duration-200"
      >
        View all on GitHub
        <img src={right_arrow_blod} alt="" className="w-3.5 dark:hidden" />
        <img src={right_arrow_blod_dark} alt="" className="w-3.5 hidden dark:block" />
      </a>
    </section>
  )
}

export default Work
