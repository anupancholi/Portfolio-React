import { useEffect, useState } from 'react'
import right_arrow_white from '../assets/right-arrow-white.png'
import mail_icon from '../assets/mail_icon.png'
import mail_icon_dark from '../assets/mail_icon_dark.png'

const Contact = () => {
  const [result, setResult] = useState('')
  const [sending, setSending] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    const hCaptcha = event.target.querySelector('textarea[name=h-captcha-response]')?.value
    if (!hCaptcha) {
      setResult('Please complete the captcha.')
      return
    }
    setSending(true)
    setResult('')
    const formData = new FormData(event.target)
    formData.append('access_key', '881979c8-48f7-4a3a-827a-6cde34907d18')

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    }).then(r => r.json())

    setSending(false)
    if (res.success) {
      setResult('Message sent! I\'ll get back to you soon.')
      event.target.reset()
    } else {
      setResult(res.message || 'Something went wrong. Please try again.')
    }
  }

  useEffect(() => {
    const captchadiv = document.querySelectorAll('[data-captcha="true"]')
    if (!captchadiv.length) return
    captchadiv.forEach(el => {
      if (!el.dataset.sitekey) el.dataset.sitekey = '50b2fe65-b00b-4b9e-ad62-3ba471098be2'
    })
    const script = document.createElement('script')
    script.src = 'https://js.hcaptcha.com/1/api.js?recaptchacompat=off'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }, [])

  return (
    <section
      id="contact"
      className="w-full px-[8%] py-24 scroll-mt-20 relative overflow-hidden"
    >
      {/* background accent */}
      <div className="absolute inset-0 -z-10 bg-zinc-50/80 dark:bg-transparent" />
      <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/5 dark:bg-violet-600/4 rounded-full blur-3xl pointer-events-none" />

      {/* ── section label ── */}
      <p className="text-center text-xs font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 font-Outfit mb-3">
        Let's connect
      </p>
      <h2 className="text-center text-4xl sm:text-5xl font-extrabold font-Outfit text-slate-900 dark:text-white mb-4 tracking-tight">
        Get in touch
      </h2>
      <p className="text-center max-w-md mx-auto text-slate-500 dark:text-zinc-400 font-Outfit mb-3 text-sm leading-relaxed">
        Have a project in mind, want to collaborate, or just want to say hi? I'm all ears.
      </p>

      {/* email link */}
      <a
        href="mailto:pancholianurodh@gmail.com"
        className="flex items-center justify-center gap-2 w-max mx-auto mb-12 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline font-Outfit"
      >
        <img src={mail_icon} alt="" className="w-4 dark:hidden" />
        <img src={mail_icon_dark} alt="" className="w-4 hidden dark:block" />
        pancholianurodh@gmail.com
      </a>

      {/* ── form ── */}
      <form
        onSubmit={onSubmit}
        className="max-w-xl mx-auto bg-white dark:bg-darkSurface border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-card"
      >
        <input type="hidden" name="subject" value="Portfolio Contact — Anurodh Pancholi" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 dark:text-zinc-400 font-Outfit uppercase tracking-wide">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 text-slate-800 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition font-Outfit text-sm"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 dark:text-zinc-400 font-Outfit uppercase tracking-wide">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 text-slate-800 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition font-Outfit text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 mb-5">
          <label className="text-xs font-semibold text-slate-500 dark:text-zinc-400 font-Outfit uppercase tracking-wide">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Tell me about your project or opportunity..."
            required
            className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 text-slate-800 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition resize-none font-Outfit text-sm"
          />
        </div>

        <div className="h-captcha mb-5" data-captcha="true" />

        <button
          type="submit"
          disabled={sending}
          className="w-full py-3 px-8 bg-violet-600 hover:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 font-Outfit shadow-glow-sm"
        >
          {sending ? 'Sending…' : 'Send message'}
          {!sending && <img src={right_arrow_white} alt="" className="w-4" />}
        </button>

        {result && (
          <p className={`mt-4 text-center text-sm font-Outfit ${result.includes('sent') ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
            {result}
          </p>
        )}
      </form>
    </section>
  )
}

export default Contact
