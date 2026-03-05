import { Variants, Transition } from 'framer-motion';

// ── Shared easing curves ──
const smoothEase: Transition['ease'] = [0.22, 1, 0.36, 1]; // custom cubic-bezier — fast start, smooth decel
const gentleEase: Transition['ease'] = [0.25, 0.46, 0.45, 0.94];

// ── Hero entrance animations (mount-only, staggered via custom index) ──
// Note: framer-motion cannot interpolate CSS `filter` strings —
// use only numeric props (opacity, y, scale) here.

export const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.3 + i * 0.15,
			duration: 0.8,
			ease: smoothEase,
		},
	}),
};

export const fadeIn: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 1, delay: 0.2, ease: gentleEase },
	},
};

// ── Reusable slide variants (used via motion components) ──

export const slideInLeft: Variants = {
	hidden: { opacity: 0, x: -60 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.7, ease: smoothEase },
	},
};

export const slideInRight: Variants = {
	hidden: { opacity: 0, x: 60 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.7, ease: smoothEase },
	},
};

export const scaleIn: Variants = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: (i: number = 0) => ({
		opacity: 1,
		scale: 1,
		transition: {
			delay: i * 0.1,
			duration: 0.6,
			ease: smoothEase,
		},
	}),
};

export const staggerContainer: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.15,
		},
	},
};
