'use client';

import styled from 'styled-components';
import _Text from '../../components/ui/Text';
import { COLORS } from '../../utils/colors';

export const Container = styled('div')`
	display: flex;
	width: 1280px;
	height: 100dvh;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
`;

export const ContentContainer = styled('div')`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const TextContainer = styled('div')`
	width: 50%;
`;

export const ImageContainer = styled('div')`
	position: relative;
	width: 45%;
	height: 70dvh;
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
