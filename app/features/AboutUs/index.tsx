import React from 'react';
import {
	Container,
	ContentContainer,
	ImageContainer,
	TextContainer,
	Text,
	HeaderText,
} from './index.styled';
import Image from 'next/image';
import AboutUsImage from '../../../public/images/istockphoto-872361244-612x612.jpg';
import { ABOUT_TEXT } from './const';

const AboutUs = () => {
	return (
		<Container id='about'>
			<ContentContainer>
				<ImageContainer>
					<Image
						src={AboutUsImage}
						priority={true}
						alt='RKS Saloon'
						fill
						objectFit='cover'
						objectPosition='23%'
					/>
				</ImageContainer>
				<TextContainer>
					<HeaderText>About Us</HeaderText>
					<Text>{ABOUT_TEXT}</Text>
				</TextContainer>
			</ContentContainer>
		</Container>
	);
};

export default AboutUs;
