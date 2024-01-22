import React from 'react';
import HeroImagePath from '../../../public/images/HeroBanner.jpg';
import {
	Container,
	HeroImage,
	DarkenedBG,
	HeroText,
	ChevronDown,
	ContentContainer,
} from './index.styled';
import { COLORS } from '../../utils/colors';

const HeroBanner = () => {
	return (
		<Container>
			<DarkenedBG>
				<HeroImage
					src={HeroImagePath}
					alt='RKS Barbers'
					fill
					objectFit='cover'
					objectPosition='23%'
				/>
			</DarkenedBG>
			<ContentContainer>
				<div />
				<HeroText>Where Every Cut Tells a Unique Story!</HeroText>
				<ChevronDown />
			</ContentContainer>
		</Container>
	);
};

export default HeroBanner;
