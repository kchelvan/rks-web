'use client';

import React, { useContext, useState } from 'react';
import Text from '../../ui/Text';
import {
	Link,
	HeaderContainer,
	NavContainer,
	NavItem,
	CompanyText,
	CompanySubText,
	StyledMenu,
	NavBarItem,
} from './index.styled';
import Button from '../../ui/Button';
import { useRouter } from 'next/navigation';
import { useMediaQuery, useTheme } from '@mui/material';
import Burger from './Burger';
import { NavMenuOpen } from '../../../context/NavMenuOpen';

const ROUTES = [
	{
		label: 'ABOUT',
		route: '/#about',
	},
	{
		label: 'LOCATIONS',
		route: '/#locations',
	},
	{
		label: 'SERVICES',
		route: '/#services',
	},
	{
		label: 'OUR WORK',
		route: '/#our-work',
	},
	{
		label: 'CONTACT',
		route: '/#contact',
	},
];

const Menu = ({ open, setOpen }: any) => {
	return (
		<StyledMenu open={open}>
			{ROUTES?.map((route) => (
				<NavBarItem
					key={route.route}
					href={route.route}
					open={open}
					onClick={() => {
						setOpen(false);
					}}
				>
					{route.label}
				</NavBarItem>
			))}
		</StyledMenu>
	);
};

const Header = () => {
	const theme = useTheme();
	const router = useRouter();
	const isMobileSize = useMediaQuery(theme.breakpoints.down('md'));
	const { navMenuOpen, setNavMenuOpen }: any = useContext(NavMenuOpen);

	return (
		<HeaderContainer>
			<Link href={'/'}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						zIndex: 100,
						position: 'absolute',
					}}
				>
					<CompanyText navMenuOpen={navMenuOpen}>RKS</CompanyText>
					<CompanySubText navMenuOpen={navMenuOpen}>Saloon</CompanySubText>
				</div>
			</Link>
			{isMobileSize ? (
				<div>
					<Burger open={navMenuOpen} setOpen={setNavMenuOpen} />
					<Menu open={navMenuOpen} setOpen={setNavMenuOpen} />
				</div>
			) : (
				<div>
					<NavContainer>
						{ROUTES?.map((route) => (
							<NavItem key={route.route} href={route.route}>
								<Text>{route.label}</Text>
							</NavItem>
						))}
					</NavContainer>
				</div>
			)}
			{!isMobileSize ? (
				<Button onClick={() => router.push('/#locations')}>
					<Text>Book Now</Text>
				</Button>
			) : null}
		</HeaderContainer>
	);
};

export default Header;
