'use client';

import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

export const Container = styled('div')`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 70dvh;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	background-color: ${COLORS.secondary + '40'};
`;

export const HeaderText = styled('p')`
	color: ${COLORS.black};
	font-size: 48px;
	font-weight: bolder;
`;

export const ContentContainer = styled('div')`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 1280px;
`;

export const CityHeader = styled('p')`
	color: ${COLORS.black};
	font-size: 28px;
	font-weight: bolder;
	text-align: center;
	margin-bottom: 0;
`;

export const LocationText = styled('p')`
	color: ${COLORS.black};
	font-size: 16px;
	text-align: center;
	white-space: pre-wrap;
`;

export const LocationImageContainer = styled('div')`
	position: relative;
	width: 326px;
	height: 200px;
`;
