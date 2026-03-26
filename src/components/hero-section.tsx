import { Badge } from '@/components/ui/badge'

export default function HomeHero() {
	return (
		<section className="page-wrap pt-24 pb-20 sm:pt-32 sm:pb-24">
			<div className="mx-auto max-w-2xl text-center">
				<div className="rise-in">
					<Badge
						variant="secondary"
						className="gap-1.5 border-border"
					>
						<span className="size-1.5 rounded-full bg-emerald-500" />
						Open to Work
					</Badge>
				</div>

				<p
					className="eyebrow mt-4 rise-in"
					style={{ animationDelay: '80ms' }}
				>
					Software Engineer · Tempe, Arizona
				</p>

				<h1
					className="display-title mt-4 text-4xl sm:text-5xl md:text-[3.5rem] rise-in"
					style={{ animationDelay: '160ms' }}
				>
					Bhavya Kandhari
				</h1>

				<p
					className="mt-5 text-lg font-medium text-[var(--text-body)] sm:text-xl rise-in"
					style={{ animationDelay: '240ms' }}
				>
					Engineering backend services, platform systems, and
					full-stack products — from design through production.
				</p>

				<p
					className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base rise-in"
					style={{ animationDelay: '320ms' }}
				>
					I've shipped event-driven workflows, backend APIs, and
					platform infrastructure alongside modern web applications
					built for real users. My focus is clean architecture,
					reliable systems, and code that holds up in production.
				</p>

				<div
					className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 rise-in"
					style={{ animationDelay: '400ms' }}
				>
					<a
						href="/resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="button-primary inline-flex items-center rounded-[8px] px-5 py-2.5 text-sm font-medium hover:text-primary-foreground"
					>
						Resume
					</a>
					<a
						href="/#contact"
						className="button-secondary inline-flex items-center rounded-[8px] px-5 py-2.5 text-sm font-medium hover:text-foreground"
					>
						Contact Me
					</a>
					<a
						href="/blog"
						className="group ml-1 text-sm font-medium text-muted-foreground transition-colors hover:text-[var(--text-body)]"
					>
						Blog
						<span className="ml-0.5 inline-block transition-transform group-hover:translate-x-0.5">
							→
						</span>
					</a>
				</div>
			</div>
		</section>
	)
}
