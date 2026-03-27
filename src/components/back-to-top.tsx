import { useEffect, useState } from 'react'
import { useLocation } from '@tanstack/react-router'
import { ChevronUp } from 'lucide-react'

import { cn } from '#/lib/utils'

const SHOW_AFTER_SCROLL_Y = 520

export function BackToTop() {
	const pathname = useLocation({ select: (location) => location.pathname })
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (pathname !== '/' || typeof window === 'undefined') {
			setIsVisible(false)
			return
		}

		let frameId = 0

		const updateVisibility = () => {
			frameId = 0
			setIsVisible(window.scrollY > SHOW_AFTER_SCROLL_Y)
		}

		const handleScroll = () => {
			if (frameId) {
				return
			}

			frameId = window.requestAnimationFrame(updateVisibility)
		}

		updateVisibility()
		window.addEventListener('scroll', handleScroll, { passive: true })
		window.addEventListener('resize', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('resize', handleScroll)

			if (frameId) {
				window.cancelAnimationFrame(frameId)
			}
		}
	}, [pathname])

	if (pathname !== '/') {
		return null
	}

	return (
		<button
			type="button"
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			aria-label="Back to top"
			className={cn(
				'interactive-surface-button focus-ring-subtle fixed right-4 bottom-4 z-40 inline-flex size-11 items-center justify-center rounded-full bg-card/78 backdrop-blur-md shadow-[0_14px_34px_rgba(0,0,0,0.26)] transition-[opacity,transform,color,background-color,border-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 sm:right-6 sm:bottom-6',
				isVisible
					? 'translate-y-0 opacity-100'
					: 'pointer-events-none translate-y-3 opacity-0',
			)}
		>
			<ChevronUp size={18} strokeWidth={1.9} />
		</button>
	)
}
