import { sectionPanelInsetClassName } from '#/lib/layout'

export const timelineItemClassName =
	'group/item relative pl-4 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-[var(--line)] before:transition-all before:duration-200 hover:before:w-[2px] hover:before:bg-[rgba(224,204,159,0.46)] sm:pl-6'

export const timelineInnerClassName = `rounded-[0.95rem] ${sectionPanelInsetClassName} py-3.5 transition-[background-color] duration-200 group-hover/item:bg-white/[0.012] sm:py-4`

export const timelineTitleClassName =
	'text-xl font-semibold tracking-tight text-[var(--text-strong)] transition-colors duration-200 group-hover/item:text-[#faf6ee]'

export const timelineBodyClassName =
	'text-[15px] text-[var(--text-body)] transition-colors duration-200 group-hover/item:text-[#e4ddcf] sm:text-base'
