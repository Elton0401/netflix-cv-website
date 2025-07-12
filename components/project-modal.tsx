
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Building2, Award, Target, TrendingUp } from 'lucide-react'
import { useEffect } from 'react'

interface Experience {
  role: string
  company: string
  duration: string
  achievements: string[]
  skills_used: string[]
  metrics: string
}

interface ProjectModalProps {
  experience: Experience
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ experience, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#181818] rounded-lg shadow-2xl netflix-glow"
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#181818] border-b border-[#333333] p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-[#E50914] flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {experience.role}
                  </h2>
                  <p className="text-[#E50914] font-medium">
                    {experience.company}
                  </p>
                  <div className="flex items-center text-[#E5E5E5] text-sm mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    {experience.duration}
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-[#333333] hover:bg-[#444444] flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Key Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[#E50914] bg-opacity-10 rounded-lg p-6 border border-[#E50914] border-opacity-20"
              >
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#E50914] mr-2" />
                  <h3 className="text-xl font-semibold text-white">Impact & Results</h3>
                </div>
                <p className="text-[#E5E5E5] text-lg">
                  {experience.metrics}
                </p>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <Award className="w-6 h-6 text-[#E50914] mr-2" />
                  <h3 className="text-xl font-semibold text-white">Key Achievements</h3>
                </div>
                <div className="grid gap-4">
                  {experience.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-4 p-4 bg-[#222222] rounded-lg hover:bg-[#2a2a2a] transition-colors duration-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#E50914] mt-2 flex-shrink-0" />
                      <p className="text-[#E5E5E5] leading-relaxed">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center mb-6">
                  <Target className="w-6 h-6 text-[#E50914] mr-2" />
                  <h3 className="text-xl font-semibold text-white">Skills & Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {experience.skills_used.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className="px-4 py-2 bg-[#E50914] bg-opacity-20 text-[#E50914] rounded-full text-sm font-medium border border-[#E50914] border-opacity-30 hover:bg-opacity-30 transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-[#181818] border-t border-[#333333] p-6">
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="netflix-button-secondary px-6 py-3"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
