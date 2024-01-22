import Link from 'next/link';
import styled from 'styled-components';
import { COLORS } from '../../../utils/colors';

export const HeaderContainer = styled('div')`
	display: flex;
	flex-direction: 'row';
	justify-content: space-between;
	padding-left: 32px;
	padding-right: 32px;
	padding-top: 16px;
	padding-bottom: 16px;
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
`;

export const NavContainer = styled('div')`
	display: flex;
	flex-direction: row;
`;

export const NavItem = styled(Link)`
	padding-left: 64px;
	color: ${COLORS.white};
	text-decoration: none;
	text-align: center;
	&:hover {
		text-decoration: underline;
		scale: calc(1.15);
	}
`;

export const CompanyText = styled('p')`
	color: ${COLORS.buttonPrimary};
	text-decoration: none;
	text-align: center;
	font-size: xx-large;
	font-weight: bolder;
	padding-left: 0;
	margin: 0;
	margin-left: -32px;
	padding-top: 4px;
`;

export const CompanySubText = styled('p')`
	color: ${COLORS.white};
	text-decoration: none;
	text-align: center;
	font-size: large;
	align-items: flex-end;
	margin: 0;
	margin-left: 4px;
	padding-top: 16px;
`;
