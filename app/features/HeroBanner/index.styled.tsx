'use client';

import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../utils/colors';
import Image from 'next/image';

/* ── Keyframes ────────────────────────────────────────── */

const kenBurns = keyframes`
	0%   { transform: scale(1)    translate(0, 0); }
	50%  { transform: scale(1.04) translate(-0.3%, -0.3%); }
	100% { transform: scale(1)    translate(0, 0); }
`;

const scrollDot = keyframes`
	0%   { opacity: 1;   transform: translateX(-50%) translateY(0); }
	50%  { opacity: 0.3; transform: translateX(-50%) translateY(10px); }
	100% { opacity: 0;   transform: translateX(-50%) translateY(16px); }
`;

/* ── Layout ───────────────────────────────────────────── */

export const Container = styled.section`
	height: 100dvh;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

export const HeroImage = styled(Image)`
	object-fit: cover;
	object-position: center;
	z-index: 0;
	animation: ${kenBurns} 40s ease-in-out infinite;
	will-change: transform;
`;

export const DarkenedBG = styled.div`
	position: absolute;
	inset: 0;
	z-index: 1;
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0.5) 0%,
		rgba(0, 0, 0, 0.15) 35%,
		rgba(0, 0, 0, 0.25) 65%,
		rgba(0, 0, 0, 0.65) 100%
	);
`;

export const ContentContainer = styled.div`
	position: relative;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 0 24px;
	width: 100%;
	max-width: 820px;
`;

/* ── Hero label badge ─────────────────────────────────── */

export const HeroLabel = styled.span`
	display: inline-flex;
	align-items: center;
	background: rgba(0, 0, 0, 0.45);
	color: ${COLORS.white};
	font-size: 11px;
	font-weight: 500;
	letter-spacing: 2px;
	text-transform: uppercase;
	padding: 10px 20px;
	border-radius: 100px;
	margin-bottom: 32px;
	border: 1px solid rgba(255, 255, 255, 0.22);
	border-left: 3px solid ${COLORS.red};
	text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

	.label-divider {
		width: 1px;
		height: 10px;
		background: rgba(255, 255, 255, 0.35);
		margin: 0 10px;
		flex-shrink: 0;
	}

	@media (max-width: 480px) {
		flex-direction: column;
		border-radius: 14px;
		border: 1px solid rgba(255, 255, 255, 0.22);
		border-top: 3px solid ${COLORS.red};
		padding: 14px 24px 12px;

		.label-divider {
			width: 24px;
			height: 1px;
			margin: 7px 0;
			background: rgba(255, 255, 255, 0.3);
		}
	}
`;

/* ── Typography ───────────────────────────────────────── */

export const HeroText = styled.h1`
	color: ${COLORS.white};
	font-size: 72px;
	font-weight: 800;
	line-height: 1.05;
	margin: 0 0 12px 0;
	letter-spacing: -1.5px;
	text-shadow: 0 2px 30px rgba(0, 0, 0, 0.3);

	@media (max-width: 768px) {
		font-size: 44px;
		letter-spacing: -0.5px;
	}

	@media (max-width: 400px) {
		font-size: 36px;
	}
`;

export const HeroAccentLine = styled.div`
	width: 60px;
	height: 3px;
	background: linear-gradient(90deg, ${COLORS.red}, ${COLORS.redLight});
	border-radius: 2px;
	margin: 8px auto 28px;
`;

export const HeroSubtext = styled.p`
	color: rgba(255, 255, 255, 0.75);
	font-size: 18px;
	line-height: 1.75;
	margin: 0 0 40px 0;
	max-width: 500px;
	letter-spacing: 0.2px;

	@media (max-width: 768px) {
		font-size: 16px;
	}

	@media (max-width: 400px) {
		font-size: 14px;
		margin: 0 0 32px 0;
	}
`;

/* ── CTA button ───────────────────────────────────────── */

export const HeroCTA = styled.a`
	display: inline-flex;
	align-items: center;
	gap: 10px;
	color: ${COLORS.white};
	font-size: 13px;
	font-weight: 600;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	text-decoration: none;
	padding: 16px 40px;
	border: 1.5px solid rgba(255, 255, 255, 0.55);
	border-radius: 100px;
	background: rgba(0, 0, 0, 0.5);
	cursor: pointer;
	transition:
		background 0.4s cubic-bezier(0.22, 1, 0.36, 1),
		border-color 0.4s cubic-bezier(0.22, 1, 0.36, 1),
		transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
		box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1);

	svg {
		transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
	}

	&:hover {
		background: rgba(0, 0, 0, 0.65);
		border-color: rgba(255, 255, 255, 0.85);
		transform: translateY(-3px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);

		svg {
			transform: translateY(3px);
		}
	}

	&:active {
		transform: translateY(0);
	}

	@media (max-width: 480px) {
		width: 100%;
		justify-content: center;
		padding: 18px 28px;
	}
`;

/* ── Scroll indicator ─────────────────────────────────── */

export const ScrollIndicator = styled.div`
	position: absolute;
	bottom: 36px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	transition: opacity 0.3s ease;

	&:hover {
		opacity: 0.7;
	}
`;

export const ScrollMouse = styled.div`
	width: 24px;
	height: 38px;
	border: 1.5px solid rgba(255, 255, 255, 0.45);
	border-radius: 14px;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		top: 7px;
		left: 50%;
		width: 3px;
		height: 6px;
		border-radius: 2px;
		background: rgba(255, 255, 255, 0.7);
		animation: ${scrollDot} 1.8s ease-in-out infinite;
	}
`;

export const ScrollText = styled.span`
	color: rgba(255, 255, 255, 0.4);
	font-size: 10px;
	letter-spacing: 2.5px;
	text-transform: uppercase;
	font-weight: 500;
`;
