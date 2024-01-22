'use client';

import React from 'react';
import { FooterContainer, NavItem } from './index.styled';
import Text from '../../ui/Text';

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

const Header = () => {
	return (
		<FooterContainer>
			<NavItem href={'/#hero'}>
				<Text>© RKS Saloon</Text>
			</NavItem>
		</FooterContainer>
	);
};

export default Header;
