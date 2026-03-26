import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'

const navItems = [
	{ label: 'About', href: '/#about' },
	{ label: 'Experience', href: '/#experience' },
	{ label: 'Skills', href: '/#skills' },
	{ label: 'Education', href: '/#education' },
	{ label: 'Projects', href: '/#projects' },
	{ label: 'Contact Me', href: '/#contact' },
	{ label: 'Blog', href: '/blog', isRoute: true as const },
]

export function SiteHeader() {
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 bg-background border-b border-border">
			<div className="page-wrap flex items-center justify-between py-4">
				<Link
					to="/"
					className="text-zinc-100 hover:text-white text-[15px] sm:text-base font-semibold tracking-[-0.02em] transition-colors"
				>
					Bhavya Kandhari
				</Link>

				<nav className="hidden lg:block">
					<ul className="flex items-center gap-5">
						{navItems.map((item) => (
							<li key={item.href}>
								{item.isRoute ? (
									<Link
										to={item.href}
										className="nav-link text-[13px] font-medium"
									>
										{item.label}
									</Link>
								) : (
									<a
										href={item.href}
										className="nav-link text-[13px] font-medium"
									>
										{item.label}
									</a>
								)}
							</li>
						))}
					</ul>
				</nav>

				<button
					className="lg:hidden p-1.5 -mr-1.5 text-muted-foreground hover:text-foreground transition-colors"
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
				>
					{mobileOpen ? <X size={20} /> : <Menu size={20} />}
				</button>
			</div>

			{mobileOpen && (
				<nav className="lg:hidden border-t border-border">
					<ul className="page-wrap flex flex-col gap-1 py-3">
						{navItems.map((item) => (
							<li key={item.href}>
								{item.isRoute ? (
									<Link
										to={item.href}
										className="nav-link block py-2 text-[13px] font-medium"
										onClick={() => setMobileOpen(false)}
									>
										{item.label}
									</Link>
								) : (
									<a
										href={item.href}
										className="nav-link block py-2 text-[13px] font-medium"
										onClick={() => setMobileOpen(false)}
									>
										{item.label}
									</a>
								)}
							</li>
						))}
					</ul>
				</nav>
			)}
		</header>
	)
}
