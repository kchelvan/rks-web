import React from 'react';
import {
	CityHeader,
	Container,
	ContentContainer,
	HeaderText,
	LocationImageContainer,
	AddressContainer,
	LocationText,
	ParentContainer,
} from './index.styled';
import Image from 'next/image';
import { LOCATIONS } from './const';

const Locations = () => {
	return (
		<ParentContainer id='locations'>
			<Container>
				<HeaderText>Our Locations</HeaderText>
				<ContentContainer>
					{LOCATIONS?.map((location) => (
						<AddressContainer key={location?.address}>
							<LocationImageContainer>
								<Image
									src={location?.image}
									priority={true}
									alt='RKS Saloon'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									fill
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
		</ParentContainer>
	);
};

export default Locations;
