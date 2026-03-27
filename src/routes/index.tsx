import { createFileRoute } from '@tanstack/react-router'
import HomeHero from '#/components/hero-section'
import AboutSection from '#/components/about-section'
import ExperienceSection from '#/components/experience-section'
import SkillsSection from '#/components/skills-section'
import EducationSection from '#/components/education-section'
import ProjectsSection from '#/components/projects-section'
import ContactSection from '#/components/contact-section'
import { getGitHubActivity } from '#/data/github'

export const Route = createFileRoute('/')({
	loader: () => ({
		githubActivityPromise: getGitHubActivity().catch(() => ({
			ok: false as const,
			error: 'Contribution activity is unavailable right now.',
		})),
	}),
	component: App,
})

function App() {
	const { githubActivityPromise } = Route.useLoaderData()

	return (
		<>
			<HomeHero />
			<AboutSection />
			<ExperienceSection />
			<SkillsSection />
			<EducationSection />
			<ProjectsSection githubActivityPromise={githubActivityPromise} />
			<ContactSection />
		</>
	)
}
