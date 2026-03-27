import { Await } from '@tanstack/react-router'
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
import type {
	GitHubActivityResponse,
	GitHubContributionCalendar,
} from '#/data/github'
import { sectionPanelInsetClassName } from '#/lib/layout'
import { SectionShell } from '#/components/section-shell'

const GITHUB_USERNAME = 'bkandh30'

const githubButtonClassName =
	'interactive-surface-button shadow-none hover:shadow-none'

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
		image: '/scouttrace-thumbnail.jpeg',
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

const activityWeekLabels = [
	{ label: 'Mon', gridRow: 2 },
	{ label: 'Wed', gridRow: 4 },
	{ label: 'Fri', gridRow: 6 },
] as const

const contributionLevelClasses = {
	NONE: 'bg-[var(--surface-strong)]/80',
	FIRST_QUARTILE: 'bg-emerald-950/80',
	SECOND_QUARTILE: 'bg-emerald-900/85',
	THIRD_QUARTILE: 'bg-emerald-800/85',
	FOURTH_QUARTILE: 'bg-emerald-700/90',
} as const

type GitHubActivityState =
	| {
			status: 'loading'
			calendar: null
	  }
	| {
			status: 'ready'
			calendar: GitHubContributionCalendar
	  }
	| {
			status: 'error'
			calendar: null
	  }

function getContributionRow(date: string) {
	const day = new Date(`${date}T00:00:00Z`).getUTCDay()

	return day === 0 ? 7 : day
}

function toGitHubActivityState(
	result: GitHubActivityResponse,
): GitHubActivityState {
	if (result.ok) {
		return {
			status: 'ready',
			calendar: result.calendar,
		}
	}

	return {
		status: 'error',
		calendar: null,
	}
}

function GitHubActivityGraph({ state }: { state: GitHubActivityState }) {
	if (state.status !== 'ready') {
		return (
			<div className="flex min-h-[144px] items-center justify-center rounded-xl border border-dashed border-border/70 bg-[var(--surface-strong)]/20 px-4 text-center text-[12px] leading-relaxed text-[var(--text-muted)]">
				{state.status === 'loading'
					? 'Loading contribution activity...'
					: 'Contribution activity is unavailable right now.'}
			</div>
		)
	}

	const { calendar } = state
	const weekAreaWidth = `calc(${calendar.weeks.length} * var(--cell-size) + ${Math.max(
		calendar.weeks.length - 1,
		0,
	)} * var(--cell-gap))`

	return (
		<div className="overflow-x-auto pb-1">
			<div className="mx-auto w-fit min-w-max [--cell-gap:4px] [--cell-size:8px] [--label-column:28px] sm:[--cell-size:10px] sm:[--label-column:32px]">
				<div className="grid grid-cols-[var(--label-column)_auto] grid-rows-[16px_auto] gap-x-2 gap-y-2.5">
					<div />
					<div
						className="relative h-4"
						style={{ width: weekAreaWidth }}
					>
						{calendar.months.map((month) => (
							<div
								key={`${month.label}-${month.weekIndex}`}
								className="absolute top-0 whitespace-nowrap pl-px text-[10px] leading-none text-[var(--text-muted)]"
								style={{
									left: `calc(${month.weekIndex} * (var(--cell-size) + var(--cell-gap)))`,
								}}
							>
								{month.label}
							</div>
						))}
					</div>

					<div
						className="grid gap-y-[var(--cell-gap)]"
						style={{
							gridTemplateRows: 'repeat(7, var(--cell-size))',
						}}
					>
						{activityWeekLabels.map((day) => (
							<div
								key={day.label}
								className="flex h-[var(--cell-size)] items-center justify-end pr-2 text-[10px] leading-none text-[var(--text-muted)]"
								style={{ gridRow: day.gridRow }}
							>
								{day.label}
							</div>
						))}
					</div>

					<div
						role="img"
						aria-label={`GitHub contribution activity for ${GITHUB_USERNAME}`}
						className="grid gap-x-[var(--cell-gap)] gap-y-[var(--cell-gap)]"
						style={{
							width: weekAreaWidth,
							gridTemplateColumns: `repeat(${calendar.weeks.length}, var(--cell-size))`,
							gridTemplateRows: 'repeat(7, var(--cell-size))',
						}}
					>
						{calendar.weeks.map((week, weekIndex) =>
							week.contributionDays.map((day) => (
								<div
									key={day.date}
									title={`${day.contributionCount} contributions on ${day.date}`}
									className={`rounded-[3px] border border-white/[0.04] ${contributionLevelClasses[day.contributionLevel]}`}
									style={{
										gridColumn: `${weekIndex + 1}`,
										gridRow: `${getContributionRow(day.date)}`,
									}}
								/>
							)),
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

function DeferredGitHubActivity({
	githubActivityPromise,
}: {
	githubActivityPromise: Promise<GitHubActivityResponse>
}) {
	return (
		<Await
			promise={githubActivityPromise}
			fallback={
				<GitHubActivityGraph
					state={{ status: 'loading', calendar: null }}
				/>
			}
		>
			{(result) => (
				<GitHubActivityGraph state={toGitHubActivityState(result)} />
			)}
		</Await>
	)
}

export default function ProjectsSection({
	githubActivityPromise,
}: {
	githubActivityPromise: Promise<GitHubActivityResponse>
}) {
	return (
		<SectionShell id="projects" className="border-t border-border">
			<div className="mx-auto max-w-3xl text-center">
				<p className="text-[0.72rem] font-semibold tracking-wide text-[var(--accent-strong)]">
					Projects
				</p>
				<h2 className="section-title mt-3 text-2xl sm:text-[1.75rem]">
					Full-stack applications I've designed, built, and shipped.
				</h2>
			</div>

			<div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2">
				{projects.map((project) => (
					<Card
						key={project.name}
						className="interactive-card h-full gap-0 overflow-hidden border-border bg-card p-0 shadow-none"
					>
						<div className="aspect-[16/10] bg-[var(--surface-strong)]">
							<img
								src={project.image}
								alt={`${project.name} project preview`}
								className="h-full w-full object-cover"
							/>
						</div>

						<CardHeader
							className={`${sectionPanelInsetClassName} gap-1.5 pt-4 pb-0`}
						>
							<CardTitle className="text-[15px] tracking-tight text-[var(--text-strong)]">
								{project.name}
							</CardTitle>
							<CardDescription className="text-[13px] leading-relaxed text-[var(--text-body)]">
								{project.description}
							</CardDescription>
						</CardHeader>

						<CardContent
							className={`${sectionPanelInsetClassName} pt-3 pb-0`}
						>
							<div className="flex flex-wrap gap-1">
								{project.tech.map((t) => (
									<span
										key={t}
										className="chip rounded-full px-2 py-px text-[11px]"
									>
										{t}
									</span>
								))}
							</div>
						</CardContent>

						<CardFooter
							className={`${sectionPanelInsetClassName} mt-auto gap-2 pb-4 pt-3`}
						>
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
							<Button
								variant="outline"
								size="xs"
								className={githubButtonClassName}
								asChild
							>
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

			<div className="mx-auto mt-12 w-full max-w-2xl sm:mt-14">
				<h3 className="text-center text-base font-semibold tracking-tight text-[var(--text-strong)] sm:text-lg">
					More projects
				</h3>

				<div className="mt-5 space-y-3 sm:mt-6">
					{moreProjects.map((project) => (
						<div
							key={project.name}
							className={`interactive-card rounded-2xl border border-border/80 bg-card/40 ${sectionPanelInsetClassName} py-4`}
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
									className="interactive-surface-button focus-ring-subtle inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-medium"
								>
									<Github className="size-3" />
									GitHub
								</a>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="mx-auto mt-12 w-full max-w-2xl sm:mt-14">
				<h3 className="text-center text-base font-semibold tracking-tight text-[var(--text-strong)] sm:text-lg">
					GitHub activity
				</h3>

				<div
					className={`mt-5 rounded-2xl border border-border/80 bg-card/40 ${sectionPanelInsetClassName} py-4 sm:mt-6 sm:py-5`}
				>
					<DeferredGitHubActivity
						githubActivityPromise={githubActivityPromise}
					/>
				</div>

				<div className="mt-4 flex justify-center">
					<Button
						variant="outline"
						size="xs"
						className={`${githubButtonClassName} rounded-full px-3 py-1.5`}
						asChild
					>
						<a
							href={`https://github.com/${GITHUB_USERNAME}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github className="size-3" />
							View GitHub Profile
						</a>
					</Button>
				</div>
			</div>
		</SectionShell>
	)
}
