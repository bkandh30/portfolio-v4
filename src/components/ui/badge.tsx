import * as React from 'react'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'

import { cn } from '#/lib/utils'

const badgeVariants = cva(
	'focus-ring-subtle inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow] duration-200 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&>svg]:pointer-events-none [&>svg]:size-3',
	{
		variants: {
			variant: {
				default:
					'border border-[var(--primary-line)] bg-primary text-primary-foreground [a&]:hover:bg-[var(--primary-hover)]',
				secondary:
					'border border-border bg-secondary text-secondary-foreground [a&]:hover:border-[var(--interactive-border-hover)] [a&]:hover:bg-[var(--interactive-surface-hover)] [a&]:hover:text-[var(--text-strong)]',
				destructive:
					'border border-transparent bg-destructive text-white [a&]:hover:bg-[#c65d5d]',
				outline:
					'border-border bg-[var(--interactive-surface)] text-foreground [a&]:hover:border-[var(--interactive-border-hover)] [a&]:hover:bg-[var(--accent-muted-bg)] [a&]:hover:text-[var(--text-strong)]',
				ghost: 'text-[var(--text-body)] [a&]:hover:bg-[var(--accent-muted-bg)] [a&]:hover:text-[var(--text-strong)]',
				link: 'text-[var(--accent-strong)] underline-offset-4 [a&]:hover:text-[var(--link-hover)] [a&]:hover:underline',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

function Badge({
	className,
	variant = 'default',
	asChild = false,
	...props
}: React.ComponentProps<'span'> &
	VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
	const Comp = asChild ? Slot.Root : 'span'

	return (
		<Comp
			data-slot="badge"
			data-variant={variant}
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	)
}

export { Badge, badgeVariants }
