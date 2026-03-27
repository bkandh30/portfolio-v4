import {
	timelineBodyClassName,
	timelineInnerClassName,
	timelineItemClassName,
	timelineTitleClassName,
} from '#/lib/timeline-hover'
import { SectionShell } from '#/components/section-shell'

export default function EducationSection() {
	return (
		<SectionShell id="education" className="border-t border-border">
			<div className="mx-auto max-w-3xl text-center">
				<p className="text-[0.72rem] font-semibold tracking-wide text-[var(--accent-strong)]">
					Education
				</p>
				<h2 className="section-title mt-3 text-2xl sm:text-[1.75rem]">
					Academic foundation behind my thinking.
				</h2>
			</div>

			<div className="mx-auto mt-10 max-w-2xl space-y-8 text-left sm:mt-12 sm:space-y-10">
				{/* ── Arizona State University ── */}
				<article className={timelineItemClassName}>
					<div className={timelineInnerClassName}>
						<div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
							<h3 className={timelineTitleClassName}>
								Arizona State University
							</h3>
							<span className="text-sm shrink-0 text-[var(--text-muted)]">
								Aug 2023 — May 2025
							</span>
						</div>

						<p className={`${timelineBodyClassName} mt-1.5`}>
							Master of Science in Computer Science
						</p>
						<p className="mt-1 text-sm text-[var(--text-muted)]">
							Tempe, Arizona
						</p>
					</div>
				</article>

				{/* ── Amity University Noida ── */}
				<article className={timelineItemClassName}>
					<div className={timelineInnerClassName}>
						<div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
							<h3 className={timelineTitleClassName}>
								Amity University Noida
							</h3>
							<span className="text-sm shrink-0 text-[var(--text-muted)]">
								Aug 2017 — May 2021
							</span>
						</div>

						<p className={`${timelineBodyClassName} mt-1.5`}>
							Bachelor of Technology in Computer Science
						</p>
						<p className="mt-1 text-sm text-[var(--text-muted)]">
							Noida, India
						</p>
					</div>
				</article>
			</div>
		</SectionShell>
	)
}
