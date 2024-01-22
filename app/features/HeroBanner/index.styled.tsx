'use client';

import styled, { keyframes } from 'styled-components';
import _Text from '../../components/ui/Text';
import { COLORS } from '../../utils/colors';
import Image from 'next/image';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export const Container = styled('div')`
	height: 91.5dvh;
`;

export const Text = styled(_Text)`
	color: ${COLORS.white};
	position: relative;
	font-size: xx-large;
	text-align: center;
`;

export const HeroImage = styled(Image)``;

export const DarkenedBG = styled('div')`
	width: 100%;
	height: 100dvh;
	position: absolute;
	top: 0;
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
	z-index: -10;
`;

export const HeroText = styled('p')`
	color: ${COLORS.white};
	font-size: 72px;
	text-align: center;
	justify-content: center;
	align-items: center;
	font-weight: bolder;
`;

const breatheAnimation = keyframes`
 0% { scale: 100%}
 10% { scale: 120%};
 20% { scale: 100%}`;

export const ChevronDown = styled(ArrowDownwardIcon)`
	color: ${COLORS.white};
	font-size: 48px;
	z-index: 10;
	display: flex;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 32px;
	&:hover {
		transition: all;
		transition-timing-function: ease-in-out;
		scale: 120%;
	}
	&:not(:hover) {
		animation-name: ${breatheAnimation};
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
	}
`;

export const ContentContainer = styled('div')`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	height: '100%';
	justify-content: space-between;
	align-content: center;
`;
