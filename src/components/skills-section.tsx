const categories = [
	{
		name: 'Languages',
		items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'Go', 'Rust'],
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
		<section id="skills" className="border-t border-border">
			<div className="page-wrap py-16 sm:py-22">
				<div className="mx-auto max-w-2xl">
					<p className="text-[0.72rem] font-semibold tracking-wide text-[var(--accent-strong)]">
						Skills
					</p>
					<h2 className="section-title mt-3 text-2xl sm:text-[1.75rem]">
						Core technologies
					</h2>

					<div className="mt-10 sm:mt-11 space-y-8">
						{categories.map((category) => (
							<div key={category.name}>
								<h3 className="text-[13px] font-semibold tracking-wide text-[var(--text-body)]">
									{category.name}
								</h3>
								<div className="mt-3 flex flex-wrap gap-2">
									{category.items.map((item) => (
										<span
											key={item}
											className="rounded-full border border-border bg-[var(--chip-bg)] px-3 py-1 text-xs text-[var(--text-muted)]"
										>
											{item}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
