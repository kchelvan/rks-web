'use client';

import styled from 'styled-components';
import { COLORS } from '../../../utils/colors';

export const Button = styled('button')<{ $variant?: 'primary' | 'outline' }>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	background: ${({ $variant }) =>
		$variant === 'outline'
			? 'transparent'
			: `linear-gradient(135deg, ${COLORS.red}, ${COLORS.redDark})`};
	color: ${({ $variant }) =>
		$variant === 'outline' ? COLORS.red : COLORS.white};
	border: ${({ $variant }) =>
		$variant === 'outline' ? `2px solid ${COLORS.red}` : 'none'};
	padding: 14px 32px;
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 0.5px;
	cursor: pointer;
	border-radius: 8px;
	transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	font-family: inherit;
	text-decoration: none;

	&:hover {
		background: ${({ $variant }) =>
			$variant === 'outline'
				? COLORS.red
				: `linear-gradient(135deg, ${COLORS.redDark}, #7A1118)`};
		color: ${COLORS.white};
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(196, 30, 42, 0.3);
	}

	&:active {
		transform: translateY(0);
		box-shadow: 0 2px 8px rgba(196, 30, 42, 0.2);
	}

	@media (max-width: 480px) {
		padding: 16px 28px;
		font-size: 14px;
		width: 100%;
	}
`;
