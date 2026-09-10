import send_icon from '../assets/send-icon.png'
import right_arrow_blod from '../assets/right-arrow-bold.png'
import right_arrow_blod_dark from '../assets/right-arrow-bold-dark.png'
import impactVolunteerImg from '../assets/impactvolunteer-og.png'
import impactMatrixLogo from '../assets/impactmatrix-logo.svg'
import impactMatrixFoundationImg from '../assets/impactmatrixfoundation-og.png'
import responsenetLogo from '../assets/responsenet-logo.png'
import careConnectImg from '../assets/CareConnect.png'
import bgRemoverImg from '../assets/work-4.png'
import Reveal from './Reveal'
import { Section, SectionHeading } from './Section'

/*
 * fit: 'cover'   → full-bleed artwork (screenshots, share images)
 * fit: 'contain' → a logo, padded and centred on its own brand colour
 */
const projects = [
  {
    href: 'https://impactvolunteer.com',
    img: impactVolunteerImg,
    fit: 'cover',
    tag: 'SaaS · Full-Stack',
    title: 'ImpactVolunteer',
    desc: 'Per-seat Stripe billing · QR attendance · 7 roles · Supabase Auth',
    accent: 'from-violet-600 to-indigo-600',
  },
  {
    href: 'https://impactmatrix.com',
    img: impactMatrixLogo,
    fit: 'contain',
    imgBg: 'bg-[#0d1b2a]',
    tag: 'Disaster Tech · Real-Time',
    title: 'ImpactMatrix',
    desc: '8+ live data sources · GPS tracking · Socket.io · Redis trip state',
    accent: 'from-blue-600 to-cyan-600',
  },
  {
    href: 'https://impactmatrixfoundation.org',
    img: impactMatrixFoundationImg,
    fit: 'cover',
    tag: 'Nonprofit · Contributed',
    title: 'ImpactMatrix Foundation',
    desc: 'Foundation site supporting the ImpactMatrix platform',
    accent: 'from-rose-600 to-red-600',
  },
  {
    href: 'https://responsenet.org',
    img: responsenetLogo,
    fit: 'contain',
    imgBg: 'bg-white',
    tag: 'Nonprofit · Contributed',
    title: 'Responsenet.org',
    desc: 'Organisation site for the team I build with',
    accent: 'from-amber-500 to-orange-600',
  },
  {
    href: 'https://frontend-care-connect.vercel.app/',
    img: careConnectImg,
    fit: 'cover',
    tag: 'MERN · Side Project',
    title: 'CareConnect',
    desc: 'Doctor appointment scheduling · multi-role auth',
    accent: 'from-teal-500 to-emerald-600',
  },
  {
    href: 'https://bg-removal-d9bi.vercel.app/',
    img: bgRemoverImg,
    fit: 'cover',
    tag: 'Side Project',
    title: 'BG Remover',
    desc: 'Background removal tool · third-party API · drag & drop',
    accent: 'from-fuchsia-500 to-pink-600',
  },
]

const Work = () => {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="My portfolio"
        title="My latest work"
        subtitle="The first four are work from Responsenet.org. The rest are things I built to learn something new."
      />

      {/* 6 cards → two clean rows of three */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 100} className="h-full">
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-darkSurface hover:border-violet-400/50 dark:hover:border-violet-600/40 hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300"
            >
              {/* artwork */}
              <div className={`relative overflow-hidden h-44 flex-shrink-0 ${p.imgBg || ''}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className={
                    p.fit === 'contain'
                      ? 'w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500'
                      : 'w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500'
                  }
                />

                {/* accent top bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${p.accent}`} />
              </div>

              {/* info row */}
              <div className="px-5 py-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 font-Outfit mb-1.5">
                    {p.tag}
                  </p>
                  <h3 className="font-bold text-slate-800 dark:text-white font-Outfit truncate">{p.title}</h3>
                  {/* reserve two lines so every title in a row sits on one baseline */}
                  <p className="text-xs text-slate-500 dark:text-zinc-400 font-Outfit mt-0.5 leading-snug min-h-[2rem]">{p.desc}</p>
                </div>
                <div className={`w-9 h-9 mt-4 flex-shrink-0 rounded-full bg-gradient-to-br ${p.accent} flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-sm`}>
                  <img src={send_icon} alt="" className="w-3.5 brightness-0 invert" />
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {/* show more */}
      <Reveal delay={120}>
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
      </Reveal>
    </Section>
  )
}

export default Work
