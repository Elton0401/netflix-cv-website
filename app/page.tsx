
import NavBar from '@/components/nav-bar'
import HeroSection from '@/components/hero-section'
import ExperienceSection from '@/components/experience-section'
import ProjectsSection from '@/components/projects-section'
import SkillsSection from '@/components/skills-section'
import EducationSection from '@/components/education-section'
import ContactSection from '@/components/contact-section'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-100 relative z-0">
      <NavBar />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />

      <footer className="py-8 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">© 2026 Elton Gomes. All rights reserved.</p>
          <p className="text-slate-700 text-xs">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </footer>
    </main>
  )
}
