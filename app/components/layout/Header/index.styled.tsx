import _Link from 'next/link';
import styled from 'styled-components';
import { COLORS } from '../../../utils/colors';
import { device } from '../../../utils/breakpoints';

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

export const NavItem = styled(_Link)`
	padding-left: 64px;
	color: ${COLORS.white};
	text-decoration: none;
	text-align: center;
	&:hover {
		text-decoration: underline;
		scale: calc(1.15);
	}
`;

export const Link = styled(_Link)`
	padding-top: ${device.md ? 16 : 0}px;
	padding-left: ${device.md ? 32 : 64}px;
	color: ${COLORS.white};
	text-decoration: none;
	text-align: center;
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

export const StyledBurger = styled.button<{ open: boolean }>`
	position: absolute;
	top: 5%;
	right: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 10;

	&:focus {
		outline: none;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		background: ${({ open }) => (open ? '#0D0C1D' : '#EFFFFA')};
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;

		:first-child {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? '0' : '1')};
			transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;

export const StyledMenu = styled.nav<{ open: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
	background: ${COLORS.pageBackground};
	transform: ${({ open }) =>
		open ? 'translateX(0)' : 'translateX(100%) scaleX(0)'};
	height: 100vh;
	position: absolute;
	top: 0;
	right: 0;
	transition: transform 0.3s ease-in-out;

	@media (max-width: 576px) {
		width: 100%;
	}

	a {
		text-transform: uppercase;
		padding: 2rem 0;
		font-weight: bold;
		letter-spacing: 0.5rem;
		color: #0d0c1d;
		text-decoration: none;
		transition: color 0.3s linear;

		@media (max-width: 576px) {
			font-size: 1.5rem;
			text-align: center;
		}

		&:hover {
			color: #343078;
		}
	}
`;
