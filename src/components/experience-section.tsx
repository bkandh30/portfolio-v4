export default function ExperienceSection() {
	return (
		<section id="experience" className="border-t border-border">
			<div className="page-wrap py-20 sm:py-28">
				<div className="mx-auto max-w-3xl text-center">
					<p className="text-[0.72rem] font-semibold tracking-wide text-[var(--accent-strong)]">
						Experience
					</p>
					<h2 className="section-title mt-3 text-2xl sm:text-[1.75rem]">
						Where I've worked
					</h2>
				</div>

				<div className="mx-auto mt-12 max-w-2xl space-y-12 sm:mt-14 sm:space-y-14">
					{/* ── Liberty Mutual ── */}
					<article className="border-l-2 border-border pl-5 sm:pl-6">
						<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
							<h3 className="text-xl font-semibold tracking-tight text-[var(--text-strong)]">
								Software Engineer
							</h3>
							<span className="text-sm shrink-0 text-[var(--text-muted)]">
								Jan 2025 — Present
							</span>
						</div>

						<p className="mt-1 text-sm text-[var(--text-muted)]">
							Liberty Mutual Insurance (Contract) · Tempe, Arizona
						</p>

						<p className="mt-4 text-[15px] leading-relaxed text-foreground sm:text-base">
							Building backend services for Liberty Mutual's
							policy and claims platforms, with a focus on API
							design, secure data access, event-driven
							integrations, and production reliability across core
							insurance workflows, while also contributing to
							internal frontend workflows where needed.
						</p>

						<div className="mt-4 flex flex-wrap gap-1.5">
							{[
								'Java',
								'Spring Boot',
								'REST APIs',
								'Spring Security',
								'PostgreSQL',
								'AWS RDS',
								'Kafka',
								'Docker',
								'Jenkins',
								'React',
								'TypeScript',
							].map((tech) => (
								<span
									key={tech}
									className="rounded-full border border-border bg-[var(--chip-bg)] px-2.5 py-0.5 text-xs text-[var(--text-muted)]"
								>
									{tech}
								</span>
							))}
						</div>
					</article>

					{/* ── EY GDS ── */}
					<article className="border-l-2 border-border pl-5 sm:pl-6">
						<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
							<h3 className="text-xl font-semibold tracking-tight text-[var(--text-strong)]">
								Associate Software Engineer
							</h3>
							<span className="text-sm shrink-0 text-[var(--text-muted)]">
								Sept 2020 — July 2023
							</span>
						</div>

						<p className="mt-1 text-sm text-[var(--text-muted)]">
							EY GDS · Kolkata, India
						</p>

						<p className="mt-4 text-[15px] leading-relaxed text-foreground sm:text-base">
							Worked on internal enterprise systems and data
							workflows with emphasis on backend development,
							batch processing, service integration, and
							operational tooling, building software that
							supported document-heavy business operations and
							internal dashboards.
						</p>

						<div className="mt-4 flex flex-wrap gap-1.5">
							{[
								'Java EE',
								'Spring Boot',
								'AWS',
								'MySQL',
								'REST APIs',
								'Hibernate/JPA',
								'Spring Batch',
								'SQL',
								'Angular',
								'HTML',
								'CSS',
								'JavaScript',
							].map((tech) => (
								<span
									key={tech}
									className="rounded-full border border-border bg-[var(--chip-bg)] px-2.5 py-0.5 text-xs text-[var(--text-muted)]"
								>
									{tech}
								</span>
							))}
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}
