'use client';

import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

export const Container = styled('div')`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	background-color: ${COLORS.black};
`;

export const ContentContainer = styled('div')`
	display: flex;
	flex-direction: row;
`;

export const ImageContainer = styled('div')`
	position: relative;
	margin-left: 16px;
	margin-right: 16px;
	width: 326px;
	height: 425px;
`;

export const HeaderText = styled('p')`
	color: ${COLORS.white};
	font-size: 48px;
	font-weight: bolder;
	margin-top: -24px;
`;
