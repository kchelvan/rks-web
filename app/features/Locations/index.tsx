import React from 'react';
import {
	CityHeader,
	Container,
	ContentContainer,
	HeaderText,
	LocationImageContainer,
	LocationText,
} from './index.styled';
import AboutUsImage from '../../../public/images/istockphoto-872361244-612x612.jpg';
import Image from 'next/image';
import { LOCATIONS } from './const';

const Locations = () => {
	return (
		<Container id='locations'>
			<HeaderText>Our Locations</HeaderText>
			<ContentContainer>
				{LOCATIONS?.map((location) => (
					<div key={location?.address}>
						<LocationImageContainer>
							<Image
								src={location?.image}
								priority={true}
								alt='RKS Saloon'
								fill
								objectFit='cover'
								objectPosition='23%'
							/>
						</LocationImageContainer>
						<CityHeader>{location?.city}</CityHeader>
						<LocationText>{location?.address}</LocationText>
						<LocationText>{location?.phone}</LocationText>
					</div>
				))}
			</ContentContainer>
		</Container>
	);
};

export default Locations;
