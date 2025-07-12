
import HeroSection from '@/components/hero-section'
import CategoryRow from '@/components/category-row'
import SkillsSection from '@/components/skills-section'
import Timeline from '@/components/timeline'
import ContactSection from '@/components/contact-section'
import cvData from '@/data/cv-content.json'

export default function HomePage() {
  const categories = [
    {
      id: 'product_dev_management_marketing',
      data: cvData.categories.product_dev_management_marketing
    },
    {
      id: 'brand',
      data: cvData.categories.brand
    },
    {
      id: 'b2b_digital_marketing',
      data: cvData.categories.b2b_digital_marketing
    },
    {
      id: 'business_development',
      data: cvData.categories.business_development
    },
    {
      id: 'project_management',
      data: cvData.categories.project_management
    },
    {
      id: 'sales',
      data: cvData.categories.sales
    }
  ]

  return (
    <main className="min-h-screen bg-[#141414] text-white">
      {/* Hero Section */}
      <HeroSection personalInfo={cvData.personal_info} keyMetrics={cvData.key_metrics} />
      
      {/* Category Rows */}
      <div className="space-y-8 py-8">
        {categories.map((category, index) => (
          <CategoryRow
            key={category.id}
            title={category.data.title}
            description={category.data.description}
            experiences={category.data.experiences}
            index={index}
          />
        ))}
      </div>

      {/* Skills Section */}
      <SkillsSection 
        technicalSkills={cvData.technical_skills}
        allCategories={cvData.categories}
      />

      {/* Timeline */}
      <Timeline 
        education={cvData.education}
        certifications={cvData.certifications}
      />

      {/* Contact Section */}
      <ContactSection personalInfo={cvData.personal_info} />
    </main>
  )
}
