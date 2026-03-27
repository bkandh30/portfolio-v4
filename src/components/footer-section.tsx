export default function FooterSection() {
	return (
		<footer className="border-t border-border">
			<div className="page-wrap py-8 sm:py-9">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-[13px] leading-relaxed text-[var(--text-muted)] sm:text-sm">
						Built with{' '}
						<span className="text-[var(--accent-strong)]/90">
							TanStack Start
						</span>
						,{' '}
						<span className="text-[var(--accent-strong)]/90">
							TypeScript
						</span>
						,{' '}
						<span className="text-[var(--accent-strong)]/90">
							Tailwind CSS
						</span>
						, and{' '}
						<span className="text-[var(--accent-strong)]/90">
							shadcn/ui
						</span>
						.
					</p>

					<p className="mt-2 text-[12px] text-[var(--text-muted)]/85 sm:text-[13px]">
						© 2026 Bhavya Kandhari. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}
