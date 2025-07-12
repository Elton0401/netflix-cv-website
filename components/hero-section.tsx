
'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Download, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import CountUpNumber from './count-up-number'

interface PersonalInfo {
  name: string
  title: string
  location: string
  phone: string
  email: string
  professional_summary: string
  current_education: string
  gpa: string
  languages: string[]
}

interface KeyMetrics {
  total_projects: string
  international_experience: string
  academic_gpa: string
  languages_spoken: string
  certifications_earned: string
  years_of_experience: string
}

interface HeroSectionProps {
  personalInfo: PersonalInfo
  keyMetrics: KeyMetrics
}

export default function HeroSection({ personalInfo, keyMetrics }: HeroSectionProps) {
  const handleDownloadCV = () => {
    try {
      // Download the actual CV PDF file
      const cvUrl = '/assets/Elton_Gomes_CV.pdf'
      const link = document.createElement('a')
      link.href = cvUrl
      link.download = 'Elton_Gomes_CV.pdf'
      link.setAttribute('target', '_blank')
      link.setAttribute('rel', 'noopener noreferrer')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading CV:', error)
      // Fallback: open in new tab
      window.open('/assets/Elton_Gomes_CV.pdf', '_blank')
    }
  }

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#0f0f0f]" />
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Name and title */}
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold mb-4"
              >
                {personalInfo?.name || 'Elton Gomes'}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl lg:text-2xl text-[#E5E5E5] mb-2"
              >
                {personalInfo?.title || 'Business and Engineering Student'}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-[#E50914] font-medium"
              >
                {personalInfo?.current_education || 'THWS University'}
              </motion.p>
            </div>

            {/* Professional summary */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-[#E5E5E5] leading-relaxed max-w-2xl"
            >
              {personalInfo?.professional_summary || 'Motivated Business and Engineering student with expertise in product development, marketing, and business strategy.'}
            </motion.p>

            {/* Contact info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid sm:grid-cols-2 gap-4 text-[#E5E5E5]"
            >
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#E50914]" />
                <span className="text-sm">{personalInfo?.location?.split(',')[1] || 'Schweinfurt, Germany'}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#E50914]" />
                <span className="text-sm">{personalInfo?.email || 'eltongomes642@gmail.com'}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#E50914]" />
                <span className="text-sm">{personalInfo?.phone || '+49151 295 10880'}</span>
              </div>
              <div className="flex items-center space-x-3">
                <ExternalLink className="w-5 h-5 text-[#E50914]" />
                <span className="text-sm">
                  Languages: {personalInfo?.languages?.join(', ') || 'English, German, French'}
                </span>
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleDownloadCV}
                className="netflix-button-primary flex items-center justify-center space-x-2 px-8 py-3 text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </button>
              <button
                onClick={handleContact}
                className="netflix-button-secondary flex items-center justify-center space-x-2 px-8 py-3 text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Me</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right content - Key metrics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Professional Photo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative mx-auto w-80 h-80 rounded-2xl overflow-hidden netflix-glow mb-8 bg-gradient-to-br from-[#E50914]/20 to-[#B81D24]/20"
            >
              <Image
                src="/assets/elton-professional-photo.jpg"
                alt="Elton Gomes - Professional Photo"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 320px, 320px"
              />
              {/* Netflix-style overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>

            {/* Key metrics grid */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="netflix-card p-6 text-center"
              >
                <div className="text-3xl font-bold text-[#E50914] mb-2">
                  <CountUpNumber end={8} suffix="+" />
                </div>
                <div className="text-sm text-[#E5E5E5]">Total Projects</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="netflix-card p-6 text-center"
              >
                <div className="text-3xl font-bold text-[#E50914] mb-2">
                  <CountUpNumber end={3} />
                </div>
                <div className="text-sm text-[#E5E5E5]">Countries</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="netflix-card p-6 text-center"
              >
                <div className="text-3xl font-bold text-[#E50914] mb-2">
                  <CountUpNumber end={2.96} decimals={2} />
                </div>
                <div className="text-sm text-[#E5E5E5]">Academic GPA</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="netflix-card p-6 text-center"
              >
                <div className="text-3xl font-bold text-[#E50914] mb-2">
                  <CountUpNumber end={5} />
                </div>
                <div className="text-sm text-[#E5E5E5]">Certifications</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-8 bg-[#E50914] rounded-full"
        />
      </motion.div>
    </section>
  )
}
