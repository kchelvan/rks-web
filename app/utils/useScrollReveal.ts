'use client';

import { useEffect, useRef } from 'react';

/**
 * Lightweight IntersectionObserver hook that adds `.visible` to `.reveal` elements.
 * Replaces framer-motion whileInView — zero JS per frame, pure CSS transitions.
 */
export function useScrollReveal() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const targets = el.querySelectorAll('.reveal');
		if (!targets.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
		);

		targets.forEach((t) => observer.observe(t));
		return () => observer.disconnect();
	}, []);

	return containerRef;
}
