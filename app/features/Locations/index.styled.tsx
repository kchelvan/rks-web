'use client';

import styled from 'styled-components';
import { COLORS } from '../../utils/colors';
import { device } from '../../utils/breakpoints';

export const ParentContainer = styled('div')`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	justify-content: center;
`;

export const Container = styled('div')`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 70vh;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	background-color: ${COLORS.secondary + '40'};
	transition: all 0.1s ease-out;

	@media ${device.lg} {
		height: auto;
		min-height: 80vh;
	}

	@media ${device.md} {
		height: auto;
		min-height: 70vh;
	}
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
	width: 1450px;

	@media ${device.xl} {
		flex-direction: row;
		max-width: 1200px;
	}
	@media ${device.lg} {
		flex-direction: row;
		max-width: 1050px;
	}
	@media ${device.md} {
		flex-direction: column;
		width: 100%;
	}
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
	margin-left: auto;
	margin-right: auto;
	width: 326px;
	height: 200px;
	position: relative;

	@media ${device.xl} {
		width: 250px;
		height: 200px;
	}

	@media ${device.md} {
		width: 90vw;
		height: 300px;
	}
`;

export const AddressContainer = styled('div')`
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;

	@media ${device.md} {
		padding-bottom: 48px;
	}
`;
