import { Variants } from 'framer-motion';

// ── Only used on the hero (animate once on mount, no scroll observer) ──
export const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.12,
			duration: 0.5,
			ease: [0.25, 0.46, 0.45, 0.94],
		},
	}),
};

export const fadeIn: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 0.6, ease: 'easeOut' },
	},
};
