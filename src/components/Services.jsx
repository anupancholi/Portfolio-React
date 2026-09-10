import { useEffect, useRef, useState } from 'react'
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
    short: 'SaaS & Billing',
    title: 'Multi-Tenant SaaS & Subscription Billing',
    desc: 'Per-seat Stripe billing across 6 organisation types, with 30-day trials, annual discounts and seat allotment. Upgrades bill immediately with proration, downgrades apply at period end, and 12 webhook event types are made safe against Stripe’s retries.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Sequelize'],
  },
  {
    Icon: PulseIcon,
    short: 'Real-Time Systems',
    title: 'Real-Time Systems & Infrastructure',
    desc: 'Live shipment tracking over Socket.io — client-side GPS smoothing and a 10-metre server-side filter to drop jitter, with trip state held in Redis so a driver who reloads mid-trip gets their map and route back. Routing from a self-hosted Valhalla service with OSRM fallback.',
    tags: ['Socket.io', 'Redis', 'Firebase', 'Mapbox', 'Node.js'],
  },
  {
    Icon: ShieldIcon,
    short: 'Auth & Deployment',
    title: 'Auth, Access Control & Deployment',
    desc: 'Supabase Auth with Google OAuth and email OTP, role-based access middleware across 7 user types, and Redis-backed rate limiting keyed on email and phone rather than IP alone — so one account can’t be brute-forced from many IPs. Shipped through GitLab CI/CD to AWS EC2.',
    tags: ['Supabase', 'AWS EC2', 'Docker', 'GitLab CI/CD', 'Jest'],
  },
  {
    Icon: QrIcon,
    short: 'Fraud-Resistant QR',
    title: 'Fraud-Resistant Attendance',
    desc: 'QR check-in for volunteer events and multi-day projects, scoped to one session per local calendar day — so a QR photographed on an earlier day stops working on its own. Offline scans queue in the browser and sync on reconnect, with the device clock capped at 48 hours so hours can’t be forged.',
    tags: ['TypeScript', 'PostgreSQL', 'Offline sync', 'Redis'],
  },
]

const AUTOPLAY_MS = 6000
/* px each card sits behind the one in front. A phone has far less room, so the
   desktop peek turned into a big stack of edges under the card. */
const DECK_STEP_DESKTOP = 14
const DECK_STEP_MOBILE = 7
/* Scaling the back cards also lifts their bottom edge, which cancelled most of
   the offset on phones. Drop the scale there and let translateY do the work. */
const DECK_SCALE_DESKTOP = 0.03
const DECK_SCALE_MOBILE = 0

/* How far behind the front card each one sits in the deck. */
const deckStyle = (offset, step, scaleStep) => ({
  transform: `translateY(${offset * step}px) scale(${1 - offset * scaleStep})`,
  opacity: [1, 0.92, 0.82, 0.72][offset] ?? 0.72,
  zIndex: expertise.length - offset,
  pointerEvents: offset === 0 ? 'auto' : 'none',
})

const Services = () => {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [step, setStep] = useState(DECK_STEP_DESKTOP)
  const [scaleStep, setScaleStep] = useState(DECK_SCALE_DESKTOP)
  const reduced = useRef(false)

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  // Tighten the deck offset on small screens.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)')
    const apply = () => {
      setStep(mq.matches ? DECK_STEP_DESKTOP : DECK_STEP_MOBILE)
      setScaleStep(mq.matches ? DECK_SCALE_DESKTOP : DECK_SCALE_MOBILE)
    }
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])


  // Auto-advance, unless the visitor is interacting or prefers reduced motion.
  useEffect(() => {
    if (paused || reduced.current) return
    const t = setInterval(() => setActive(a => (a + 1) % expertise.length), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [paused])

  return (
    <Section
      id="services"
      className="relative bg-zinc-100/70 dark:bg-transparent"
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

      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        {/* ── left — pick a card ── */}
        <Reveal className="lg:col-span-4">
          <ul role="tablist" aria-label="Areas of expertise" className="grid grid-cols-2 lg:grid-cols-1 gap-1.5">
            {expertise.map((item, i) => {
              const on = i === active
              return (
                <li key={item.title}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={on}
                    aria-controls={`expertise-panel-${i}`}
                    onClick={() => setActive(i)}
                    className={`group w-full h-full text-left flex items-center gap-2.5 sm:gap-3 rounded-xl px-3 sm:px-4 py-3 font-Outfit transition-all duration-300 border ${
                      on
                        ? 'bg-white dark:bg-darkSurface border-violet-300 dark:border-violet-700 shadow-card'
                        : 'bg-transparent border-transparent hover:bg-white/60 dark:hover:bg-darkSurface/60 hover:border-zinc-200 dark:hover:border-zinc-800'
                    }`}
                  >
                    <span className={`w-9 h-9 flex-shrink-0 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      on
                        ? 'bg-violet-600 text-white'
                        : 'bg-violet-100 dark:bg-violet-950/50 text-violet-600 dark:text-violet-300'
                    }`}>
                      <item.Icon />
                    </span>
                    <span className={`text-xs sm:text-sm font-semibold leading-snug transition-colors duration-300 ${
                      on ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-zinc-400'
                    }`}>
                      {item.short}
                    </span>

                    {/* autoplay progress on the active row */}
                    {on && (
                      <span className="ml-auto flex-shrink-0 w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </Reveal>

        {/* ── right — deck of cards, active one on top ── */}
        <Reveal delay={120} className="lg:col-span-8">
          {/* Every card shares one grid cell, so the row sizes to the tallest
              and the rest stretch to match. Equal heights are what makes the
              peek consistent — with natural heights, a short card in front hid
              the others entirely while a tall one behind stuck way out.
              The padding leaves room for the offset back cards. */}
          <div className="grid" style={{ paddingBottom: `${(expertise.length - 1) * step}px` }}>
            {expertise.map(({ Icon, ...item }, i) => {
              const offset = (i - active + expertise.length) % expertise.length
              return (
                <div
                  key={item.title}
                  id={`expertise-panel-${i}`}
                  role="tabpanel"
                  aria-hidden={offset !== 0}
                  style={{ gridArea: '1 / 1', ...deckStyle(offset, step, scaleStep) }}
                  className="flex flex-col rounded-2xl p-6 sm:p-7 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-card-hover transition-transform duration-500 ease-out"
                >
                  <div className="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-950/50 text-violet-600 dark:text-violet-300 flex items-center justify-center mb-5">
                    <Icon />
                  </div>

                  <h3 className="font-bold text-slate-800 dark:text-white font-Outfit mb-3 text-lg leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-zinc-400 font-Outfit leading-relaxed mb-6 sm:mb-8">
                    {item.desc}
                  </p>

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
              )
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

export default Services
