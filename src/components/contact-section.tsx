import { Github, Linkedin } from 'lucide-react'
import { SectionShell } from '#/components/section-shell'

const contactSecondaryCtaClassName =
	'inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/35 px-4 py-2 text-sm font-medium text-[var(--text-muted)] transition-[color,background-color,border-color] duration-200 hover:border-border hover:bg-card/60 hover:text-[var(--text-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60'

export default function ContactSection() {
	return (
		<SectionShell id="contact" className="border-t border-border">
			<div className="mx-auto flex max-w-2xl flex-col items-center text-center">
				<p className="text-[0.72rem] font-semibold tracking-wide text-[var(--accent-strong)]">
					Contact
				</p>

				<h2 className="section-title mt-3 text-2xl sm:text-[1.75rem]">
					Open to software engineering roles
				</h2>

				<p className="mx-auto mt-4 max-w-[44rem] text-[15px] leading-relaxed text-[var(--text-body)] sm:text-base">
					Currently looking for opportunities to build reliable
					products and contribute to real-world systems. Email is the
					best way to reach me.
				</p>

				<div className="mt-6 flex flex-col items-center gap-3 sm:mt-7">
					<a
						href="mailto:apply.bhavya.kandhari@gmail.com"
						className="button-primary inline-flex items-center rounded-[8px] px-5 py-2.5 text-sm font-medium hover:text-primary-foreground"
					>
						Email me
					</a>

					<div className="flex flex-wrap items-center justify-center gap-2">
						<a
							href="https://linkedin.com/in/kandharibhavya"
							target="_blank"
							rel="noopener noreferrer"
							className={contactSecondaryCtaClassName}
						>
							<Linkedin className="size-3.5" />
							LinkedIn
						</a>
						<a
							href="https://github.com/bkandh30"
							target="_blank"
							rel="noopener noreferrer"
							className={contactSecondaryCtaClassName}
						>
							<Github className="size-3.5" />
							GitHub
						</a>
					</div>
				</div>
			</div>
		</SectionShell>
	)
}
