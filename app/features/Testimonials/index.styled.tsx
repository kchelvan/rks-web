'use client';

import styled, { css, keyframes } from 'styled-components';
import { COLORS } from '../../utils/colors';

/* ── Keyframes ─────────────────────────────────────────── */
const slideInUp = keyframes`
	from { opacity: 0; transform: translateY(32px); }
	to   { opacity: 1; transform: translateY(0); }
`;

const slideOutDown = keyframes`
	from { opacity: 1; transform: translateY(0); }
	to   { opacity: 0; transform: translateY(-24px); }
`;

/* Wave hover: replicates the card's real hover state, then eases back.
   Peaks at 40% for a natural swell, with a gentle ease-out descent. */
const waveHover = keyframes`
	0% {
		transform: translateY(0);
	}
	40% {
		transform: translateY(-4px);
	}
	100% {
		transform: translateY(0);
	}
`;

/* Glow + background brighten that accompanies the lift.
   Gradual ramp so it feels like a true fade, not a pop. */
const waveGlow = keyframes`
	0% {
		opacity: 0;
	}
	20% {
		opacity: 0.4;
	}
	40% {
		opacity: 1;
	}
	70% {
		opacity: 0.5;
	}
	100% {
		opacity: 0;
	}
`;

/* Border accent fade — same gradual ramp as the glow */
const waveBorderPulse = keyframes`
	0%   { opacity: 0; }
	20%  { opacity: 0.4; }
	40%  { opacity: 1; }
	70%  { opacity: 0.5; }
	100% { opacity: 0; }
`;

/* ── Layout ────────────────────────────────────────────── */
export const Container = styled('section')`
	width: 100%;
	padding: 120px 0;
	background: linear-gradient(170deg, ${COLORS.sectionDark} 0%, #1f1d1b 100%);
	position: relative;

	@media (max-width: 768px) {
		padding: 72px 0;
	}
`;

export const Inner = styled('div')`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 40px;

	@media (max-width: 768px) {
		padding: 0 20px;
	}
`;

export const HeaderSection = styled('div')`
	text-align: center;
	margin-bottom: 56px;

	@media (max-width: 768px) {
		margin-bottom: 40px;
	}
`;

export const Label = styled('span')`
	display: inline-block;
	color: ${COLORS.redLight};
	font-size: 12px;
	font-weight: 600;
	letter-spacing: 2.5px;
	text-transform: uppercase;
	margin-bottom: 16px;
`;

export const Heading = styled('h2')`
	color: ${COLORS.sectionDarkText};
	font-size: 42px;
	font-weight: 700;
	line-height: 1.15;
	margin: 0;

	@media (max-width: 768px) {
		font-size: 30px;
	}
`;

/* ── Carousel wrapper ──────────────────────────────────── */
export const CarouselWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 36px;
`;

export const Grid = styled('div')`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	width: 100%;
	overflow: visible;
	transition: height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	position: relative;
	padding: 8px 0;

	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 640px) {
		grid-template-columns: 1fr;
	}
`;

/* ── Staggered slide animation per card ────────────────── */
export const CardSlot = styled('div')<{
	$index: number;
	$state: 'in' | 'out';
}>`
	${({ $state, $index }) => {
		if ($state === 'out') {
			return css`
				animation: ${slideOutDown} 0.4s cubic-bezier(0.55, 0, 1, 0.45) forwards;
				animation-delay: ${$index * 0.08}s;
			`;
		}
		/* 'in' — slides up and holds at final position via forwards */
		return css`
			animation: ${slideInUp} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
			animation-delay: ${$index * 0.12}s;
			opacity: 0;
		`;
	}}
`;

/* ── Card ──────────────────────────────────────────────── */
export const TestimonialCard = styled('blockquote')`
	background: rgba(255, 255, 255, 0.04);
	border: 1px solid ${COLORS.sectionDarkBorder};
	border-radius: 14px;
	padding: 36px 28px;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 16px;
	transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
	position: relative;
	cursor: pointer;

	/* Gradient border accent */
	&::before {
		content: '';
		position: absolute;
		inset: -1px;
		border-radius: 15px;
		background: linear-gradient(
			135deg,
			rgba(196, 30, 42, 0.3),
			transparent 40%,
			transparent 60%,
			rgba(196, 30, 42, 0.15)
		);
		opacity: 0;
		transition: opacity 0.45s ease;
		z-index: 0;
		pointer-events: none;
	}

	/* Glow overlay — animated via opacity for buttery-smooth performance.
	   Covers the card with the brightened background + shadow look. */
	&::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 14px;
		background: rgba(255, 255, 255, 0.035);
		box-shadow:
			0 16px 48px rgba(0, 0, 0, 0.25),
			0 0 40px rgba(196, 30, 42, 0.06);
		opacity: 0;
		transition: opacity 0.45s ease;
		z-index: 0;
		pointer-events: none;
	}

	/* Real hover state — only on devices with a true pointer (not touch) */
	@media (hover: hover) and (pointer: fine) {
		&:hover {
			transform: translateY(-4px);

			&::before {
				opacity: 1;
			}

			&::after {
				opacity: 1;
			}
		}
	}

	/* Wave cascade — triggered via .wave-active class added directly to DOM.
	   Uses CSS custom property --wave-delay for per-card stagger.
	   This avoids styled-components re-render race conditions entirely. */
	&.wave-active {
		transition: none;
		animation: ${waveHover} 0.6s cubic-bezier(0.33, 1, 0.68, 1);
		animation-delay: var(--wave-delay, 0s);

		&::before {
			animation: ${waveBorderPulse} 0.6s linear;
			animation-delay: var(--wave-delay, 0s);
		}

		&::after {
			transition: none;
			animation: ${waveGlow} 0.6s linear;
			animation-delay: var(--wave-delay, 0s);
		}
	}
`;

export const QuoteMark = styled('span')`
	color: ${COLORS.red};
	font-size: 52px;
	line-height: 0.8;
	font-family: Georgia, 'Times New Roman', serif;
	opacity: 0.6;
	user-select: none;
`;

export const TestimonialText = styled('p')`
	color: rgba(240, 237, 234, 0.7);
	font-size: 15px;
	line-height: 1.85;
	margin: 0;
	font-style: italic;
`;

export const AuthorRow = styled('div')`
	display: flex;
	align-items: center;
	gap: 12px;
	margin-top: auto;
`;

export const AuthorAvatar = styled('div')`
	width: 42px;
	height: 42px;
	border-radius: 50%;
	background: linear-gradient(135deg, ${COLORS.red}, ${COLORS.redDark});
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${COLORS.white};
	font-weight: 700;
	font-size: 14px;
	box-shadow: 0 4px 12px rgba(196, 30, 42, 0.3);
`;

export const AuthorInfo = styled('div')`
	display: flex;
	flex-direction: column;
`;

export const AuthorName = styled('cite')`
	color: ${COLORS.sectionDarkText};
	font-size: 15px;
	font-weight: 600;
	font-style: normal;
`;

export const AuthorDetail = styled('span')`
	color: ${COLORS.sectionDarkMuted};
	font-size: 13px;
`;

export const Stars = styled('div')`
	display: flex;
	gap: 2px;
	color: #f59e0b;
	font-size: 14px;
`;

/* ── Pagination dots ───────────────────────────────────── */
export const Dots = styled('div')`
	display: flex;
	gap: 10px;
	justify-content: center;
`;

export const Dot = styled('button')<{ $active: boolean }>`
	width: ${({ $active }) => ($active ? '28px' : '8px')};
	height: 8px;
	border-radius: 4px;
	border: none;
	cursor: pointer;
	background: ${({ $active }) =>
		$active ? COLORS.red : 'rgba(255, 255, 255, 0.2)'};
	transition:
		width 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
		background 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	padding: 0;

	&:hover {
		background: ${({ $active }) =>
			$active ? COLORS.red : 'rgba(255, 255, 255, 0.35)'};
	}
`;
