'use client';

import React from 'react';
import {
	Container,
	Inner,
	HeaderSection,
	Label,
	Heading,
	Subheading,
	ContactGrid,
	ContactCard,
	CardLocationName,
	CardAddress,
	CardDivider,
	CardPhone,
	CardPhoneIcon,
	CardMapLink,
} from './index.styled';
import { useScrollReveal } from '../../utils/useScrollReveal';
import { PhoneIcon, ArrowRightIcon } from '../../components/ui/Icons';

const LOCATIONS = [
	{
		name: 'Scarborough',
		address: '3040 Lawrence Ave E, Scarborough, ON M1P 2T7',
		phone: '(416) 291-1444',
		mapUrl: 'https://maps.google.com/?q=3040+Lawrence+Ave+E+Scarborough+ON',
	},
	{
		name: 'Markham',
		address: '7220 Kennedy Rd, Markham, ON L3R 7P2',
		phone: '(905) 477-5678',
		mapUrl: 'https://maps.google.com/?q=7220+Kennedy+Rd+Markham+ON',
	},
	{
		name: 'Ajax',
		address: '75 Bayly St W, Ajax, ON L1S 7K7',
		phone: '(905) 619-9012',
		mapUrl: 'https://maps.google.com/?q=75+Bayly+St+W+Ajax+ON',
	},
];

const ContactUs = () => {
	const containerRef = useScrollReveal();

	return (
		<Container
			id='contact'
			aria-labelledby='contact-heading'
			ref={containerRef}
		>
			<Inner>
				<HeaderSection>
					<Label className='reveal'>Get in Touch</Label>
					<Heading id='contact-heading' className='reveal reveal-delay-1'>
						Contact Us
					</Heading>
					<Subheading className='reveal reveal-delay-2'>
						Ready for a fresh cut? Give us a call or visit the location nearest
						you.
					</Subheading>
				</HeaderSection>

				<ContactGrid>
					{LOCATIONS.map((loc, i) => (
						<div
							key={loc.name}
							className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
						>
							<ContactCard>
								<CardLocationName>{loc.name}</CardLocationName>
								<CardAddress>{loc.address}</CardAddress>
								<CardDivider />
								<CardPhone
									href={`tel:${loc.phone.replace(/[^+\d]/g, '')}`}
									aria-label={`Call ${loc.name} location at ${loc.phone}`}
								>
									<CardPhoneIcon aria-hidden='true'>
										<PhoneIcon size={16} />
									</CardPhoneIcon>
									{loc.phone}
								</CardPhone>
								<br />
								<CardMapLink
									href={loc.mapUrl}
									target='_blank'
									rel='noopener noreferrer'
									aria-label={`Get directions to ${loc.name}`}
								>
									Get Directions <ArrowRightIcon size={12} />
								</CardMapLink>
							</ContactCard>
						</div>
					))}
				</ContactGrid>
			</Inner>
		</Container>
	);
};

export default ContactUs;
