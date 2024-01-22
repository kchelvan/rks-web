'use client';

import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

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
`;

export const HeaderText = styled('p')`
	color: ${COLORS.black};
	font-size: 48px;
	font-weight: bolder;
`;

export const ContentContainer = styled('div')`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 10px;
	max-width: 1440px;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
`;

export const ServiceTitle = styled('p')`
	color: ${COLORS.black};
	font-size: 28px;
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
	width: 70%;
`;

export const ServiceContainer = styled('div')`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
