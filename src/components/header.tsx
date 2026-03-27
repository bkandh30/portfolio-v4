import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { Dialog } from 'radix-ui'

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

const desktopNavLinkClass = cn(
	navigationMenuTriggerStyle(),
	'nav-link h-auto rounded-none bg-transparent px-1.5 py-1 text-sm font-medium hover:bg-transparent hover:text-inherit focus:bg-transparent focus:text-inherit focus-visible:ring-0 focus-visible:outline-none data-[active=true]:bg-transparent',
)

const mobileNavLinkClass =
	'mobile-nav-link text-[1.15rem] font-medium tracking-[-0.03em]'

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

function isSectionNavItem(item: NavItem): item is SectionNavItem {
	return 'to' in item
}

function DesktopNav() {
	return (
		<NavigationMenu viewport={false} className="hidden lg:flex">
			<NavigationMenuList className="gap-6">
				{navItems.map((item) => (
					<NavigationMenuItem key={item.label}>
						<NavigationMenuLink
							asChild
							className={desktopNavLinkClass}
						>
							{isSectionNavItem(item) ? (
								<Link
									to={item.to}
									hash={item.hash}
									activeOptions={item.activeOptions}
								>
									{item.label}
								</Link>
							) : (
								<a href={item.href}>{item.label}</a>
							)}
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	)
}

function MobileNavMenu({
	open,
	onOpenChange,
}: {
	open: boolean
	onOpenChange: (open: boolean) => void
}) {
	return (
		<Dialog.Root open={open} onOpenChange={onOpenChange}>
			<Dialog.Trigger asChild>
				<button
					className="absolute right-0 z-10 rounded-full border border-transparent bg-transparent p-1.5 -mr-1.5 text-muted-foreground transition-[color,background-color,border-color] duration-200 hover:border-border/70 hover:bg-white/4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 lg:hidden"
					aria-label={open ? 'Close menu' : 'Open menu'}
					aria-expanded={open}
				>
					{open ? <X size={19} /> : <Menu size={19} />}
				</button>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 z-50 bg-black/62 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 lg:hidden" />
				<Dialog.Content className="fixed inset-0 z-50 lg:hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0">
					<Dialog.Title className="sr-only">
						Site navigation
					</Dialog.Title>
					<Dialog.Description className="sr-only">
						Navigate between sections of the portfolio.
					</Dialog.Description>

					<div className="page-wrap flex min-h-dvh flex-col py-5">
						<div className="flex min-h-16 items-center justify-end">
							<Dialog.Close asChild>
								<button
									className="rounded-full border border-white/8 bg-white/5 p-2 text-foreground/80 backdrop-blur-sm transition-[color,background-color,border-color,transform] duration-200 hover:border-border hover:bg-white/8 hover:text-foreground active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
									aria-label="Close menu"
								>
									<X size={18} />
								</button>
							</Dialog.Close>
						</div>

						<div className="flex flex-1 items-center justify-center py-8">
							<div className="mobile-nav-shell w-full max-w-sm px-6 py-7 sm:px-8 sm:py-8">
								<p className="eyebrow text-center text-[0.68rem] text-muted-foreground/90">
									Navigation
								</p>
								<nav
									className="mt-5"
									aria-label="Mobile navigation"
								>
									<ul className="flex flex-col items-stretch gap-3 text-center">
										{navItems.map((item) => (
											<li key={item.label}>
												{isSectionNavItem(item) ? (
													<Link
														to={item.to}
														hash={item.hash}
														activeOptions={
															item.activeOptions
														}
														className={
															mobileNavLinkClass
														}
														onClick={() =>
															onOpenChange(false)
														}
													>
														{item.label}
													</Link>
												) : (
													<a
														href={item.href}
														className={
															mobileNavLinkClass
														}
														onClick={() =>
															onOpenChange(false)
														}
													>
														{item.label}
													</a>
												)}
											</li>
										))}
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}

export function SiteHeader() {
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 bg-background border-b border-border">
			<div className="page-wrap relative flex min-h-16 items-center justify-center py-4.5">
				<DesktopNav />
				<MobileNavMenu open={mobileOpen} onOpenChange={setMobileOpen} />
			</div>
		</header>
	)
}
