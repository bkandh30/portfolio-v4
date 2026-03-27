export default function ContactSection() {
	return (
		<section id="contact" className="border-t border-border">
			<div className="page-wrap py-16 sm:py-20">
				<div className="mx-auto max-w-xl text-center">
					<p className="text-[0.72rem] font-semibold tracking-wide text-[var(--accent-strong)]">
						Contact
					</p>

					<h2 className="section-title mt-3 text-2xl sm:text-[1.75rem]">
						Let&apos;s connect
					</h2>

					<p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--text-body)] sm:text-base">
						I&apos;m always open to thoughtful conversations about
						backend, platform, and full-stack engineering
						opportunities.
					</p>

					<p className="mt-2.5 text-sm text-[var(--text-muted)]">
						Based in Tempe, Arizona
					</p>

					<div className="mt-6 flex flex-col items-center gap-3 sm:mt-7">
						<a
							href="mailto:your.email@example.com"
							className="button-primary inline-flex items-center rounded-[8px] px-5 py-2.5 text-sm font-medium hover:text-primary-foreground"
						>
							Email me
						</a>

						<div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-1 rounded-full border border-border/80 bg-card/35 px-4 py-2 text-sm">
							<a
								href="https://www.linkedin.com/in/your-linkedin"
								target="_blank"
								rel="noopener noreferrer"
								className="font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-strong)]"
							>
								LinkedIn
							</a>
							<span className="text-[10px] text-[var(--text-muted)]/60">
								/
							</span>
							<a
								href="https://github.com/your-github"
								target="_blank"
								rel="noopener noreferrer"
								className="font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-strong)]"
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
