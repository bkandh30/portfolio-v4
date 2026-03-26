export default function AboutSection() {
	return (
		<section
			id="about"
			className="page-wrap border-t border-border py-20 sm:py-28"
		>
			<div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
				<div>
					<p className="text-[0.72rem] font-semibold tracking-wide text-[var(--accent-strong)]">
						About
					</p>
					<h2 className="section-title mt-3 text-2xl sm:text-3xl">
						Backend engineering with a product sensibility.
					</h2>
					<p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-foreground sm:text-base">
						I'm a software engineer with professional experience
						building backend services, internal platforms, and
						production APIs in Java and Spring Boot. My work has
						spanned policy and claims systems, document processing
						workflows, and event-driven integrations — the kind
						of infrastructure that production systems depend on
						every day.
					</p>
					<p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-foreground sm:text-base">
						I also work across the frontend with TypeScript and
						React, building the interfaces that connect to the
						services I design. Whether it's hardening an API,
						wiring up a data pipeline, or shipping an application
						end-to-end, I focus on clean architecture, reliable
						systems, and code that's built for production.
					</p>
				</div>

				<aside className="lg:border-l lg:border-border lg:pl-8 lg:pt-12">
					<p className="text-[0.72rem] font-semibold tracking-wide text-[var(--accent-strong)]">
						Currently focused on
					</p>
					<ul className="mt-3 space-y-2.5 text-sm font-medium text-foreground">
						<li>Backend & API design</li>
						<li>Platform infrastructure</li>
						<li>Full-stack product development</li>
						<li>Event-driven systems</li>
						<li>Cloud & CI/CD workflows</li>
					</ul>
				</aside>
			</div>
		</section>
	)
}
