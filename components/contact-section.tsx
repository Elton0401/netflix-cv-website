'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Envelope, Phone, MapPin, LinkedinLogo, DownloadSimple, PaperPlaneTilt, CheckCircle, WarningCircle, CircleNotch } from '@phosphor-icons/react'

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1]
type Status = 'idle' | 'loading' | 'success' | 'error'

const inputBase = 'w-full px-4 py-3 bg-slate-900/60 border border-slate-800/80 rounded-xl text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/15 transition-colors duration-150'

const contactLinks = [
  { icon: Envelope,     label: 'eltongomes642@gmail.com',    href: 'mailto:eltongomes642@gmail.com',  external: false },
  { icon: Phone,        label: '+49 151 2951 0880',          href: 'tel:+4915129510880',              external: false },
  { icon: MapPin,       label: 'Hamburg, Germany',           href: undefined,                         external: false },
  { icon: LinkedinLogo, label: 'linkedin.com/in/eltongomes642', href: 'https://www.linkedin.com/in/eltongomes642', external: true },
]

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', subject: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" ref={ref} className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-16 flex items-end gap-6"
        >
          <div>
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
            <h2 className="text-5xl font-extrabold tracking-tighter text-slate-50 leading-none">Contact</h2>
          </div>
          <span className="text-[7rem] font-black leading-none text-slate-800/50 select-none mb-[-0.1em] tracking-tighter">06</span>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-[38ch]">
                Whether you have an opportunity, a question, or just want to say hi — my inbox is open.
              </p>

              <div className="space-y-3">
                {contactLinks.map(({ icon: Icon, label, href, external }) =>
                  href ? (
                    <motion.a key={label} href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-3 text-slate-400 hover:text-slate-200 transition-colors duration-150 group"
                    >
                      <div className="w-9 h-9 bg-slate-800/60 border border-slate-700/50 rounded-lg flex items-center justify-center group-hover:border-emerald-500/30 transition-colors duration-150 shrink-0">
                        <Icon size={14} weight="bold" className="text-emerald-400" />
                      </div>
                      <span className="text-sm">{label}</span>
                    </motion.a>
                  ) : (
                    <div key={label} className="flex items-center gap-3 text-slate-400">
                      <div className="w-9 h-9 bg-slate-800/60 border border-slate-700/50 rounded-lg flex items-center justify-center shrink-0">
                        <Icon size={14} weight="bold" className="text-emerald-400" />
                      </div>
                      <span className="text-sm">{label}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/50">
              <motion.a
                href="/assets/Elton_Gomes_Internship_Unsolicited_CV.pdf"
                download
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-colors duration-150"
              >
                <DownloadSimple size={14} weight="bold" />Download CV
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-400 mb-1.5">Name</label>
                  <input id="contact-name" type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputBase} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-400 mb-1.5">Email</label>
                  <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputBase} />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-400 mb-1.5">Subject</label>
                <input id="contact-subject" type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="What's this about?" className={inputBase} />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-400 mb-1.5">Message</label>
                <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell me more..." className={`${inputBase} resize-none`} />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 px-4 py-3 bg-emerald-500/8 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm">
                  <CheckCircle size={14} weight="fill" />Message sent. I&apos;ll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 px-4 py-3 bg-red-500/8 border border-red-500/20 rounded-xl text-red-400 text-sm">
                  <WarningCircle size={14} weight="fill" />Something went wrong. Please email me directly.
                </div>
              )}

              <motion.button type="submit" disabled={status === 'loading'}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-sm transition-colors duration-150"
              >
                {status === 'loading'
                  ? <><CircleNotch size={14} weight="bold" className="animate-spin" />Sending...</>
                  : <><PaperPlaneTilt size={14} weight="bold" />Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
