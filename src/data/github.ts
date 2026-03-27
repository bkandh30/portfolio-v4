import { createServerFn } from '@tanstack/react-start'

const GITHUB_USERNAME = 'bkandh30'
const GITHUB_ACTIVITY_CACHE_SECONDS = 60 * 60 * 24 * 7

type GitHubContributionLevel =
	| 'NONE'
	| 'FIRST_QUARTILE'
	| 'SECOND_QUARTILE'
	| 'THIRD_QUARTILE'
	| 'FOURTH_QUARTILE'

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
}

export type GitHubContributionCalendar = {
	months: Array<GitHubContributionMonth>
	weeks: Array<GitHubContributionWeek>
}

export type GitHubActivityResponse =
	| {
			ok: true
			calendar: GitHubContributionCalendar
	  }
	| {
			ok: false
			error: string
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

const monthLabelFormatter = new Intl.DateTimeFormat('en-US', {
	month: 'short',
	timeZone: 'UTC',
})

function getMonthLabel(date: string) {
	return monthLabelFormatter.format(new Date(`${date}T00:00:00Z`))
}

function buildContributionMonths(weeks: Array<GitHubContributionWeek>) {
	if (!weeks.length) {
		return []
	}

	const months: Array<GitHubContributionMonth> = []
	const minLabelGapWeeks = 3
	const firstVisibleDate =
		weeks[0]?.contributionDays[0]?.date ?? weeks[0]?.firstDay

	if (firstVisibleDate) {
		months.push({
			label: getMonthLabel(firstVisibleDate),
			weekIndex: 0,
		})
	}

	let lastRenderedWeekIndex = 0

	for (let weekIndex = 1; weekIndex < weeks.length; weekIndex += 1) {
		const firstOfMonth = weeks[weekIndex]?.contributionDays.find((day) =>
			day.date.endsWith('-01'),
		)

		if (!firstOfMonth) {
			continue
		}

		if (weekIndex - lastRenderedWeekIndex < minLabelGapWeeks) {
			continue
		}

		months.push({
			label: getMonthLabel(firstOfMonth.date),
			weekIndex,
		})
		lastRenderedWeekIndex = weekIndex
	}

	return months
}

export const getGitHubActivity = createServerFn({ method: 'GET' }).handler(
	async (serverEvent): Promise<GitHubActivityResponse> => {
		const responseHeaders = (
			serverEvent as { context?: { response?: { headers: Headers } } }
		).context?.response?.headers

		responseHeaders?.set(
			'Cache-Control',
			`public, max-age=${GITHUB_ACTIVITY_CACHE_SECONDS}, s-maxage=${GITHUB_ACTIVITY_CACHE_SECONDS}, stale-while-revalidate=86400`,
		)
		responseHeaders?.set(
			'CDN-Cache-Control',
			`public, max-age=${GITHUB_ACTIVITY_CACHE_SECONDS}, stale-while-revalidate=86400`,
		)

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
			cache: 'force-cache',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
				'User-Agent': 'portfolio-v4',
			},
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

		const months = buildContributionMonths(weeks)

		return {
			ok: true,
			calendar: {
				months,
				weeks,
			},
		}
	},
)
