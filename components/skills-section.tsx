'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1]
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.07 } } }
const rowAnim = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }

const skillGroups = [
  { label: 'Marketing & Growth',  skills: ['SEO Optimization', 'Keyword Research', 'Google Ads', 'A/B Testing', 'GTM Strategy', 'Digital Marketing', 'Brand Analysis', 'Content Strategy'] },
  { label: 'Tools & Platforms',   skills: ['HubSpot', 'Jira', 'Notion', 'Apollo', 'Snov.io', 'Mailchimp', 'Power BI', 'Google Analytics'] },
  { label: 'Creative & Design',   skills: ['Adobe Premiere Pro', 'Adobe Photoshop', 'Adobe Creative Suite', 'Content Creation', 'Video Editing'] },
  { label: 'Business & Strategy', skills: ['Project Management', 'Product Development', 'Market Research', 'Financial Modeling', 'BPMN Modeling', 'ABM Strategy'] },
  { label: 'Software & Office',   skills: ['Microsoft Office', 'SAP (Basic)', 'Google Workspace', 'Excel / PowerPoint'] },
]

const languages = [
  { name: 'English', level: 'C2',    note: 'Native / Fluent', bar: 100 },
  { name: 'German',  level: 'A2',    note: 'Beginner',        bar: 20  },
  { name: 'French',  level: 'Basic', note: 'Elementary',      bar: 12  },
]

const hobbies = ['YouTube', 'Trading', 'Gaming', 'Computer Enthusiast']

export default function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-16 flex items-end gap-6"
        >
          <div>
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-2">Competencies</p>
            <h2 className="text-5xl font-extrabold tracking-tighter text-slate-50 leading-none">Skills &amp; Tools</h2>
          </div>
          <span className="text-[7rem] font-black leading-none text-slate-800/50 select-none mb-[-0.1em] tracking-tighter">05</span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-14">
          {/* Skill categories */}
          <motion.div variants={container} initial="hidden" animate={inView ? 'show' : 'hidden'}
            className="divide-y divide-slate-800/40">
            {skillGroups.map(group => (
              <motion.div key={group.label} variants={rowAnim}
                className="py-5 grid sm:grid-cols-[200px_1fr] gap-4 items-start">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest pt-1.5">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <motion.span key={skill}
                      whileTap={{ scale: 0.95 }}
                      className="px-2.5 py-1 bg-slate-800/50 border border-slate-700/40 hover:border-emerald-500/40 text-slate-300 text-sm rounded-lg cursor-default transition-colors duration-150">
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Languages + Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease, delay: 0.25 }}
            className="space-y-10"
          >
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">Languages</p>
              <div className="space-y-4">
                {languages.map(lang => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-slate-200 font-semibold text-sm">{lang.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 text-xs">{lang.note}</span>
                        <span className="px-1.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded font-bold">{lang.level}</span>
                      </div>
                    </div>
                    <div className="h-0.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-emerald-500/60 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${lang.bar}%` } : { width: 0 }}
                        transition={{ duration: 0.8, ease, delay: 0.4 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Interests</p>
              <div className="flex flex-wrap gap-2">
                {hobbies.map(hobby => (
                  <motion.span key={hobby}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/40 hover:border-emerald-500/40 text-slate-300 text-sm rounded-lg cursor-default transition-colors duration-150">
                    {hobby}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
