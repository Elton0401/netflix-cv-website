'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1]
const navItems = [
  { label: 'Home',       href: '#hero' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

export default function NavBar() {
  const [active, setActive]     = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const sections = navItems.map(i => i.href.slice(1)).reverse()
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setOpen(false)
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-slate-950/90 border-b border-slate-800/60' : 'bg-transparent'
      }`}
      style={{ backdropFilter: scrolled ? 'blur(12px)' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.button
          onClick={() => scrollTo('#hero')}
          whileTap={{ scale: 0.92 }}
          className="text-base font-bold tracking-widest text-slate-100 hover:opacity-70 transition-opacity duration-150"
        >
          EG
        </motion.button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map(item => {
            const isActive = active === item.href.slice(1)
            return (
              <motion.button key={item.href} onClick={() => scrollTo(item.href)}
                whileTap={{ scale: 0.94 }}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  isActive ? 'text-emerald-400' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3/4 h-px bg-emerald-500/60 rounded-full"
                  />
                )}
              </motion.button>
            )
          })}
        </div>

        <motion.button
          className="md:hidden p-2 text-slate-400 hover:text-slate-100 transition-colors duration-150"
          onClick={() => setOpen(o => !o)}
          whileTap={{ scale: 0.88 }}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open
              ? <motion.div key="x"    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={20} weight="bold" /></motion.div>
              : <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }}  animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><List size={20} weight="bold" /></motion.div>
            }
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease }}
            className="md:hidden overflow-hidden border-b border-slate-800/60 bg-slate-950/95"
            style={{ backdropFilter: 'blur(12px)' }}
          >
            <div className="px-4 pb-4 pt-1">
              {navItems.map((item, i) => (
                <motion.button key={item.href} onClick={() => scrollTo(item.href)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.04 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    active === item.href.slice(1) ? 'text-emerald-400' : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
