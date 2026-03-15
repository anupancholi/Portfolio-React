import web_icon from '../assets/web-icon.png'
import mobile_icon from '../assets/mobile-icon.png'
import ui_icon from '../assets/ui-icon.png'

const expertise = [
  {
    icon: web_icon,
    title: 'Full-Stack SaaS Development',
    desc: 'Multi-tenant platforms with role-based dashboards, 100+ REST API routes, Stripe subscription billing with webhooks, and GitLab CI/CD pipelines to AWS EC2.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Stripe'],
  },
  {
    icon: mobile_icon,
    title: 'Backend & Real-Time Infrastructure',
    desc: 'Redis caching with pattern-based invalidation, Socket.io real-time systems, GPS tracking with 2,000-point trajectories, BullMQ job queues, and rate limiting.',
    tags: ['Redis', 'Socket.io', 'Docker', 'Nginx', 'AWS S3'],
  },
  {
    icon: ui_icon,
    title: 'AI Integration & RAG Systems',
    desc: 'Chatbots with hybrid intent classification (pattern + GPT), Retrieval-Augmented Generation via Pinecone vector DB, 7 role-specific bots with context-aware responses.',
    tags: ['OpenAI', 'Pinecone', 'RAG', 'TypeScript', 'LangChain'],
  },
]

const Services = () => {
  return (
    <section id="services" className="w-full px-[8%] py-24 scroll-mt-20 bg-zinc-50/60 dark:bg-transparent">

      {/* subtle bg gradient */}
      <div className="absolute left-0 right-0 h-full -z-10 opacity-40 dark:opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)' }}
      />

      {/* ── section label ── */}
      <p className="text-center text-xs font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 font-Outfit mb-3">
        What I build
      </p>
      <h2 className="text-center text-4xl sm:text-5xl font-extrabold font-Outfit text-slate-900 dark:text-white mb-4 tracking-tight">
        My Expertise
      </h2>
      <p className="text-center max-w-xl mx-auto text-slate-500 dark:text-zinc-400 font-Outfit mb-16 text-sm leading-relaxed">
        I ship production-grade systems — not just demos. Every project I build handles real traffic,
        real users, and real infrastructure challenges.
      </p>

      <div className="grid grid-cols-auto-sm gap-6 max-w-6xl mx-auto" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {expertise.map((item) => (
          <div
            key={item.title}
            className="group relative rounded-2xl p-7 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-darkSurface hover:border-violet-400/60 dark:hover:border-violet-600/40 hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300 cursor-default overflow-hidden"
          >
            {/* hover gradient accent top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-950/50 flex items-center justify-center mb-5">
              <img src={item.icon} alt="" className="w-5" />
            </div>

            <h3 className="font-bold text-slate-800 dark:text-white font-Outfit mb-3 text-base leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-zinc-400 font-Outfit leading-relaxed mb-5">
              {item.desc}
            </p>

            {/* tag pills */}
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border border-violet-100 dark:border-violet-800/40 font-Outfit"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
