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
	overflow: hidden;

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
	}

	@media (max-width: 768px) {
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
	display: flex;
	gap: 48px;
	margin-top: 32px;
	flex-wrap: wrap;

	@media (max-width: 480px) {
		gap: 24px;
		justify-content: center;
	}
`;

export const StatItem = styled('div')`
	display: flex;
	flex-direction: column;
	padding: 20px 24px;
	background: rgba(196, 30, 42, 0.03);
	border-radius: 10px;
	border: 1px solid ${COLORS.redBorder};
	transition: all 0.3s ease;
	min-width: 100px;
	align-items: center;

	&:hover {
		background: rgba(196, 30, 42, 0.06);
		transform: translateY(-2px);
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
	margin-top: 8px;
`;

export const ImageSide = styled('div')`
	position: relative;
	aspect-ratio: 4 / 5;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
`;

export const AccentBox = styled('div')`
	position: absolute;
	top: -16px;
	right: -16px;
	width: 120px;
	height: 120px;
	border: 3px solid ${COLORS.red};
	border-radius: 12px;
	opacity: 0.15;
	z-index: -1;

	@media (max-width: 900px) {
		display: none;
	}
`;
