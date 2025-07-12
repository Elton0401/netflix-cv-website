
'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'

interface Education {
  current: {
    degree: string
    institution: string
    location: string
    duration: string
    gpa: string
    focus: string
  }
  previous: {
    degree: string
    institution: string
    location: string
    duration: string
    focus: string
  }
}

interface Certification {
  name: string
  provider: string
  date: string
}

interface TimelineProps {
  education: Education
  certifications: Certification[]
}

export default function Timeline({ education, certifications }: TimelineProps) {
  const timelineItems = [
    {
      type: 'education',
      title: education?.current?.degree || 'Business And Engineering (IBE)',
      institution: education?.current?.institution || 'THWS University',
      location: education?.current?.location || 'Schweinfurt',
      duration: education?.current?.duration || 'October 2021 — Present',
      description: education?.current?.focus || 'Sales focus with B2B Marketing modules',
      gpa: education?.current?.gpa || '2.96',
      icon: GraduationCap,
      color: 'text-[#E50914]',
      bgColor: 'bg-[#E50914]'
    },
    {
      type: 'education',
      title: education?.previous?.degree || '13th Year Education',
      institution: education?.previous?.institution || 'Christ University',
      location: education?.previous?.location || 'Bengaluru',
      duration: education?.previous?.duration || 'August 2020 — September 2021',
      description: education?.previous?.focus || 'Computer Science foundation',
      gpa: undefined,
      icon: GraduationCap,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400'
    }
  ]

  // Add certifications to timeline
  const certificationItems = certifications?.map(cert => ({
    type: 'certification',
    title: cert.name,
    institution: cert.provider,
    location: undefined,
    duration: cert.date,
    description: 'Professional certification completed',
    gpa: undefined,
    icon: Award,
    color: 'text-green-400',
    bgColor: 'bg-green-400'
  })) || []

  const allItems = [...timelineItems, ...certificationItems].sort((a, b) => {
    // Sort by year (most recent first)
    const yearA = parseInt(a.duration.split('—')[0]?.trim().split(' ').pop() || '0')
    const yearB = parseInt(b.duration.split('—')[0]?.trim().split(' ').pop() || '0')
    return yearB - yearA
  })

  return (
    <section className="py-16 bg-[#141414]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-[#E5E5E5] max-w-2xl mx-auto">
            Academic journey and professional development milestones
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-[#333333]" />

          {/* Timeline items */}
          <div className="space-y-12">
            {allItems.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#E50914] border-4 border-[#141414] z-10" />

                {/* Content card */}
                <div className={`ml-20 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="netflix-card p-6 hover:bg-[#222222] transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full ${item.bgColor} bg-opacity-20 flex items-center justify-center mr-4`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className={`text-sm font-medium ${item.color}`}>
                          {item.institution}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-3">
                      <div className="flex items-center text-[#E5E5E5] text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {item.duration}
                      </div>
                      
                      {item.location && (
                        <div className="flex items-center text-[#E5E5E5] text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          {item.location}
                        </div>
                      )}

                      <p className="text-[#E5E5E5] text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {item.gpa && (
                        <div className="inline-block bg-[#E50914] bg-opacity-20 text-[#E50914] px-3 py-1 rounded-full text-sm font-medium">
                          GPA: {item.gpa}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
