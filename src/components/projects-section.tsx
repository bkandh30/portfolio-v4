import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

const projects = [
	{
		name: 'EchoForge',
		description:
			'AI-powered text-to-speech SaaS platform focused on modern full-stack product architecture, authenticated user workflows, media generation, and production-ready deployment.',
		image: '/images/projects/echoforge.png',
		tech: [
			'Next.js',
			'TypeScript',
			'tRPC',
			'Prisma',
			'Clerk',
			'PostgreSQL',
			'Cloudflare R2',
			'TanStack Query',
			'Vercel',
		],
		liveUrl: 'https://echoforgelabs.vercel.app/',
		githubUrl: 'https://github.com/bkandh30/echoforge',
	},
	{
		name: 'Scouttrace',
		description:
			'Full-stack web application for discovering, importing, organizing, and summarizing web content, with emphasis on clean UX, authenticated workflows, background processing, and production-focused engineering.',
		image: '/images/projects/scouttrace.png',
		tech: [
			'TanStack Start',
			'TypeScript',
			'React',
			'Tailwind CSS',
			'shadcn/ui',
			'Better Auth',
			'PostgreSQL',
			'Prisma',
			'Vercel',
		],
		liveUrl: 'https://scouttrace.vercel.app/',
		githubUrl: 'https://github.com/bkandh30/scouttrace',
	},
]

const moreProjects = [
	{
		name: 'GoFlix - RESTful Movie Management API',
		description:
			'Backend-focused streaming application built in Go, with emphasis on REST APIs, structured service design, database workflows, and production-minded application architecture.',
		githubUrl: 'https://github.com/bkandh30/GoFlix',
	},
	{
		name: 'Rust Metered Finance API Server',
		description:
			'Production-ready API server built in Rust for usage tracking, quotas, rate limiting, and financial/usage-oriented backend workflows.',
		githubUrl: 'https://github.com/bkandh30/metered-finance-api',
	},
	{
		name: 'AWS Cloud Resume Challenge',
		description:
			'Cloud-based resume project built around serverless AWS services, infrastructure workflows, deployment automation, and practical full-stack cloud engineering.',
		githubUrl: 'https://github.com/bkandh30/AWS-Cloud-Resume-Challenge',
	},
]

export default function ProjectsSection() {
	return (
		<section id="projects" className="border-t border-border">
			<div className="page-wrap py-20 sm:py-28">
				<p className="text-[0.72rem] font-semibold tracking-wide text-[var(--accent-strong)]">
					Projects
				</p>
				<h2 className="section-title mt-3 text-2xl sm:text-[1.75rem]">
					Full-stack applications I've designed, built, and shipped.
				</h2>

				<div className="mx-auto mt-12 sm:mt-14 grid max-w-3xl grid-cols-1 gap-5 md:grid-cols-2">
					{projects.map((project) => (
						<Card
							key={project.name}
							className="h-full gap-0 overflow-hidden border-border bg-card p-0 shadow-none"
						>
							<div className="aspect-[16/10] bg-[var(--surface-strong)]">
								<img
									src={project.image}
									alt={`${project.name} project preview`}
									className="h-full w-full object-cover"
								/>
							</div>

							<CardHeader className="gap-1.5 px-4 pt-4 pb-0">
								<CardTitle className="text-[15px] tracking-tight text-[var(--text-strong)]">
									{project.name}
								</CardTitle>
								<CardDescription className="text-[13px] leading-relaxed text-[var(--text-body)]">
									{project.description}
								</CardDescription>
							</CardHeader>

							<CardContent className="px-4 pt-3 pb-0">
								<div className="flex flex-wrap gap-1">
									{project.tech.map((t) => (
										<span
											key={t}
											className="rounded-full border border-border bg-[var(--chip-bg)] px-2 py-px text-[11px] text-[var(--text-muted)]"
										>
											{t}
										</span>
									))}
								</div>
							</CardContent>

							<CardFooter className="mt-auto gap-2 px-4 pb-4 pt-3">
								<Button variant="outline" size="xs" asChild>
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										<ExternalLink className="size-3" />
										Live Demo
									</a>
								</Button>
								<Button variant="ghost" size="xs" asChild>
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="size-3" />
										GitHub
									</a>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>

				<div className="mx-auto mt-14 w-full max-w-2xl sm:mt-16">
					<h3 className="text-center text-base font-semibold tracking-tight text-[var(--text-strong)] sm:text-lg">
						More projects
					</h3>

					<div className="mt-5 space-y-3 sm:mt-6">
						{moreProjects.map((project) => (
							<div
								key={project.name}
								className="rounded-2xl border border-border/80 bg-card/40 px-5 py-4"
							>
								<div className="flex flex-col gap-3">
									<div className="space-y-1.5">
										<h4 className="text-sm font-semibold tracking-tight text-[var(--text-strong)] sm:text-[15px]">
											{project.name}
										</h4>
										<p className="text-[13px] leading-relaxed text-[var(--text-body)]">
											{project.description}
										</p>
									</div>

									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex w-fit items-center gap-2 text-[12px] font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-strong)]"
									>
										<Github className="size-3" />
										GitHub
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
