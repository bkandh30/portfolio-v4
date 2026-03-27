import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '#/components/ui/navigation-menu'
import { cn } from '#/lib/utils'

type SectionNavItem = {
	label: string
	to: '/'
	hash: string
	activeOptions: {
		exact: true
		includeHash: true
	}
}

type NavItem = SectionNavItem | { label: string; href: '/blog' }

const navItems: NavItem[] = [
	{
		label: 'About',
		to: '/',
		hash: 'about',
		activeOptions: { exact: true, includeHash: true },
	},
	{
		label: 'Experience',
		to: '/',
		hash: 'experience',
		activeOptions: { exact: true, includeHash: true },
	},
	{
		label: 'Skills',
		to: '/',
		hash: 'skills',
		activeOptions: { exact: true, includeHash: true },
	},
	{
		label: 'Education',
		to: '/',
		hash: 'education',
		activeOptions: { exact: true, includeHash: true },
	},
	{
		label: 'Projects',
		to: '/',
		hash: 'projects',
		activeOptions: { exact: true, includeHash: true },
	},
	{
		label: 'Contact Me',
		to: '/',
		hash: 'contact',
		activeOptions: { exact: true, includeHash: true },
	},
	{ label: 'Blog', href: '/blog' },
]

export function SiteHeader() {
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 bg-background border-b border-border">
			<div className="page-wrap relative flex min-h-16 items-center justify-center py-4.5">
				<NavigationMenu viewport={false} className="hidden lg:flex">
					<NavigationMenuList className="gap-6">
						{navItems.map((item) => (
							<NavigationMenuItem key={item.label}>
								{'to' in item ? (
									<NavigationMenuLink
										asChild
										className={cn(
											navigationMenuTriggerStyle(),
											'nav-link h-auto rounded-none bg-transparent px-1.5 py-1 text-sm font-medium hover:bg-transparent hover:text-inherit focus:bg-transparent focus:text-inherit focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent',
										)}
									>
										<Link
											to={item.to}
											hash={item.hash}
											activeOptions={item.activeOptions}
										>
											{item.label}
										</Link>
									</NavigationMenuLink>
								) : (
									<NavigationMenuLink
										asChild
										className={cn(
											navigationMenuTriggerStyle(),
											'nav-link h-auto rounded-none bg-transparent px-1.5 py-1 text-sm font-medium hover:bg-transparent hover:text-inherit focus:bg-transparent focus:text-inherit focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent',
										)}
									>
										<a href={item.href}>{item.label}</a>
									</NavigationMenuLink>
								)}
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>

				<button
					className="absolute right-0 lg:hidden p-1.5 -mr-1.5 text-muted-foreground hover:text-foreground transition-colors"
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={mobileOpen}
				>
					{mobileOpen ? <X size={20} /> : <Menu size={20} />}
				</button>
			</div>

			{mobileOpen && (
				<nav className="lg:hidden border-t border-border">
					<ul className="page-wrap flex flex-col gap-1 py-3">
						{navItems.map((item) => (
							<li key={item.label}>
								{'to' in item ? (
									<Link
										to={item.to}
										hash={item.hash}
										activeOptions={item.activeOptions}
										className="nav-link block py-2.5 text-sm font-medium"
										onClick={() => setMobileOpen(false)}
									>
										{item.label}
									</Link>
								) : (
									<a
										href={item.href}
										className="nav-link block py-2.5 text-sm font-medium"
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
