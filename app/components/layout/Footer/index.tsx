'use client';

import React from 'react';
import {
	FooterContainer,
	FooterInner,
	FooterGrid,
	FooterColumn,
	FooterLogo,
	FooterLogoText,
	FooterLogoSub,
	FooterColumnTitle,
	FooterText,
	FooterLink,
	FooterBottom,
	Copyright,
} from './index.styled';

const Footer = () => {
	return (
		<FooterContainer role='contentinfo'>
			<FooterInner>
				<FooterGrid>
					<FooterColumn>
						<FooterLogo>
							<FooterLogoText>RKS</FooterLogoText>
							<FooterLogoSub>Saloon</FooterLogoSub>
						</FooterLogo>
						<FooterText>
							A proud Tamil-owned saloon serving the Greater Toronto Area for
							over 20 years. Precision cuts, classic styles, and a community
							feel.
						</FooterText>
					</FooterColumn>

					<FooterColumn>
						<FooterColumnTitle>Navigate</FooterColumnTitle>
						<FooterLink href='/#about'>About</FooterLink>
						<FooterLink href='/#services'>Services</FooterLink>
						<FooterLink href='/#locations'>Locations</FooterLink>
						<FooterLink href='/#testimonials'>Testimonials</FooterLink>
					</FooterColumn>
				</FooterGrid>

				<FooterBottom>
					<Copyright>
						&copy; {new Date().getFullYear()} RKS Saloon. All rights reserved.
					</Copyright>
				</FooterBottom>
			</FooterInner>
		</FooterContainer>
	);
};

export default Footer;
