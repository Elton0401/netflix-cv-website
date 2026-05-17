'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, BookOpen } from '@phosphor-icons/react'

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1]
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.14 } } }
const card = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }

const education = [
  {
    id: 'thws', num: '01',
    logo: '/assets/thws-logo.png',
    degree: 'Business and Engineering (IBE)',
    institution: 'THWS — University of Applied Sciences Würzburg-Schweinfurt',
    location: 'Germany',
    period: 'Oct 2021 — Present',
    gpa: '2.9',
    focus: 'Specialisation: Sales',
    modules: ['B2B-Marketing and Sales', 'Applied B2B-Marketing', 'Digital Marketing', 'International Marketing'],
    current: true,
    details: null as string | null,
  },
  {
    id: 'christ', num: '02',
    logo: null as string | null,
    degree: '13th Year — Computer Science',
    institution: 'Christ University',
    location: 'Bengaluru, India',
    period: 'Aug 2020 — Sep 2021',
    gpa: null as string | null,
    focus: null as string | null,
    modules: null as string[] | null,
    current: false,
    details: "Completed 13th year of education in computer science as a prerequisite for a Bachelor's degree in Germany.",
  },
]

export default function EducationSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" ref={ref} className="py-32 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-16 flex items-end gap-6"
        >
          <div>
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-2">Academic Background</p>
            <h2 className="text-5xl font-extrabold tracking-tighter text-slate-50 leading-none">Education</h2>
          </div>
          <span className="text-[7rem] font-black leading-none text-slate-800/50 select-none mb-[-0.1em] tracking-tighter">04</span>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[11px] top-5 bottom-5 w-px bg-gradient-to-b from-emerald-500/40 via-slate-700/40 to-transparent hidden sm:block" />

          <motion.div variants={container} initial="hidden" animate={inView ? 'show' : 'hidden'} className="space-y-6">
            {education.map(edu => (
              <motion.div key={edu.id} variants={card} className="relative sm:pl-12">
                {/* Timeline dot */}
                <div className={`absolute left-[4px] top-6 w-[15px] h-[15px] rounded-full border-2 hidden sm:flex items-center justify-center ${
                  edu.current ? 'bg-emerald-600 border-emerald-400' : 'bg-slate-800 border-slate-600'
                }`}>
                  <div className={`w-1 h-1 rounded-full ${edu.current ? 'bg-white' : 'bg-slate-500'}`} />
                </div>

                <div
                  className={`glass-surface rounded-2xl p-6 sm:p-8 transition-colors duration-200 ${
                    edu.current ? 'border-emerald-500/20 hover:border-emerald-500/35' : 'hover:border-slate-700/70'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-5">
                    <div className="flex items-center gap-5 min-w-0">
                      {edu.logo && (
                        <Image
                          src={edu.logo}
                          alt={`${edu.institution} logo`}
                          width={320}
                          height={160}
                          className="h-16 sm:h-20 w-auto object-contain object-left select-none shrink-0 [filter:drop-shadow(0_2px_12px_rgba(0,0,0,0.45))]"
                        />
                      )}
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold tracking-tight text-slate-50">{edu.degree}</h3>
                          {edu.current && (
                            <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-full font-semibold">Current</span>
                          )}
                        </div>
                        <p className={`font-semibold text-sm ${edu.current ? 'text-emerald-400' : 'text-slate-400'}`}>{edu.institution}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 sm:items-end shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-slate-500 text-sm"><Calendar size={12} weight="bold" />{edu.period}</span>
                      <span className="inline-flex items-center gap-1.5 text-slate-500 text-sm"><MapPin size={12} weight="fill" />{edu.location}</span>
                      {edu.gpa && <span className="text-sm"><span className="text-slate-500">GPA: </span><span className="text-emerald-400 font-bold">{edu.gpa}</span></span>}
                    </div>
                  </div>

                  {edu.focus && <p className="text-slate-400 text-sm mb-4 font-medium">{edu.focus}</p>}

                  {edu.modules && (
                    <div>
                      <p className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                        <BookOpen size={11} weight="bold" />Key Modules
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.modules.map(mod => (
                          <span key={mod} className="px-2.5 py-1 bg-slate-800/50 border border-slate-700/40 text-slate-400 text-xs rounded-lg">{mod}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.details && <p className="text-slate-400 text-sm leading-relaxed">{edu.details}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
