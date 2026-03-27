import { useEffect, useState } from 'react'
import { createServerFn } from '@tanstack/react-start'
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

const GITHUB_USERNAME = 'bkandh30'

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
	{ label: 'Mon', gridRow: 1 },
	{ label: 'Tue', gridRow: 2 },
	{ label: 'Wed', gridRow: 3 },
	{ label: 'Thu', gridRow: 4 },
	{ label: 'Fri', gridRow: 5 },
	{ label: 'Sat', gridRow: 6 },
	{ label: 'Sun', gridRow: 7 },
] as const

const contributionLevelClasses = {
	NONE: 'bg-[var(--surface-strong)]/80',
	FIRST_QUARTILE: 'bg-emerald-950/80',
	SECOND_QUARTILE: 'bg-emerald-900/85',
	THIRD_QUARTILE: 'bg-emerald-800/85',
	FOURTH_QUARTILE: 'bg-emerald-700/90',
} as const

type GitHubContributionLevel = keyof typeof contributionLevelClasses

type GitHubContributionDay = {
	date: string
	contributionCount: number
	contributionLevel: GitHubContributionLevel
}

type GitHubContributionWeek = {
	firstDay: string
	contributionDays: Array<GitHubContributionDay>
}

type GitHubContributionMonth = {
	label: string
	weekIndex: number
	span: number
}

type GitHubContributionCalendar = {
	months: Array<GitHubContributionMonth>
	weeks: Array<GitHubContributionWeek>
}

type GitHubActivityResponse =
	| {
			ok: true
			calendar: GitHubContributionCalendar
	  }
	| {
			ok: false
			error: string
	  }

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

type GitHubGraphQLResponse = {
	data?: {
		user?: {
			contributionsCollection?: {
				contributionCalendar?: {
					months: Array<{
						firstDay: string
						name: string
						totalWeeks: number
					}>
					weeks: Array<{
						firstDay: string
						contributionDays: Array<{
							date: string
							contributionCount: number
							contributionLevel: GitHubContributionLevel
						}>
					}>
				}
			}
		}
	}
	errors?: Array<{
		message: string
	}>
}

const getGitHubActivity = createServerFn({ method: 'GET' }).handler(
	async (): Promise<GitHubActivityResponse> => {
		const token =
			process.env.GITHUB_TOKEN ??
			process.env.GH_TOKEN ??
			process.env.GITHUB_ACCESS_TOKEN

		if (!token) {
			return { ok: false, error: 'Missing GitHub token' }
		}

		const to = new Date()
		const from = new Date(to)
		from.setFullYear(from.getFullYear() - 1)

		const response = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
				'User-Agent': 'portfolio-v4',
			},
			cache: 'no-store',
			body: JSON.stringify({
				query: `
					query GetGitHubActivity($login: String!, $from: DateTime!, $to: DateTime!) {
						user(login: $login) {
							contributionsCollection(from: $from, to: $to) {
								contributionCalendar {
									months {
										firstDay
										name
										totalWeeks
									}
									weeks {
										firstDay
										contributionDays {
											date
											contributionCount
											contributionLevel
										}
									}
								}
							}
						}
					}
				`,
				variables: {
					login: GITHUB_USERNAME,
					from: from.toISOString(),
					to: to.toISOString(),
				},
			}),
		})

		if (!response.ok) {
			return { ok: false, error: 'GitHub request failed' }
		}

		const json = (await response.json()) as GitHubGraphQLResponse

		if (json.errors?.length) {
			return {
				ok: false,
				error: json.errors[0]?.message ?? 'GitHub error',
			}
		}

		const calendar =
			json.data?.user?.contributionsCollection?.contributionCalendar

		if (!calendar) {
			return { ok: false, error: 'Contribution calendar unavailable' }
		}

		const weeks = calendar.weeks.map((week) => ({
			firstDay: week.firstDay,
			contributionDays: week.contributionDays,
		}))

		const months = calendar.months
			.map((month) => {
				const weekIndex = weeks.findIndex(
					(week) => week.firstDay === month.firstDay,
				)

				return {
					label: month.name.slice(0, 3),
					weekIndex,
					span: month.totalWeeks,
				}
			})
			.filter((month) => month.weekIndex >= 0)

		return {
			ok: true,
			calendar: {
				months,
				weeks,
			},
		}
	},
)

function getContributionRow(date: string) {
	const day = new Date(`${date}T00:00:00Z`).getUTCDay()

	return day === 0 ? 7 : day
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

export default function ProjectsSection() {
	const [githubActivity, setGitHubActivity] = useState<GitHubActivityState>({
		status: 'loading',
		calendar: null,
	})

	useEffect(() => {
		let isMounted = true

		const loadGitHubActivity = async () => {
			try {
				const result = await getGitHubActivity()

				if (!isMounted) {
					return
				}

				if (result.ok) {
					setGitHubActivity({
						status: 'ready',
						calendar: result.calendar,
					})
					return
				}

				setGitHubActivity({ status: 'error', calendar: null })
			} catch {
				if (isMounted) {
					setGitHubActivity({ status: 'error', calendar: null })
				}
			}
		}

		void loadGitHubActivity()

		return () => {
			isMounted = false
		}
	}, [])

	return (
		<section id="projects" className="border-t border-border">
			<div className="page-wrap py-20 sm:py-28">
				<div className="mx-auto max-w-3xl text-center">
					<p className="text-[0.72rem] font-semibold tracking-wide text-[var(--accent-strong)]">
						Projects
					</p>
					<h2 className="section-title mt-3 text-2xl sm:text-[1.75rem]">
						Full-stack applications I've designed, built, and
						shipped.
					</h2>
				</div>

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

				<div className="mx-auto mt-14 w-full max-w-2xl sm:mt-16">
					<h3 className="text-center text-base font-semibold tracking-tight text-[var(--text-strong)] sm:text-lg">
						GitHub activity
					</h3>

					<div className="mt-5 rounded-2xl border border-border/80 bg-card/40 px-4 py-4 sm:mt-6 sm:px-5 sm:py-5">
						<GitHubActivityGraph state={githubActivity} />
					</div>

					<div className="mt-4 flex justify-center">
						<a
							href={`https://github.com/${GITHUB_USERNAME}`}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-full border border-border/80 px-3 py-1.5 text-[12px] font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-strong)]"
						>
							<Github className="size-3" />
							View GitHub Profile
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
