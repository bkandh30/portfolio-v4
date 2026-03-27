import { SectionShell } from '#/components/section-shell'

const categories = [
	{
		name: 'Languages',
		items: [
			'Java',
			'JavaScript',
			'TypeScript',
			'Python',
			'SQL',
			'Go',
			'Rust',
		],
	},
	{
		name: 'Frontend',
		items: [
			'React',
			'Next.js',
			'Angular',
			'HTML',
			'CSS',
			'Tailwind CSS',
			'React Router',
			'TanStack Start',
			'TanStack Query',
		],
	},
	{
		name: 'Backend',
		items: [
			'Spring Boot',
			'Spring Security',
			'Hibernate',
			'Node.js',
			'REST APIs',
			'Microservices',
			'Spring Batch',
			'Kafka',
		],
	},
	{
		name: 'Cloud & DevOps',
		items: [
			'AWS',
			'Azure',
			'GCP',
			'Docker',
			'Jenkins',
			'Git',
			'GitHub',
			'GitHub Actions',
			'Terraform',
			'CI/CD',
		],
	},
	{
		name: 'Databases',
		items: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'],
	},
]

export default function SkillsSection() {
	return (
		<SectionShell id="skills" className="border-t border-border">
			<div className="mx-auto max-w-3xl text-center">
				<p className="text-[0.72rem] font-semibold tracking-wide text-[var(--accent-strong)]">
					Skills
				</p>
				<h2 className="section-title mt-3 text-2xl sm:text-[1.75rem]">
					Core Technologies
				</h2>
			</div>

			<div className="mx-auto mt-8 max-w-2xl space-y-7 text-left sm:mt-10 sm:space-y-8">
				{categories.map((category) => (
					<div key={category.name}>
						<h3 className="text-[13px] font-semibold tracking-wide text-[var(--text-body)]">
							{category.name}
						</h3>
						<div className="mt-3 flex flex-wrap gap-2">
							{category.items.map((item) => (
								<span
									key={item}
									className="chip rounded-full px-3 py-1 text-xs"
								>
									{item}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</SectionShell>
	)
}
