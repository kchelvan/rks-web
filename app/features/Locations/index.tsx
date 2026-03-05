'use client';

import React from 'react';
import Image from 'next/image';
import {
	Container,
	Inner,
	HeaderSection,
	Label,
	Heading,
	Subheading,
	LocationsGrid,
	LocationCard,
	LocationImageWrapper,
	LocationBody,
	LocationName,
	LocationAddress,
	LocationDetail,
	DetailRow,
	DetailIcon,
	LocationCTA,
} from './index.styled';
import { useScrollReveal } from '../../utils/useScrollReveal';
import {
	PhoneIcon,
	ClockIcon,
	ArrowRightIcon,
} from '../../components/ui/Icons';

const LOCATION_IMAGE =
	'https://static.where-e.com/Canada/Rks-Saloon-And-Video_ea73cd952a4430c74b891b2238982f3b.jpg';

const LOCATIONS = [
	{
		name: 'Scarborough',
		address: '3852 Finch Ave E, Scarborough, ON M1T 3T9',
		phone: '(416) 291-1444',
		hours: '9am to 9pm',
		mapUrl:
			'https://maps.google.com/?q=3852+Finch+Ave+E+Scarborough+ON+M1T+3T9',
	},
	{
		name: 'Scarborough',
		address: '6055 Steeles Ave E, Scarborough, ON M1X 0A7',
		phone: '(416) 439-1334',
		hours: '9am to 9pm',
		mapUrl:
			'https://maps.google.com/?q=6055+Steeles+Ave+E+Scarborough+ON+M1X+0A7',
	},
	{
		name: 'Scarborough',
		address: '2900 Markham Rd, Unit L6, Scarborough, ON M1X 1E6',
		phone: '(416) 291-3555',
		hours: '9am to 9pm',
		mapUrl: 'https://maps.google.com/?q=2900+Markham+Rd+Scarborough+ON+M1X+1E6',
	},
	{
		name: 'Markham',
		address: '25 Karachi Dr, Markham, ON L3S 0B5',
		phone: '(905) 471-5440',
		hours: '9am to 9pm',
		mapUrl: 'https://maps.google.com/?q=25+Karachi+Dr+Markham+ON+L3S+0B5',
	},
];

const Locations = () => {
	const containerRef = useScrollReveal();

	return (
		<Container
			id='locations'
			aria-labelledby='locations-heading'
			ref={containerRef}
		>
			<Inner>
				<HeaderSection>
					<Label className='reveal'>Visit Us</Label>
					<Heading id='locations-heading' className='reveal reveal-delay-1'>
						Our Locations
					</Heading>
					<Subheading className='reveal reveal-delay-2'>
						Ready for a fresh cut? Give us a call or stop by the shop nearest
						you.
					</Subheading>
				</HeaderSection>

				<LocationsGrid>
					{LOCATIONS.map((loc, i) => (
						<div
							key={loc.address}
							className={`reveal-scale reveal-delay-${Math.min(i + 1, 5)}`}
						>
							<LocationCard aria-label={`${loc.name} location`}>
								<LocationImageWrapper>
									<Image
										src={LOCATION_IMAGE}
										alt={`RKS Saloon ${loc.name} location`}
										fill
										style={{ objectFit: 'cover' }}
										sizes='(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw'
									/>
								</LocationImageWrapper>

								<LocationBody>
									<LocationName>{loc.name}</LocationName>
									<LocationAddress>{loc.address}</LocationAddress>

									<LocationDetail>
										<DetailRow>
											<DetailIcon aria-hidden='true'>
												<PhoneIcon size={15} />
											</DetailIcon>
											<a
												href={`tel:${loc.phone.replace(/[^+\d]/g, '')}`}
												aria-label={`Call ${loc.name} at ${loc.phone}`}
												style={{
													color: '#C41E2A',
													fontWeight: 600,
													textDecoration: 'none',
													borderBottom: '1px solid transparent',
													transition: 'border-color 0.2s ease',
												}}
												onMouseEnter={(e) =>
													(e.currentTarget.style.borderBottomColor = '#C41E2A')
												}
												onMouseLeave={(e) =>
													(e.currentTarget.style.borderBottomColor =
														'transparent')
												}
											>
												{loc.phone}
											</a>
										</DetailRow>
										<DetailRow>
											<DetailIcon aria-hidden='true'>
												<ClockIcon size={15} />
											</DetailIcon>
											<span>{loc.hours}</span>
										</DetailRow>
									</LocationDetail>

									<LocationCTA
										href={loc.mapUrl}
										target='_blank'
										rel='noopener noreferrer'
										aria-label={`Get directions to ${loc.name} location`}
									>
										Get Directions
										<ArrowRightIcon size={14} />
									</LocationCTA>
								</LocationBody>
							</LocationCard>
						</div>
					))}
				</LocationsGrid>
			</Inner>
		</Container>
	);
};

export default Locations;
