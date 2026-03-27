import { createFileRoute } from '@tanstack/react-router'
import HomeHero from '#/components/hero-section'
import AboutSection from '#/components/about-section'
import ExperienceSection from '#/components/experience-section'
import SkillsSection from '#/components/skills-section'
import EducationSection from '#/components/education-section'
import ProjectsSection from '#/components/projects-section'

export const Route = createFileRoute('/')({ component: App })

function App() {
	return (
		<>
			<HomeHero />
			<AboutSection />
			<ExperienceSection />
            <SkillsSection />
            <EducationSection />
            <ProjectsSection />
		</>
	)
}
