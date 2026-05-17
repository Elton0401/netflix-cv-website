'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from '@phosphor-icons/react'

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1]
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }
const row = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.55, ease } } }

const projects = [
  { id: 'mondu',        index: '01', title: 'Digital Marketing Strategy',          client: 'Mondu',                   category: 'Digital Marketing',  description: 'Comprehensive content and marketing strategy covering SEO, SEA, social planning, automated email, and affiliate channels.', tags: ['SEO', 'SEA', 'Email Automation', 'Affiliate'] },
  { id: 'pagerduty',   index: '02', title: 'Applied B2B Marketing',                client: 'PagerDuty',               category: 'B2B Marketing',      description: 'Targeted B2B campaigns using ABM, case studies, and LinkedIn Ads for IT/DevOps decision-makers.', tags: ['ABM', 'LinkedIn Ads', 'B2B', 'DevOps'] },
  { id: 'bosch',       index: '03', title: 'Project Management',                   client: 'Bosch Rexroth',           category: 'Project Management', description: 'Digital B2B marketing plan for the hydraulics division including project planning and performance tracking.', tags: ['Project Management', 'B2B', 'Digital Marketing'] },
  { id: 'product-dev', index: '04', title: 'Product Development Concepts',         client: 'THWS Engineering',        category: 'Engineering',        description: 'Mechanical product concepts: a Portable Baby Stroller, automated Screw Sorting Machine, and mechanical Chess Sorter.', tags: ['Product Design', 'Engineering', 'Prototyping'] },
  { id: 'startup',     index: '05', title: 'Business Plan',                        client: 'Custom Computers Startup',category: 'Business Strategy',  description: 'Full business plan covering market research, financial projections, and go-to-market strategy for a custom PC service.', tags: ['GTM Strategy', 'Financial Modeling', 'Market Research'] },
  { id: 'intl',        index: '06', title: 'International Marketing & BPMN',       client: 'The Cubical / SAP',       category: 'Strategy & Ops',     description: 'Cross-market campaigns for The Cubical and BPMN process modeling for SAP / AP Plus integration.', tags: ['International Marketing', 'BPMN', 'SAP'] },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="py-32 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-16 flex items-end gap-6"
        >
          <div>
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-2">Academic &amp; Professional</p>
            <h2 className="text-5xl font-extrabold tracking-tighter text-slate-50 leading-none">Projects</h2>
          </div>
          <span className="text-[7rem] font-black leading-none text-slate-800/50 select-none mb-[-0.1em] tracking-tighter">03</span>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={inView ? 'show' : 'hidden'}
          className="divide-y divide-slate-800/40">
          {projects.map(p => (
            <motion.div key={p.id} variants={row}
              className="group grid md:grid-cols-[80px_1fr_auto] gap-x-8 items-start py-7
                         hover:bg-slate-800/20 -mx-4 px-4 rounded-2xl transition-colors duration-200 cursor-default"
            >
              {/* Large index number */}
              <span className="text-5xl font-black tracking-tighter text-slate-800 group-hover:text-emerald-600/40 transition-colors duration-200 leading-none pt-0.5 select-none hidden md:block">
                {p.index}
              </span>

              <div>
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 className="text-lg font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors duration-150">{p.title}</h3>
                  <span className="text-slate-500 text-sm">{p.client}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-3.5 max-w-[60ch]">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-slate-800/70 border border-slate-700/40 text-slate-500 text-xs rounded-md">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex items-center gap-3 pt-1.5">
                <span className="text-xs font-semibold text-emerald-400/80 bg-emerald-500/8 border border-emerald-500/15 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {p.category}
                </span>
                <ArrowRight size={14} weight="bold" className="text-slate-700 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-150 shrink-0" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
