import React from 'react';
import {
	CityHeader,
	Container,
	ContentContainer,
	HeaderText,
	LocationImageContainer,
	AddressContainer,
	LocationText,
} from './index.styled';
import Image from 'next/image';
import { LOCATIONS } from './const';

const Locations = () => {
	return (
		<Container id='locations'>
			<HeaderText>Our Locations</HeaderText>
			<ContentContainer>
				{LOCATIONS?.map((location) => (
					<AddressContainer key={location?.address}>
						<LocationImageContainer>
							<Image
								src={location?.image}
								priority={true}
								alt='RKS Saloon'
								width={326}
								height={200}
								// sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								style={{
									objectFit: 'cover',
									objectPosition: '23%',
								}}
							/>
						</LocationImageContainer>
						<CityHeader>{location?.city}</CityHeader>
						<LocationText>{location?.address}</LocationText>
						<LocationText>{location?.phone}</LocationText>
					</AddressContainer>
				))}
			</ContentContainer>
		</Container>
	);
};

export default Locations;
