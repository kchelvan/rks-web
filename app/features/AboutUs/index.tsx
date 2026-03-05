'use client';

import React from 'react';
import Image from 'next/image';
import AboutImage from '../../../public/images/istockphoto-872361244-612x612.jpg';
import {
	Container,
	Inner,
	TextContent,
	Label,
	Heading,
	Divider,
	Description,
	StatsRow,
	StatItem,
	StatNumber,
	StatLabel,
	ImageSide,
	AccentBox,
} from './index.styled';
import { useScrollReveal } from '../../utils/useScrollReveal';

const AboutUs = () => {
	const containerRef = useScrollReveal();

	return (
		<Container id='about' aria-labelledby='about-heading' ref={containerRef}>
			<Inner>
				<TextContent className='reveal-left'>
					<Label>About Us</Label>
					<Heading id='about-heading'>
						A Tamil-Owned Legacy
						<br />
						in the Greater Toronto Area
					</Heading>
					<Divider />
					<Description>
						For over 20 years, RKS Saloon has been a trusted name in the Greater
						Toronto Area. As a proud Tamil-owned business, we bring a tradition
						of care, precision, and community to every haircut.
					</Description>
					<Description>
						Our skilled stylists combine time-tested techniques with modern
						styles — from classic cuts to sharp fades. Walk in as a customer,
						leave as family.
					</Description>
					<StatsRow>
						<StatItem>
							<StatNumber>20+</StatNumber>
							<StatLabel>Years</StatLabel>
						</StatItem>
						<StatItem>
							<StatNumber>4</StatNumber>
							<StatLabel>Locations</StatLabel>
						</StatItem>
						<StatItem>
							<StatNumber>15K+</StatNumber>
							<StatLabel>Happy Clients</StatLabel>
						</StatItem>
					</StatsRow>
				</TextContent>

				<div
					style={{ position: 'relative' }}
					className='reveal-right reveal-delay-2'
				>
					<ImageSide>
						<Image
							src={AboutImage}
							alt='Professional stylist at RKS Saloon providing a precision haircut'
							fill
							style={{ objectFit: 'cover' }}
							sizes='(max-width: 900px) 100vw, 50vw'
						/>
					</ImageSide>
					<AccentBox />
				</div>
			</Inner>
		</Container>
	);
};

export default AboutUs;
