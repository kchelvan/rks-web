'use client';

import React, { useEffect, useState } from 'react';
import {
	Container,
	ContentContainer,
	HeaderText,
	ImageContainer,
} from './index.styled';
import { WORK_CARD_ONE, WORK_CARD_TWO, WORK_CARD_THREE } from './constants';
import Image from 'next/image';

const Testimonials = () => {
	const [imageIndex, setImageIndex] = useState([0, 0, 0]);

	useEffect(() => {
		const imageOneTimer: any = () => {
			setTimeout(imageOneTimer, 4000);
			setImageIndex((index: any) => {
				if (index[0] + 1 < WORK_CARD_ONE.length) {
					return [index[0] + 1, index[1], index[2]];
				} else {
					return [0, index[1], index[2]];
				}
			});
		};

		const imageTwoTimer: any = () => {
			setTimeout(imageTwoTimer, 4500);
			setImageIndex((index: any) => {
				if (index[1] + 1 < WORK_CARD_TWO.length) {
					return [index[0], index[1] + 1, index[2]];
				} else {
					return [index[0], 0, index[2]];
				}
			});
		};

		const imageThreeTimer: any = () => {
			setTimeout(imageThreeTimer, 5000);
			setImageIndex((index: any) => {
				if (index[2] + 1 < WORK_CARD_THREE.length) {
					return [index[0], index[1], index[2] + 1];
				} else {
					return [index[1], index[1], 0];
				}
			});
		};

		imageOneTimer();
		imageTwoTimer();
		imageThreeTimer();
	}, []);

	return (
		<Container id='our-work'>
			<HeaderText>Our Work</HeaderText>
			<ContentContainer>
				<ImageContainer>
					<Image
						src={WORK_CARD_ONE[imageIndex[0]]}
						alt='RKS Saloon Scarborough'
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						style={{
							objectFit: 'cover',
							objectPosition: '23%',
						}}
					/>
				</ImageContainer>
				<ImageContainer>
					<Image
						src={WORK_CARD_TWO[imageIndex[1]]}
						alt='RKS Saloon Scarborough'
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						style={{
							objectFit: 'cover',
							objectPosition: '23%',
						}}
					/>
				</ImageContainer>
				<ImageContainer>
					<Image
						src={WORK_CARD_THREE[imageIndex[2]]}
						alt='RKS Saloon Scarborough'
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						style={{
							objectFit: 'cover',
							objectPosition: '23%',
						}}
					/>
				</ImageContainer>
			</ContentContainer>
		</Container>
	);
};

export default Testimonials;
