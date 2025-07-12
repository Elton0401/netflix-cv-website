
'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  BarChart3, 
  Megaphone, 
  Palette, 
  FileText, 
  Settings,
  Brain,
  Target,
  Users,
  TrendingUp
} from 'lucide-react'

interface TechnicalSkills {
  programming: string[]
  data_analysis: string[]
  marketing_tools: string[]
  design_tools: string[]
  office_suite: string[]
  business_tools: string[]
}

interface Category {
  title: string
  key_skills: string[]
}

interface Categories {
  [key: string]: Category
}

interface SkillsSectionProps {
  technicalSkills: TechnicalSkills
  allCategories: Categories
}

export default function SkillsSection({ technicalSkills, allCategories }: SkillsSectionProps) {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: technicalSkills?.programming || [],
      color: 'text-blue-400'
    },
    {
      title: 'Data Analysis',
      icon: BarChart3,
      skills: technicalSkills?.data_analysis || [],
      color: 'text-green-400'
    },
    {
      title: 'Marketing Tools',
      icon: Megaphone,
      skills: technicalSkills?.marketing_tools || [],
      color: 'text-purple-400'
    },
    {
      title: 'Design Tools',
      icon: Palette,
      skills: technicalSkills?.design_tools || [],
      color: 'text-pink-400'
    },
    {
      title: 'Office Suite',
      icon: FileText,
      skills: technicalSkills?.office_suite || [],
      color: 'text-orange-400'
    },
    {
      title: 'Business Tools',
      icon: Settings,
      skills: technicalSkills?.business_tools || [],
      color: 'text-cyan-400'
    }
  ]

  const businessSkillCategories = [
    {
      title: 'Product & Innovation',
      icon: Brain,
      skills: allCategories?.product_dev_management_marketing?.key_skills || [],
      color: 'text-[#E50914]'
    },
    {
      title: 'Brand & Marketing',
      icon: Target,
      skills: [
        ...(allCategories?.brand?.key_skills || []),
        ...(allCategories?.b2b_digital_marketing?.key_skills || [])
      ].slice(0, 6),
      color: 'text-[#E50914]'
    },
    {
      title: 'Business Development',
      icon: TrendingUp,
      skills: allCategories?.business_development?.key_skills || [],
      color: 'text-[#E50914]'
    },
    {
      title: 'Leadership & Management',
      icon: Users,
      skills: [
        ...(allCategories?.project_management?.key_skills || []),
        ...(allCategories?.sales?.key_skills || [])
      ].slice(0, 6),
      color: 'text-[#E50914]'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-[#141414] to-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-[#E5E5E5] max-w-3xl mx-auto">
            A comprehensive skill set spanning technical, business, and creative domains
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="netflix-card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  <category.icon className={`w-6 h-6 ${category.color} mr-3`} />
                  <h4 className="text-lg font-semibold text-white">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs bg-[#333333] text-[#E5E5E5] px-3 py-1 rounded-full hover:bg-[#444444] transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Business & Strategic Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessSkillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="netflix-card p-6 hover:scale-105 transition-transform duration-300 netflix-glow"
              >
                <div className="flex items-center mb-4">
                  <category.icon className={`w-6 h-6 ${category.color} mr-3`} />
                  <h4 className="text-lg font-semibold text-white text-center">
                    {category.title}
                  </h4>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-sm bg-[#E50914] bg-opacity-10 text-[#E5E5E5] px-3 py-2 rounded-md border border-[#E50914] border-opacity-20 hover:bg-opacity-20 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
