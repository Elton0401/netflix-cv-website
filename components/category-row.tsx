
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import ExperienceCard from './experience-card'
import ProjectModal from './project-modal'

interface Experience {
  role: string
  company: string
  duration: string
  achievements: string[]
  skills_used: string[]
  metrics: string
}

interface CategoryRowProps {
  title: string
  description: string
  experiences: Experience[]
  index: number
}

export default function CategoryRow({ title, description, experiences, index }: CategoryRowProps) {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)

  const handleCardClick = (experience: Experience) => {
    setSelectedExperience(experience)
  }

  const handleCloseModal = () => {
    setSelectedExperience(null)
  }

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              {title}
            </h2>
            <p className="text-lg text-[#E5E5E5] max-w-3xl">
              {description}
            </p>
          </motion.div>

          {/* Horizontal scrolling cards */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex space-x-6 overflow-x-auto hide-scrollbar pb-4">
              {experiences.map((experience, cardIndex) => (
                <motion.div
                  key={`${experience.role}-${cardIndex}`}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 * cardIndex 
                  }}
                  viewport={{ once: true }}
                  className="flex-shrink-0"
                >
                  <ExperienceCard
                    experience={experience}
                    onClick={() => handleCardClick(experience)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Modal for detailed view */}
      {selectedExperience && (
        <ProjectModal
          experience={selectedExperience}
          isOpen={!!selectedExperience}
          onClose={handleCloseModal}
        />
      )}
    </>
  )
}
