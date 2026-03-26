import { cn } from '@/lib/utils'

export function DottedBackground({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn(
				'pointer-events-none absolute inset-0 overflow-hidden',
				className,
			)}
		>
			<div
				className="absolute inset-0"
				style={{
					backgroundImage:
						'radial-gradient(circle, rgba(212, 187, 138, 0.07) 1px, transparent 1px)',
					backgroundSize: '32px 32px',
					backgroundPosition: 'center center',
					maskImage:
						'radial-gradient(ellipse at center, black 55%, transparent 100%)',
					WebkitMaskImage:
						'radial-gradient(ellipse at center, black 55%, transparent 100%)',
				}}
			/>
		</div>
	)
}
