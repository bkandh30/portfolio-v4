import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '#/lib/utils'

const sectionSpacingClasses = {
	standard: 'py-[clamp(3.75rem,8vw,5rem)]',
	hero: 'pt-[clamp(5rem,10vw,7rem)] pb-[clamp(4rem,8vw,5rem)]',
	footer: 'py-[clamp(1.75rem,4vw,2.25rem)]',
} as const

type SectionShellProps = ComponentPropsWithoutRef<'section'> & {
	as?: 'div' | 'section'
	contentClassName?: string
	spacing?: keyof typeof sectionSpacingClasses
}

export function SectionShell({
	as = 'section',
	children,
	className,
	contentClassName,
	spacing = 'standard',
	...props
}: SectionShellProps) {
	const Component = as

	return (
		<Component className={className} {...props}>
			<div
				className={cn(
					'page-wrap',
					sectionSpacingClasses[spacing],
					contentClassName,
				)}
			>
				{children}
			</div>
		</Component>
	)
}
