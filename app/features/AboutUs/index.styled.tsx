'use client';

import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

export const Container = styled('section')`
	width: 100%;
	padding: 120px 0;
	background: linear-gradient(
		180deg,
		${COLORS.surface} 0%,
		${COLORS.surfaceWarm} 100%
	);
	position: relative;

	@media (max-width: 768px) {
		padding: 72px 0;
	}
`;

export const Inner = styled('div')`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 40px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 80px;
	align-items: center;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		gap: 48px;
		padding: 0 24px;
	}

	@media (max-width: 480px) {
		padding: 0 20px;
	}
`;

export const TextContent = styled('div')`
	display: flex;
	flex-direction: column;
`;

export const Label = styled('span')`
	color: ${COLORS.red};
	font-size: 12px;
	font-weight: 600;
	letter-spacing: 2.5px;
	text-transform: uppercase;
	margin-bottom: 16px;
`;

export const Heading = styled('h2')`
	color: ${COLORS.textPrimary};
	font-size: 42px;
	font-weight: 700;
	line-height: 1.15;
	margin: 0 0 16px 0;

	@media (max-width: 768px) {
		font-size: 30px;
	}
`;

export const Divider = styled('div')`
	width: 60px;
	height: 3px;
	background: linear-gradient(90deg, ${COLORS.red}, ${COLORS.redLight});
	border-radius: 2px;
	margin: 0 0 28px 0;
`;

export const Description = styled('p')`
	color: ${COLORS.textSecondary};
	font-size: 17px;
	line-height: 1.8;
	margin: 0 0 18px 0;
`;

export const StatsRow = styled('div')`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 16px;
	margin-top: 32px;

	@media (max-width: 360px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const StatItem = styled('div')`
	display: flex;
	flex-direction: column;
	padding: 20px 16px;
	background: rgba(196, 30, 42, 0.03);
	border-radius: 12px;
	border: 1px solid ${COLORS.redBorder};
	transition:
		transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
		background 0.4s cubic-bezier(0.22, 1, 0.36, 1),
		box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1);
	align-items: center;
	cursor: pointer;

	&:hover {
		background: rgba(196, 30, 42, 0.07);
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(196, 30, 42, 0.08);
	}
`;

export const StatNumber = styled('span')`
	color: ${COLORS.red};
	font-size: 38px;
	font-weight: 800;
	line-height: 1;
	transition: transform 0.3s ease;

	@media (max-width: 480px) {
		font-size: 28px;
	}
`;

export const StatLabel = styled('span')`
	color: ${COLORS.textMuted};
	font-size: 13px;
	letter-spacing: 1px;
	text-transform: uppercase;
	text-align: center;
	margin-top: 8px;
`;

export const ImageSide = styled('div')`
	position: relative;
	aspect-ratio: 4 / 5;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 24px 64px rgba(0, 0, 0, 0.1);

	img {
		transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
	}

	&:hover img {
		transform: scale(1.04);
	}
`;

export const AccentBox = styled('div')`
	position: absolute;
	top: -20px;
	right: -20px;
	width: 140px;
	height: 140px;
	border: 3px solid ${COLORS.red};
	border-radius: 16px;
	opacity: 0.12;
	z-index: -1;
	transition:
		opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
		transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);

	@media (max-width: 900px) {
		display: none;
	}
`;
