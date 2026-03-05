'use client';

import React, { useState, useEffect } from 'react';
import {
	Wrapper,
	Bar,
	LogoLink,
	CompanyText,
	CompanySubText,
	DesktopNav,
	DesktopNavItem,
	Hamburger,
	Overlay,
	Drawer,
	DrawerNavItem,
} from './index.styled';
import { MenuIcon, CloseIcon } from '../../ui/Icons';

const ROUTES = [
	{ label: 'About', href: '/#about' },
	{ label: 'Services', href: '/#services' },
	{ label: 'Locations', href: '/#locations' },
	{ label: 'Testimonials', href: '/#testimonials' },
];

const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 60);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	// Lock body scroll when drawer is open
	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<Wrapper>
			{/* Fixed top bar */}
			<Bar $scrolled={scrolled} $open={open} role='banner'>
				<LogoLink href='/#hero' aria-label='RKS Saloon - Home'>
					<CompanyText $scrolled={scrolled} $open={open}>
						RKS
					</CompanyText>
					<CompanySubText $scrolled={scrolled} $open={open}>
						Saloon
					</CompanySubText>
				</LogoLink>

				<DesktopNav aria-label='Main navigation'>
					{ROUTES.map((r) => (
						<DesktopNavItem key={r.href} href={r.href} $scrolled={scrolled}>
							{r.label}
						</DesktopNavItem>
					))}
				</DesktopNav>

				<Hamburger
					$scrolled={scrolled}
					$open={open}
					onClick={() => setOpen((v) => !v)}
					aria-label={open ? 'Close menu' : 'Open menu'}
					aria-expanded={open}
				>
					{open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
				</Hamburger>
			</Bar>

			{/* Mobile drawer — sibling of Bar, not nested inside */}
			<Overlay $open={open} onClick={() => setOpen(false)} />
			<Drawer $open={open} aria-label='Mobile navigation'>
				{ROUTES.map((r) => (
					<DrawerNavItem
						key={r.href}
						href={r.href}
						onClick={() => setOpen(false)}
					>
						{r.label}
					</DrawerNavItem>
				))}
			</Drawer>
		</Wrapper>
	);
};

export default Header;
