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
import VisitUsButton from './VisitUsButton';
import { device } from '../../utils/breakpoints';

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
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						style={{
							objectFit: 'cover',
							objectPosition: '23%',
						}}
					/>
				</ImageContainer>
				<TextContainer>
					<HeaderText>About Us</HeaderText>
					<Text>{ABOUT_TEXT}</Text>
					<VisitUsButton />
				</TextContainer>
			</ContentContainer>
		</Container>
	);
};

export default AboutUs;
