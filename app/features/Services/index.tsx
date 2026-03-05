'use client';

import React from 'react';
import {
	Container,
	Inner,
	HeaderRow,
	HeaderText,
	Label,
	Heading,
	Grid,
	ServiceCard,
	ServiceIcon,
	ServiceName,
	ServiceDescription,
	ServicePrice,
} from './index.styled';
import { useScrollReveal } from '../../utils/useScrollReveal';
import {
	ScissorsIcon,
	RazorIcon,
	SparklesIcon,
} from '../../components/ui/Icons';

const SERVICES = [
	{
		icon: <ScissorsIcon size={22} />,
		name: 'General Haircut',
		description:
			'Precision cutting tailored to your style, finished with a clean lineup and styling.',
		price: '$25',
	},
	{
		icon: <RazorIcon size={22} />,
		name: 'Beard Trim',
		description:
			'Expert beard sculpting, shaping, and conditioning for a polished finish.',
		price: '$15',
	},
	{
		icon: <SparklesIcon size={22} />,
		name: 'Beard Line Up',
		description:
			'Sharp, clean beard edges and neckline definition for a crisp, refined look.',
		price: '$15',
	},
];

const Services = () => {
	const containerRef = useScrollReveal();

	return (
		<Container
			id='services'
			aria-labelledby='services-heading'
			ref={containerRef}
		>
			<Inner>
				<HeaderRow>
					<HeaderText>
						<Label className='reveal'>What We Offer</Label>
						<Heading id='services-heading' className='reveal reveal-delay-1'>
							Our Services
						</Heading>
					</HeaderText>
				</HeaderRow>

				<Grid role='list'>
					{SERVICES.map((service, i) => (
						<div
							key={service.name}
							className={`reveal-scale reveal-delay-${Math.min(i + 1, 5)}`}
							role='listitem'
						>
							<ServiceCard>
								<ServiceIcon aria-hidden='true'>{service.icon}</ServiceIcon>
								<ServiceName>{service.name}</ServiceName>
								<ServiceDescription>{service.description}</ServiceDescription>
								<ServicePrice>{service.price}</ServicePrice>
							</ServiceCard>
						</div>
					))}
				</Grid>
			</Inner>
		</Container>
	);
};

export default Services;
