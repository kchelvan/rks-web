'use client';

import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

export const Container = styled('section')`
	width: 100%;
	padding: 120px 0;
	background-color: ${COLORS.surfaceWarm};
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
		font-size: 28px;
	}
`;

export const Subheading = styled('p')`
	color: ${COLORS.textSecondary};
	font-size: 17px;
	line-height: 1.7;
	max-width: 520px;
	margin: 0 auto;

	@media (max-width: 768px) {
		font-size: 15px;
	}
`;

export const LocationsGrid = styled('div')`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 24px;
	align-items: stretch;

	@media (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 640px) {
		grid-template-columns: 1fr;
		gap: 20px;
	}
`;

export const LocationCard = styled('article')`
	background: ${COLORS.pageBackground};
	border: 1px solid ${COLORS.border};
	border-radius: 14px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	transition:
		transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
		border-color 0.45s cubic-bezier(0.22, 1, 0.36, 1),
		box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1);
	position: relative;
	cursor: pointer;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, ${COLORS.red}, ${COLORS.redLight});
		opacity: 0;
		transition: opacity 0.45s ease;
	}

	&:hover {
		border-color: rgba(196, 30, 42, 0.3);
		transform: translateY(-8px);
		box-shadow:
			0 24px 56px rgba(0, 0, 0, 0.1),
			0 0 0 1px rgba(196, 30, 42, 0.06);

		&::after {
			opacity: 1;
		}
	}
`;

export const LocationImageWrapper = styled('div')`
	position: relative;
	width: 100%;
	aspect-ratio: 16 / 10;
	overflow: hidden;
	background: ${COLORS.surfaceAlt};

	img {
		transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
	}

	${LocationCard}:hover & img {
		transform: scale(1.06);
	}
`;

export const LocationBody = styled('div')`
	padding: 24px;
	display: flex;
	flex-direction: column;
	gap: 14px;
	flex: 1;

	@media (max-width: 480px) {
		padding: 20px;
	}
`;

export const LocationName = styled('h3')`
	color: ${COLORS.textPrimary};
	font-size: 20px;
	font-weight: 700;
	margin: 0;
`;

export const LocationAddress = styled('address')`
	color: ${COLORS.textSecondary};
	font-size: 14px;
	line-height: 1.7;
	font-style: normal;
	max-width: 200px;
	text-wrap: balance;
	word-break: break-word;
	hyphens: auto;
`;

export const LocationDetail = styled('div')`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const DetailRow = styled('div')`
	display: flex;
	align-items: center;
	gap: 10px;
	color: ${COLORS.textSecondary};
	font-size: 14px;
`;

export const DetailIcon = styled('span')`
	font-size: 15px;
	width: 18px;
	text-align: center;
	flex-shrink: 0;
`;

export const LocationCTA = styled('a')`
	display: inline-flex;
	align-items: center;
	gap: 6px;
	color: ${COLORS.red};
	font-size: 13px;
	font-weight: 600;
	letter-spacing: 0.5px;
	text-decoration: none;
	margin-top: auto;
	padding-top: 8px;
	transition:
		color 0.4s cubic-bezier(0.22, 1, 0.36, 1),
		gap 0.4s cubic-bezier(0.22, 1, 0.36, 1);

	svg {
		transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
	}

	&:hover {
		color: ${COLORS.redDark};
		gap: 10px;

		svg {
			transform: translateX(4px);
		}
	}
`;
