'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, CaretRight } from '@phosphor-icons/react'

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1]
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.14 } } }
const card = { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }

const internships = [
  {
    id: 'razer',
    num: '01',
    logo: '/assets/razer-logo.png',
    role: 'Intern Marketing',
    company: 'Razer (Europe) GmbH',
    location: 'Hamburg, Germany',
    period: 'Jan 2026 — Jun 2026',
    type: 'Marketing & Influencer Relations',
    bullets: [
      "Independently researched and evaluated creator and brand partners across France, Germany, and the UK — assessing profile fit, audience alignment, and activation potential before outreach.",
      "Conducted proactive partner outreach across Twitch, YouTube, and TikTok, presenting Razer's seeding programme and managing end-to-end onboarding of selected creators.",
      "Tracked outreach pipeline and campaign deliverables for the Regional EU Influencer team, maintaining structured records of partner status and performance outcomes.",
      "Supported vendor creation, purchase requests, and invoice processing, ensuring accurate data and smooth partner onboarding workflows.",
    ],
    tags: ['Creator Management', 'Influencer Marketing', 'TikTok', 'YouTube', 'Twitch', 'CRM'],
    accent: { label: 'text-emerald-400', dot: 'bg-emerald-400', num: 'text-emerald-400/20' },
  },
  {
    id: 'cignex',
    num: '02',
    logo: null as string | null,
    role: 'Intern',
    company: 'CIGNEX Technologies Pvt. Ltd',
    location: 'Ahmedabad, India',
    period: 'Sep 2021 — Nov 2021',
    type: 'Business Development',
    bullets: [
      "Assisted Project Manager with cross-functional team communications and coordination.",
      "Utilized CRM systems to track and manage customer data effectively.",
      "Supported email and LinkedIn campaigns targeting international leads.",
      "Developed enablement content including slide decks and newsletters.",
    ],
    tags: ['CRM', 'LinkedIn Campaigns', 'Email Marketing', 'Content Creation'],
    accent: { label: 'text-teal-400', dot: 'bg-teal-400', num: 'text-teal-400/20' },
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-16 flex items-end gap-6"
        >
          <div>
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-2">Work Experience</p>
            <h2 className="text-5xl font-extrabold tracking-tighter text-slate-50 leading-none">Internships</h2>
          </div>
          <span className="text-[7rem] font-black leading-none text-slate-800/50 select-none mb-[-0.1em] tracking-tighter">02</span>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={inView ? 'show' : 'hidden'} className="space-y-6">
          {internships.map(intern => (
            <motion.div key={intern.id} variants={card}
              className="relative glass-surface rounded-2xl p-7 sm:p-9 overflow-hidden"
            >
              {/* Large background number */}
              <span className={`absolute right-6 top-4 text-[6rem] font-black leading-none select-none pointer-events-none tracking-tighter ${intern.accent.num}`}>
                {intern.num}
              </span>

              <div className="relative">
                {/* Header — logo sits inline with the title block */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-6">
                  <div className="flex items-center gap-5 min-w-0">
                    {intern.logo && (
                      <Image
                        src={intern.logo}
                        alt={`${intern.company} logo`}
                        width={320}
                        height={120}
                        priority
                        className="h-16 sm:h-20 w-auto object-contain object-left select-none shrink-0 [filter:drop-shadow(0_2px_12px_rgba(0,0,0,0.45))]"
                      />
                    )}
                    <div className="min-w-0">
                      <h3 className="text-2xl font-extrabold tracking-tight text-slate-50 mb-1">{intern.role}</h3>
                      <p className={`text-base font-semibold ${intern.accent.label}`}>{intern.company}</p>
                      <p className="text-slate-500 text-sm mt-1">{intern.type}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 sm:items-end shrink-0">
                    <span className="inline-flex items-center gap-1.5 text-slate-400 text-sm font-medium">
                      <Calendar size={12} weight="bold" className="text-slate-600" />{intern.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-slate-500 text-sm">
                      <MapPin size={12} weight="fill" className="text-slate-600" />{intern.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-7">
                  {intern.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                      <CaretRight size={13} weight="bold" className="text-emerald-500 mt-0.5 shrink-0" />{b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-800/50">
                  {intern.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-800/60 border border-slate-700/40 text-slate-400 text-xs rounded-lg">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
