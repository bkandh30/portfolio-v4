import { sectionPanelInsetClassName } from '#/lib/layout'

export const timelineItemClassName =
	'group/item relative pl-4 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-[var(--line)] before:transition-all before:duration-200 hover:before:w-[2px] hover:before:bg-[var(--accent-muted-line)] sm:pl-6'

export const timelineInnerClassName = `rounded-[0.95rem] ${sectionPanelInsetClassName} py-3.5 transition-[background-color] duration-200 group-hover/item:bg-[var(--card-hover-bg)] sm:py-4`

export const timelineTitleClassName =
	'text-xl font-semibold tracking-tight text-[var(--text-strong)] transition-colors duration-200 group-hover/item:text-[var(--text-strong)]'

export const timelineBodyClassName =
	'text-[15px] text-[var(--text-body)] transition-colors duration-200 group-hover/item:text-[var(--text-body)] sm:text-base'
