import {
	timelineBodyClassName,
	timelineInnerClassName,
	timelineItemClassName,
	timelineTitleClassName,
} from '#/lib/timeline-hover'
import { SectionShell } from '#/components/section-shell'

export default function ExperienceSection() {
	return (
		<SectionShell id="experience" className="border-t border-border">
			<div className="mx-auto max-w-3xl text-center">
				<p className="text-[0.72rem] font-semibold tracking-wide text-[var(--accent-strong)]">
					Experience
				</p>
				<h2 className="section-title mt-3 text-2xl sm:text-[1.75rem]">
					Where I've worked
				</h2>
			</div>

			<div className="mx-auto mt-10 max-w-2xl space-y-10 sm:mt-12 sm:space-y-12">
				{/* ── Liberty Mutual ── */}
				<article className={timelineItemClassName}>
					<div className={timelineInnerClassName}>
						<div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
							<h3 className={timelineTitleClassName}>
								Software Engineer
							</h3>
							<span className="text-sm shrink-0 text-[var(--text-muted)]">
								Jan 2025 — Present
							</span>
						</div>

						<p className="mt-1 text-sm text-[var(--text-muted)]">
							Liberty Mutual Insurance (Contract) · Tempe, Arizona
						</p>

						<p
							className={`${timelineBodyClassName} mt-4 leading-relaxed`}
						>
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
									className="chip rounded-full px-2.5 py-0.5 text-xs"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				</article>

				{/* ── EY GDS ── */}
				<article className={timelineItemClassName}>
					<div className={timelineInnerClassName}>
						<div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
							<h3 className={timelineTitleClassName}>
								Associate Software Engineer
							</h3>
							<span className="text-sm shrink-0 text-[var(--text-muted)]">
								Sept 2020 — July 2023
							</span>
						</div>

						<p className="mt-1 text-sm text-[var(--text-muted)]">
							EY GDS · Kolkata, India
						</p>

						<p
							className={`${timelineBodyClassName} mt-4 leading-relaxed`}
						>
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
									className="chip rounded-full px-2.5 py-0.5 text-xs"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				</article>
			</div>
		</SectionShell>
	)
}
