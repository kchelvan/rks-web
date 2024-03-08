'use client';

import styled from 'styled-components';
import { COLORS } from '../../utils/colors';
import _Image from 'next/image';
import { device } from '../../utils/breakpoints';

export const Container = styled('div')`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
	align-items: center;
	background-color: ${COLORS.black};
	justify-content: space-between;
`;

export const ContentContainer = styled('div')`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	width: 60%;
`;
export const ImageGroup = styled('div')<{
	index: number;
}>``;

export const ImageContainer = styled('div')<{
	visibleIndex: number;
	currentIndex: number;
}>`
	position: absolute;
	opacity: ${({ visibleIndex, currentIndex }) =>
		visibleIndex == currentIndex ? 1 : 0};
	width: 326px;
	height: 425px;
	transform: translateX(-50%) translateY(-50%);
	margin: auto;
	transition: all 0.3s ease-in-out;

	@media ${device.lg} {
		width: 250px;
		height: 350px;
	}

	@media ${device.md} {
		width: 200px;
		height: 326px;
	}

	@media ${device.sm} {
		width: 80vw;
		height: 400px;
		transform: translateX(-12%) translateY(-50%);
	}
`;

export const HeaderText = styled('p')`
	color: ${COLORS.white};
	font-size: 48px;
	font-weight: bolder;
	transform: translateY(100%);
`;

export const Image = styled(_Image)``;

export const Text = styled('p')`
	position: relative;
	max-width: 658px;
	color: ${COLORS.white};
	font-size: 20px;
	white-space: pre-wrap;
	text-align: center;
	height: 200px;

	@media ${device.md} {
		max-width: 326px;
	}
`;
