import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
	{
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/kandharibhavya',
		icon: Linkedin,
	},
	{
		label: 'GitHub',
		href: 'https://github.com/bkandh30',
		icon: Github,
	},
	{
		label: 'Email',
		href: 'mailto:apply.bhavya.kandhari@gmail.com',
		icon: Mail,
	},
] as const

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
						href="/blog"
						className="group ml-1 text-sm font-medium text-muted-foreground transition-colors hover:text-[var(--text-body)]"
					>
						Blog
						<span className="ml-0.5 inline-block transition-transform group-hover:translate-x-0.5">
							→
						</span>
					</a>
				</div>

				<div
					className="mt-5 flex items-center justify-center gap-3 rise-in"
					style={{ animationDelay: '480ms' }}
				>
					{socialLinks.map((link) => {
						const Icon = link.icon

						return (
							<a
								key={link.label}
								href={link.href}
								target={
									link.href.startsWith('mailto:')
										? undefined
										: '_blank'
								}
								rel={
									link.href.startsWith('mailto:')
										? undefined
										: 'noopener noreferrer'
								}
								aria-label={link.label}
								className="inline-flex size-10 items-center justify-center rounded-full border border-border/80 bg-card/35 text-muted-foreground shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-[color,background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-border hover:bg-white/6 hover:text-[var(--text-strong)]"
							>
								<Icon size={17} strokeWidth={1.9} />
							</a>
						)
					})}
				</div>
			</div>
		</section>
	)
}
