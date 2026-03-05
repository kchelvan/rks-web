'use client';

import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

export const Container = styled('section')`
	width: 100%;
	padding: 120px 0;
	background-color: ${COLORS.pageBackground};
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
		margin-bottom: 36px;
	}
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
	margin: 0 0 16px 0;

	@media (max-width: 768px) {
		font-size: 30px;
	}
`;

export const Subheading = styled('p')`
	color: ${COLORS.textSecondary};
	font-size: 17px;
	line-height: 1.8;
	max-width: 560px;
	margin: 0 auto;
`;

export const ContactGrid = styled('div')`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 28px;
	align-items: stretch;

	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 640px) {
		grid-template-columns: 1fr;
		gap: 20px;
	}
`;

export const ContactCard = styled('div')`
	background: ${COLORS.surface};
	border: 1px solid ${COLORS.border};
	border-radius: 12px;
	padding: 36px 28px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition:
		transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
		border-color 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
		box-shadow 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
		transition: transform 0.35s ease;
	}

	&:hover {
		border-color: ${COLORS.red};
		transform: translateY(-4px);
		box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);

		&::before {
			transform: scaleX(1);
		}
	}

	@media (max-width: 640px) {
		padding: 28px 20px;
	}
`;

export const CardLocationName = styled('h3')`
	color: ${COLORS.textPrimary};
	font-size: 20px;
	font-weight: 700;
	margin: 0 0 6px 0;
`;

export const CardAddress = styled('p')`
	color: ${COLORS.textSecondary};
	font-size: 14px;
	line-height: 1.7;
	margin: 0 0 20px 0;
	max-width: 220px;
	text-wrap: balance;
	word-break: break-word;
	hyphens: auto;
`;

export const CardDivider = styled('div')`
	width: 40px;
	height: 2px;
	background: ${COLORS.red};
	border-radius: 2px;
	margin: 0 auto 20px auto;
`;

export const CardPhone = styled('a')`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	color: ${COLORS.textPrimary};
	text-decoration: none;
	font-size: 18px;
	font-weight: 600;
	padding: 10px 0;
	transition: color 0.3s ease;

	&:hover {
		color: ${COLORS.red};
	}
`;

export const CardPhoneIcon = styled('span')`
	font-size: 16px;
	display: flex;
	align-items: center;
`;

export const CardMapLink = styled('a')`
	display: inline-flex;
	align-items: center;
	gap: 6px;
	color: ${COLORS.red};
	font-size: 13px;
	font-weight: 600;
	text-decoration: none;
	letter-spacing: 0.5px;
	margin-top: auto;
	padding-top: 16px;
	transition: all 0.3s ease;

	svg {
		transition: transform 0.3s ease;
	}

	&:hover {
		color: ${COLORS.redDark};

		svg {
			transform: translateX(4px);
		}
	}
`;
