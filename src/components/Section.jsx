import Reveal from './Reveal'

/**
 * One content width and one gutter scale for the whole page.
 *
 * Sections previously mixed max-w-7xl / 6xl / 5xl with a percentage gutter
 * (px-[8%]), so no two sections shared a left or right content edge and the
 * gutter grew with the viewport. Everything routes through Container now.
 */
export const Container = ({ className = '', children }) => (
  <div className={`w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 ${className}`}>
    {children}
  </div>
)

/** Full-bleed section (so backgrounds span edge to edge) with contained content. */
export const Section = ({ id, className = '', innerClassName = '', children }) => (
  <section id={id} className={`w-full py-24 scroll-mt-24 ${className}`}>
    <Container className={innerClassName}>{children}</Container>
  </section>
)

/** Eyebrow + title + optional subtitle, with the same vertical rhythm every time. */
export const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <div className="text-center mb-16">
    <Reveal>
      <p className="text-xs font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 font-Outfit">
        {eyebrow}
      </p>
    </Reveal>
    <Reveal delay={80}>
      <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold font-Outfit text-slate-900 dark:text-white tracking-tight">
        {title}
      </h2>
    </Reveal>
    {subtitle && (
      <Reveal delay={140}>
        <p className="mt-4 max-w-xl mx-auto text-slate-500 dark:text-zinc-400 font-Outfit text-sm leading-relaxed">
          {subtitle}
        </p>
      </Reveal>
    )}
  </div>
)
