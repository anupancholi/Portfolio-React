import profile_img from '../assets/profile-img.jpg'
import right_arrow_white from '../assets/right-arrow-white.png'
import download_icon from '../assets/download-icon.png'

const stats = [
  '2 Production Platforms',
  '106+ REST APIs',
  'AWS · Docker · Redis',
  'OpenAI · RAG · Pinecone',
]

const Header = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* ── background blobs ── */}
      <div className="absolute inset-0 -z-10 dot-grid opacity-60" />
      <div className="absolute -z-10 top-1/4 -left-20 w-[480px] h-[480px] bg-violet-600/8 dark:bg-violet-600/5 rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-1/4 -right-20 w-[400px] h-[400px] bg-indigo-500/8 dark:bg-indigo-500/5 rounded-full blur-3xl" />

      {/* ── company badge ── */}
      <div className="flex items-center gap-2 bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800/50 rounded-full px-4 py-1.5 mb-8">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-semibold text-violet-700 dark:text-violet-300 font-Outfit tracking-wide uppercase">
          SDE I — Currently @ Responsenet.org
        </span>
      </div>

      {/* ── profile image ── */}
      <div className="relative mb-8">
        <div className="gradient-ring shadow-glow">
          <img
            src={profile_img}
            alt="Anurodh Pancholi"
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover block"
          />
        </div>
        {/* availability dot */}
        <span
          className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-darkTheme"
          title="Open to opportunities"
        />
      </div>

      {/* ── greeting ── */}
      <p className="text-slate-500 dark:text-zinc-400 font-Outfit mb-3 flex items-center gap-2 text-base">
        Hi there <img src="./assets/hand-icon.png" alt="" className="w-5 inline" />
      </p>

      {/* ── name ── */}
      <h1 className="font-Outfit font-extrabold text-center tracking-tight leading-none mb-4">
        <span className="text-gradient text-5xl sm:text-7xl lg:text-8xl">Anurodh</span>
        <br />
        <span className="text-slate-900 dark:text-white text-5xl sm:text-7xl lg:text-8xl">Pancholi</span>
      </h1>

      {/* ── role line ── */}
      <p className="text-base sm:text-lg text-slate-500 dark:text-zinc-400 font-Outfit text-center max-w-md mb-10">
        Full-Stack Developer &nbsp;·&nbsp; Building Production-Scale Systems &nbsp;·&nbsp; AI Integrations
      </p>

      {/* ── CTA buttons ── */}
      <div className="flex flex-col sm:flex-row gap-3 mb-16">
        <a
          href="#work"
          className="px-8 py-3 bg-violet-600 hover:bg-violet-700 active:scale-95 text-white rounded-full font-Outfit font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-glow-sm"
        >
          View my work
          <img src={right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="https://drive.google.com/file/d/17OS8i1UM7_hL5hn0mdi5F6QDKY4-36LF/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 active:scale-95 text-slate-800 dark:text-white rounded-full font-Outfit font-semibold transition-all duration-200 flex items-center justify-center gap-2"
        >
          Resume
          <img src={download_icon} alt="" className="w-4" />
        </a>
      </div>

      {/* ── floating stat chips ── */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {stats.map(s => (
          <span
            key={s}
            className="text-xs text-slate-500 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-800 rounded-full px-4 py-1.5 font-Outfit bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm"
          >
            {s}
          </span>
        ))}
      </div>

      {/* ── scroll cue ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-[10px] font-Outfit tracking-widest uppercase text-slate-400">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-violet-400 to-transparent" />
      </div>
    </section>
  )
}

export default Header
