import Link from 'next/link';
import styled from 'styled-components';
import { COLORS } from '../../../utils/colors';

export const FooterContainer = styled('div')`
	width: 100%;
	display: flex;
	flex-direction: 'row';
	justify-content: space-between;
	padding-left: 32px;
	padding-right: 32px;
	padding-top: 16px;
	padding-bottom: 16px;
	background-color: ${COLORS.black};
`;

export const NavContainer = styled('div')`
	display: flex;
	flex-direction: row;
`;

export const NavItem = styled(Link)`
	padding-left: 64px;
	color: ${COLORS.white};
	text-decoration: none;
`;
