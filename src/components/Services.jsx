import Reveal from './Reveal'
import { Section, SectionHeading } from './Section'

/* Inline icons — currentColor keeps them legible in both themes, and each one
   actually matches its card (the old PNGs were a phone and a paint palette). */
const iconProps = {
  width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round',
}

const CardIcon = () => (
  <svg {...iconProps}><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></svg>
)
const PulseIcon = () => (
  <svg {...iconProps}><path d="M2 12h4l3-8 4 16 3-8h6" /></svg>
)
const ShieldIcon = () => (
  <svg {...iconProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
)
const QrIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" /><path d="M14 14h3v3h-3zM20 14v3M14 20h7" />
  </svg>
)

const expertise = [
  {
    Icon: CardIcon,
    title: 'Multi-Tenant SaaS & Subscription Billing',
    desc: 'Per-seat Stripe billing across 6 organisation types, with 30-day trials, annual discounts and seat allotment. Upgrades bill immediately with proration, downgrades apply at period end, and 12 webhook event types are made safe against Stripe’s retries.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Sequelize'],
  },
  {
    Icon: PulseIcon,
    title: 'Real-Time Systems & Infrastructure',
    desc: 'Live shipment tracking over Socket.io — client-side GPS smoothing and a 10-metre server-side filter to drop jitter, with trip state held in Redis so a driver who reloads mid-trip gets their map and route back. Routing from a self-hosted Valhalla service with OSRM fallback.',
    tags: ['Socket.io', 'Redis', 'Firebase', 'Mapbox', 'Node.js'],
  },
  {
    Icon: ShieldIcon,
    title: 'Auth, Access Control & Deployment',
    desc: 'Supabase Auth with Google OAuth and email OTP, role-based access middleware across 7 user types, and Redis-backed rate limiting keyed on email and phone rather than IP alone — so one account can’t be brute-forced from many IPs. Shipped through GitLab CI/CD to AWS EC2.',
    tags: ['Supabase', 'AWS EC2', 'Docker', 'GitLab CI/CD', 'Jest'],
  },
  {
    Icon: QrIcon,
    title: 'Fraud-Resistant Attendance',
    desc: 'QR check-in for volunteer events and multi-day projects, scoped to one session per local calendar day — so a QR photographed on an earlier day stops working on its own. Offline scans queue in the browser and sync on reconnect, with the device clock capped at 48 hours so hours can’t be forged.',
    tags: ['TypeScript', 'PostgreSQL', 'Offline sync', 'Redis'],
  },
]

const Services = () => {
  return (
    <Section
      id="services"
      className="relative bg-zinc-50/60 dark:bg-transparent"
      innerClassName="relative z-10"
    >
      {/* subtle bg gradient */}
      <div
        className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)' }}
      />

      <SectionHeading
        eyebrow="What I build"
        title="My Expertise"
        subtitle="A year of building and maintaining two live platforms. This is where most of that work went."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {expertise.map(({ Icon, ...item }, i) => (
          <Reveal key={item.title} delay={(i % 2) * 110} className="h-full">
            {/* flex column + mt-auto on the tags keeps every tag row on the same
                baseline across a row, whatever the description length */}
            <div className="group relative flex flex-col h-full rounded-2xl p-7 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-darkSurface hover:border-violet-400/60 dark:hover:border-violet-600/40 hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300 cursor-default overflow-hidden">
              {/* hover gradient accent top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-950/50 text-violet-600 dark:text-violet-300 flex items-center justify-center mb-5 flex-shrink-0">
                <Icon />
              </div>

              <h3 className="font-bold text-slate-800 dark:text-white font-Outfit mb-3 text-base leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-zinc-400 font-Outfit leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* tag pills */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
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
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Services
