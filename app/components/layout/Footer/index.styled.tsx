import Link from 'next/link';
import styled from 'styled-components';
import { COLORS } from '../../../utils/colors';

export const FooterContainer = styled('footer')`
	width: 100%;
	background: linear-gradient(180deg, #1a1a1a 0%, #111111 100%);
`;

export const FooterInner = styled('div')`
	max-width: 1200px;
	margin: 0 auto;
	padding: 56px 40px 28px;

	@media (max-width: 768px) {
		padding: 40px 20px 20px;
	}
`;

export const FooterGrid = styled('div')`
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 48px;
	margin-bottom: 40px;

	@media (max-width: 560px) {
		grid-template-columns: 1fr;
		gap: 28px;
	}
`;

export const FooterColumn = styled('div')`
	display: flex;
	flex-direction: column;
	gap: 14px;
`;

export const FooterLogo = styled('div')`
	display: flex;
	align-items: baseline;
	gap: 8px;
	margin-bottom: 6px;
`;

export const FooterLogoText = styled('span')`
	color: ${COLORS.red};
	font-size: 22px;
	font-weight: 800;
	letter-spacing: 2px;
`;

export const FooterLogoSub = styled('span')`
	color: rgba(255, 255, 255, 0.5);
	font-size: 11px;
	letter-spacing: 2px;
	text-transform: uppercase;
`;

export const FooterColumnTitle = styled('h4')`
	color: ${COLORS.white};
	font-size: 12px;
	font-weight: 600;
	letter-spacing: 2px;
	text-transform: uppercase;
	margin: 0 0 4px 0;
`;

export const FooterText = styled('p')`
	color: rgba(255, 255, 255, 0.45);
	font-size: 14px;
	line-height: 1.7;
	margin: 0;
`;

export const FooterLink = styled(Link)`
	color: rgba(255, 255, 255, 0.45);
	text-decoration: none;
	font-size: 14px;
	transition: color 0.3s ease;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 1px;
		background: ${COLORS.red};
		transition: width 0.3s ease;
	}

	&:hover {
		color: ${COLORS.red};

		&::after {
			width: 100%;
		}
	}
`;

export const FooterBottom = styled('div')`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 24px;
	border-top: 1px solid rgba(255, 255, 255, 0.08);

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 12px;
		text-align: center;
	}
`;

export const Copyright = styled('p')`
	color: rgba(255, 255, 255, 0.35);
	font-size: 13px;
	margin: 0;
`;
