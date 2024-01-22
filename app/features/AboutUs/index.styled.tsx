'use client';

import styled from 'styled-components';
import _Text from '../../components/ui/Text';
import { COLORS } from '../../utils/colors';
import { device } from '../../utils/breakpoints';

export const Container = styled('div')`
	display: flex;
	width: 1280px;
	min-height: 100dvh;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;

	@media ${device.md} {
		width: 100%;
	}
	@media ${device.lg} {
		max-width: 900px;
	}
`;

export const ContentContainer = styled('div')`
	display: flex;
	flex-direction: row;
	margin-left: 0px;
	margin-right: 0px;
	justify-content: space-between;
	padding-bottom: 0px;

	@media ${device.md} {
		flex-direction: column-reverse;
		margin-left: 16px;
		margin-right: 16px;
		padding-bottom: 16px;
	}
`;

export const TextContainer = styled('div')`
	width: 50%;

	@media ${device.md} {
		width: 90dvw;
	}
`;

export const ImageContainer = styled('div')`
	position: relative;
	width: 45%;
	height: 70dvh;
	margin-top: 0px;

	@media ${device.md} {
		width: 90dvw;
		height: 340px;
		margin-top: 24px;
	}
`;

export const HeaderText = styled('p')`
	color: ${COLORS.black};
	font-size: 48px;
	font-weight: bolder;
`;

export const Text = styled('p')`
	color: ${COLORS.black};
	font-size: 20px;
	white-space: pre-wrap;
`;
