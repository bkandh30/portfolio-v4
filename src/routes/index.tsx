import { createFileRoute } from '@tanstack/react-router'
import HomeHero from '#/components/hero-section'

export const Route = createFileRoute('/')({ component: App })

function App() {
	return <HomeHero />
}
