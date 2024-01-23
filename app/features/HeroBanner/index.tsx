import React from 'react';
import HeroImagePath from '../../../public/images/HeroBanner.jpg';
import {
	Container,
	HeroImage,
	DarkenedBG,
	HeroText,
	ContentContainer,
} from './index.styled';
import AnimatedChevron from './AnimatedChevron';

const HeroBanner = () => {
	return (
		<Container>
			<DarkenedBG>
				<HeroImage
					priority={true}
					src={HeroImagePath}
					alt='RKS Saloon'
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					style={{
						objectFit: 'cover',
						objectPosition: '23%',
					}}
				/>
			</DarkenedBG>
			<ContentContainer>
				<div />
				<HeroText>Where Every Cut Tells a Unique Story!</HeroText>
				<AnimatedChevron sx={{ fontSize: 48 }} />
			</ContentContainer>
		</Container>
	);
};

export default HeroBanner;
