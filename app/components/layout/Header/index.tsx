'use client';

import React from 'react';
import Text from '../../ui/Text';
import {
	Link,
	HeaderContainer,
	NavContainer,
	NavItem,
	CompanyText,
	CompanySubText,
} from './index.styled';
import Button from '../../ui/Button';
import { useRouter } from 'next/navigation';

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
	const router = useRouter();

	return (
		<HeaderContainer>
			<Link href={'/'}>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<CompanyText>RKS</CompanyText>
					<CompanySubText>Saloon</CompanySubText>
				</div>
			</Link>
			<NavContainer>
				{ROUTES?.map((route) => (
					<NavItem key={route.route} href={route.route}>
						<Text>{route.label}</Text>
					</NavItem>
				))}
			</NavContainer>
			<Button onClick={() => router.push('/#locations')}>
				<Text>Book Now</Text>
			</Button>
		</HeaderContainer>
	);
};

export default Header;
