export default function EducationSection() {
	return (
		<section id="education" className="border-t border-border">
			<div className="page-wrap py-20 sm:py-28">
				<div className="mx-auto max-w-3xl text-center">
					<p className="text-[0.72rem] font-semibold tracking-wide text-[var(--accent-strong)]">
						Education
					</p>
					<h2 className="section-title mt-3 text-2xl sm:text-[1.75rem]">
						Academic foundation behind my thinking.
					</h2>
				</div>

				<div className="mx-auto mt-12 max-w-2xl space-y-10 text-left sm:mt-14 sm:space-y-12">
					{/* ── Arizona State University ── */}
					<article className="border-l-2 border-border pl-5 sm:pl-6">
						<div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
							<h3 className="text-xl font-semibold tracking-tight text-[var(--text-strong)]">
								Arizona State University
							</h3>
							<span className="text-sm shrink-0 text-[var(--text-muted)]">
								Aug 2023 — May 2025
							</span>
						</div>

						<p className="mt-1.5 text-[15px] text-foreground sm:text-base">
							Master of Science in Computer Science
						</p>
						<p className="mt-1 text-sm text-[var(--text-muted)]">
							Tempe, Arizona
						</p>
					</article>

					{/* ── Amity University Noida ── */}
					<article className="border-l-2 border-border pl-5 sm:pl-6">
						<div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
							<h3 className="text-xl font-semibold tracking-tight text-[var(--text-strong)]">
								Amity University Noida
							</h3>
							<span className="text-sm shrink-0 text-[var(--text-muted)]">
								Aug 2017 — May 2021
							</span>
						</div>

						<p className="mt-1.5 text-[15px] text-foreground sm:text-base">
							Bachelor of Technology in Computer Science
						</p>
						<p className="mt-1 text-sm text-[var(--text-muted)]">
							Noida, India
						</p>
					</article>
				</div>
			</div>
		</section>
	)
}
