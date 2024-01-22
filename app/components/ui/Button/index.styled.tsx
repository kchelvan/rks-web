'use client';

import styled from 'styled-components';
import { COLORS } from '../../../utils/colors';

export const Button = styled('button')`
	background-color: ${COLORS.buttonPrimary};
	padding-left: 32px;
	padding-right: 32px;
	border-radius: 4px;
	height: 100%;
	border: 0;
	box-shadow: none;
	cursor: pointer;
	&:hover {
		background-color: ${COLORS.secondary};
	}
`;
