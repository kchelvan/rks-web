'use client';

import styled from 'styled-components';
import { COLORS } from '../../utils/colors';
import { device } from '../../utils/breakpoints';

export const Container = styled('div')`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100dvh;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	background-color: ${COLORS.pageBackground};
	transition: all 0.1s ease-out;

	@media ${device.md} {
		padding-bottom: 32px;
	}
`;

export const HeaderText = styled('p')`
	color: ${COLORS.black};
	font-size: 48px;
	font-weight: bolder;
`;

export const ContentContainer = styled('div')`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	align-items: flex-start;
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;

	@media ${device.xl} {
		max-width: 1024px;
	}
	@media ${device.lg} {
		max-width: 900px;
	}
	@media ${device.md} {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const ServiceTitle = styled('p')`
	color: ${COLORS.black};
	font-size: 24px;
	font-weight: bolder;
	text-align: center;
	margin-bottom: 0;
	white-space: nowrap;
`;

export const ServicePrice = styled('p')`
	color: ${COLORS.black};
	font-size: 16px;
	text-align: center;
	white-space: pre-wrap;
`;

export const ServiceDescription = styled('p')`
	color: ${COLORS.black};
	font-size: 16px;
	text-align: center;
	white-space: pre-wrap;
	width: 90%;

	@media ${device.md} {
		width: 70%;
	}
`;

export const ServiceContainer = styled('div')`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-left: 12px;
	padding-right: 12px;
`;
