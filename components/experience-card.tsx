
'use client'

import { motion } from 'framer-motion'
import { Calendar, Building2, TrendingUp, Award } from 'lucide-react'

interface Experience {
  role: string
  company: string
  duration: string
  achievements: string[]
  skills_used: string[]
  metrics: string
}

interface ExperienceCardProps {
  experience: Experience
  onClick: () => void
}

export default function ExperienceCard({ experience, onClick }: ExperienceCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="w-80 h-96 netflix-card netflix-glow cursor-pointer p-6 flex flex-col justify-between relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#181818] to-[#0f0f0f] opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex-shrink-0 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 rounded-full bg-[#E50914] flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="text-xs text-[#E5E5E5] flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {experience.duration}
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">
            {experience.role}
          </h3>
          <p className="text-sm text-[#E50914] font-medium">
            {experience.company}
          </p>
        </div>

        {/* Achievements preview */}
        <div className="flex-grow mb-4">
          <h4 className="text-sm font-semibold text-[#E5E5E5] mb-2 flex items-center">
            <Award className="w-4 h-4 mr-1" />
            Key Achievements
          </h4>
          <div className="space-y-2">
            {experience.achievements.slice(0, 2).map((achievement, index) => (
              <p key={index} className="text-xs text-[#E5E5E5] line-clamp-2 leading-relaxed">
                • {achievement}
              </p>
            ))}
            {experience.achievements.length > 2 && (
              <p className="text-xs text-[#E50914] font-medium">
                +{experience.achievements.length - 2} more achievements
              </p>
            )}
          </div>
        </div>

        {/* Skills preview */}
        <div className="flex-shrink-0 mb-4">
          <div className="flex flex-wrap gap-1">
            {experience.skills_used.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-[#E50914] bg-opacity-20 text-[#E50914] px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
            {experience.skills_used.length > 3 && (
              <span className="text-xs text-[#555555] px-2 py-1">
                +{experience.skills_used.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Metrics */}
        <div className="flex-shrink-0">
          <div className="flex items-center justify-between p-3 bg-[#E50914] bg-opacity-10 rounded-lg border border-[#E50914] border-opacity-20">
            <TrendingUp className="w-4 h-4 text-[#E50914]" />
            <span className="text-xs text-[#E5E5E5] font-medium text-right">
              {experience.metrics}
            </span>
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-[#E50914] bg-opacity-5 flex items-center justify-center"
      >
        <div className="text-white text-sm font-medium bg-[#E50914] px-4 py-2 rounded-full">
          View Details
        </div>
      </motion.div>
    </motion.div>
  )
}
