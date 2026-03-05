'use client';

import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../utils/colors';
import Image from 'next/image';

export const Container = styled('section')`
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
`;

export const DarkenedBG = styled('div')`
	position: absolute;
	inset: 0;
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0.45) 0%,
		rgba(0, 0, 0, 0.2) 40%,
		rgba(0, 0, 0, 0.35) 70%,
		rgba(0, 0, 0, 0.6) 100%
	);
	z-index: 1;
`;

export const ContentContainer = styled('div')`
	position: relative;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 0 24px;
	max-width: 820px;
`;

export const HeroLabel = styled('span')`
	display: inline-block;
	background: rgba(196, 30, 42, 0.85);
	backdrop-filter: blur(8px);
	color: ${COLORS.white};
	font-size: 12px;
	font-weight: 600;
	letter-spacing: 2.5px;
	text-transform: uppercase;
	padding: 10px 24px;
	border-radius: 6px;
	margin-bottom: 28px;
	border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const HeroText = styled('h1')`
	color: ${COLORS.white};
	font-size: 64px;
	font-weight: 700;
	line-height: 1.1;
	margin: 0 0 20px 0;
	letter-spacing: -0.5px;

	@media (max-width: 768px) {
		font-size: 38px;
	}

	@media (max-width: 400px) {
		font-size: 32px;
	}
`;

export const HeroSubtext = styled('p')`
	color: rgba(255, 255, 255, 0.8);
	font-size: 18px;
	line-height: 1.7;
	margin: 0 0 36px 0;
	max-width: 520px;

	@media (max-width: 768px) {
		font-size: 16px;
	}

	@media (max-width: 400px) {
		font-size: 14px;
		margin: 0 0 28px 0;
	}
`;

export const HeroCTA = styled('a')`
	display: inline-flex;
	align-items: center;
	gap: 8px;
	color: ${COLORS.white};
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 1px;
	text-transform: uppercase;
	text-decoration: none;
	padding: 14px 36px;
	border: 2px solid rgba(255, 255, 255, 0.4);
	border-radius: 8px;
	backdrop-filter: blur(4px);
	background: rgba(255, 255, 255, 0.06);
	cursor: pointer;
	transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

	svg {
		transition: transform 0.3s ease;
	}

	&:hover {
		background: rgba(255, 255, 255, 0.12);
		border-color: rgba(255, 255, 255, 0.7);
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

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
		padding: 16px 28px;
	}
`;

const bounce = keyframes`
	0%, 100% { transform: translateY(0); }
	50% { transform: translateY(6px); }
`;

export const ScrollIndicator = styled('div')`
	position: absolute;
	bottom: 32px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
	cursor: pointer;
	animation: ${bounce} 2s ease-in-out infinite;
`;

export const ScrollLine = styled('div')`
	width: 1px;
	height: 40px;
	background: linear-gradient(180deg, rgba(255, 255, 255, 0.6), transparent);
`;

export const ScrollText = styled('span')`
	color: rgba(255, 255, 255, 0.5);
	font-size: 10px;
	letter-spacing: 2px;
	text-transform: uppercase;
`;
