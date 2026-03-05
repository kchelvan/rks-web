'use client';

import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

export const Container = styled('section')`
	width: 100%;
	padding: 120px 0;
	background-color: ${COLORS.surfaceAlt};
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

export const HeaderRow = styled('div')`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-bottom: 56px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 20px;
		margin-bottom: 40px;
	}
`;

export const HeaderText = styled('div')`
	max-width: 500px;
`;

export const Label = styled('span')`
	color: ${COLORS.red};
	font-size: 12px;
	font-weight: 600;
	letter-spacing: 2.5px;
	text-transform: uppercase;
	margin-bottom: 16px;
	display: block;
`;

export const Heading = styled('h2')`
	color: ${COLORS.textPrimary};
	font-size: 42px;
	font-weight: 700;
	line-height: 1.15;
	margin: 0;

	@media (max-width: 768px) {
		font-size: 30px;
	}
`;

export const Grid = styled('div')`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;

	@media (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 560px) {
		grid-template-columns: 1fr;
	}
`;

export const ServiceCard = styled('div')`
	background: ${COLORS.surface};
	border: 1px solid ${COLORS.border};
	border-radius: 14px;
	padding: 36px 28px;
	display: flex;
	flex-direction: column;
	gap: 14px;
	transition:
		transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
		border-color 0.45s cubic-bezier(0.22, 1, 0.36, 1),
		box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1);
	cursor: pointer;
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, ${COLORS.red}, ${COLORS.redLight});
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
	}

	&:hover {
		border-color: rgba(196, 30, 42, 0.3);
		transform: translateY(-6px);
		box-shadow:
			0 20px 50px rgba(0, 0, 0, 0.08),
			0 0 0 1px rgba(196, 30, 42, 0.08);

		&::before {
			transform: scaleX(1);
		}
	}
`;

export const ServiceIcon = styled('div')`
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${COLORS.red};
	background: linear-gradient(
		135deg,
		rgba(196, 30, 42, 0.1),
		rgba(196, 30, 42, 0.04)
	);
	border-radius: 12px;
	transition:
		background 0.45s cubic-bezier(0.22, 1, 0.36, 1),
		color 0.45s cubic-bezier(0.22, 1, 0.36, 1),
		transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);

	${ServiceCard}:hover & {
		background: linear-gradient(135deg, ${COLORS.red}, ${COLORS.redDark});
		color: ${COLORS.white};
		transform: scale(1.08) rotate(-2deg);
	}
`;

export const ServiceName = styled('h3')`
	color: ${COLORS.textPrimary};
	font-size: 19px;
	font-weight: 600;
	margin: 0;
`;

export const ServiceDescription = styled('p')`
	color: ${COLORS.textSecondary};
	font-size: 15px;
	line-height: 1.7;
	margin: 0;
`;

export const ServicePrice = styled('span')`
	color: ${COLORS.red};
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 0.5px;
	margin-top: auto;
	padding-top: 4px;
	border-top: 1px solid ${COLORS.border};
`;
