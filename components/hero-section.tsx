'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { LinkedinLogo, DownloadSimple, ArrowRight, MapPin } from '@phosphor-icons/react'

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease, delay } },
})

export default function HeroSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_320px] gap-16 xl:gap-28 items-center">

          {/* LEFT — clean, no repeated details */}
          <div>
            <motion.div
              variants={fadeUp(0.05)} initial="hidden" animate="show"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-10"
            >
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse-dot" />
              Open to opportunities
            </motion.div>

            <motion.h1
              variants={fadeUp(0.15)} initial="hidden" animate="show"
              className="text-[clamp(4rem,11vw,8rem)] font-extrabold tracking-tighter leading-[0.88] mb-8 text-slate-50"
            >
              Elton<br />
              <span className="text-emerald-400">Gomes</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.25)} initial="hidden" animate="show"
              className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-12 max-w-[46ch] font-medium"
            >
              Business &amp; Engineering student bridging marketing strategy
              with engineering precision. Specialising in creator management,
              CRM campaigns, and digital growth.
            </motion.p>

            <motion.div
              variants={fadeUp(0.35)} initial="hidden" animate="show"
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="/assets/Elton_Gomes_Internship_Unsolicited_CV.pdf"
                download
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-colors duration-150"
              >
                <DownloadSimple size={15} weight="bold" />Download CV
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/eltongomes642"
                target="_blank" rel="noopener noreferrer"
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 glass-surface hover:border-slate-600 text-slate-300 hover:text-white font-semibold rounded-xl text-sm transition-colors duration-150"
              >
                <LinkedinLogo size={15} weight="bold" />LinkedIn
              </motion.a>
              <motion.button
                onClick={() => scrollTo('contact')}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-slate-400 hover:text-emerald-400 font-medium transition-colors duration-150 text-sm group"
              >
                Get in touch <ArrowRight size={15} weight="bold" className="group-hover:translate-x-0.5 transition-transform duration-150" />
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT — compact profile card with real photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="glass-surface rounded-2xl overflow-hidden">
              {/* Photo */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/assets/elton-professional-photo.jpg"
                  alt="Elton Gomes"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                {/* Availability badge over photo */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-slate-950/80 backdrop-blur-sm border border-emerald-500/30 rounded-full">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse-dot" />
                  <span className="text-emerald-400 text-xs font-semibold">Available Jun 2026</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-base font-bold text-slate-50 mb-0.5">Elton Gomes</h3>
                <p className="text-emerald-400 text-sm font-medium mb-4">Business &amp; Engineering Student</p>

                <div className="space-y-2.5 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs uppercase tracking-wide font-medium">Currently</span>
                    <span className="text-slate-200 text-xs font-semibold">Razer (Europe) GmbH</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs uppercase tracking-wide font-medium">Role</span>
                    <span className="text-slate-400 text-xs">Intern Marketing</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs uppercase tracking-wide font-medium">Location</span>
                    <span className="text-slate-400 text-xs flex items-center gap-1"><MapPin size={10} weight="fill" />Hamburg, DE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
