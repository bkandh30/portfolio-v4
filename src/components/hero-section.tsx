import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Mail } from 'lucide-react'
import { SectionShell } from '#/components/section-shell'

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

const profilePhotoSrc = '/LinkedinHeadshot.png'

export default function HomeHero() {
	return (
		<SectionShell spacing="hero">
			<div className="mx-auto max-w-5xl lg:grid lg:grid-cols-[minmax(0,16.75rem)_minmax(0,1fr)] lg:items-center lg:gap-12 xl:gap-18">
				<div className="hidden lg:flex lg:justify-center">
					<div
						className="rise-in relative flex size-[16.75rem] items-center justify-center rounded-full border border-border/70 bg-card/20"
						style={{ animationDelay: '120ms' }}
					>
						<div className="absolute inset-[10px] rounded-full border border-white/6" />
						<img
							src={profilePhotoSrc}
							alt="Portrait of Bhavya Kandhari"
							className="size-[15rem] rounded-full object-cover object-center"
							loading="eager"
							decoding="async"
						/>
					</div>
				</div>

				<div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-3xl lg:text-left">
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
						className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base rise-in lg:mx-0"
						style={{ animationDelay: '320ms' }}
					>
						I've shipped event-driven workflows, backend APIs, and
						platform infrastructure alongside modern web
						applications built for real users. My focus is clean
						architecture, reliable systems, and code that holds up
						in production.
					</p>

					<div
						className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8 rise-in lg:justify-start"
						style={{ animationDelay: '400ms' }}
					>
						<a
							href="/resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="button-primary inline-flex items-center rounded-[8px] px-5 py-2.5 text-sm font-medium"
						>
							Resume
						</a>
						<a
							href="/blog"
							className="text-link-subtle group ml-1 text-sm font-medium"
						>
							Blog
							<span className="ml-0.5 inline-block transition-transform group-hover:translate-x-0.5">
								→
							</span>
						</a>
					</div>

					<div
						className="mt-4 flex items-center justify-center gap-3 rise-in lg:justify-start"
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
									className="interactive-surface-button focus-ring-subtle inline-flex size-10 items-center justify-center rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm hover:-translate-y-0.5"
								>
									<Icon size={17} strokeWidth={1.9} />
								</a>
							)
						})}
					</div>
				</div>
			</div>
		</SectionShell>
	)
}
