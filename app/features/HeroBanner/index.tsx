'use client';

import React from 'react';
import { motion } from 'framer-motion';
import HeroImagePath from '../../../public/images/HeroBanner.jpg';
import {
	Container,
	HeroImage,
	DarkenedBG,
	HeroText,
	HeroSubtext,
	HeroLabel,
	ContentContainer,
	HeroCTA,
	ScrollIndicator,
	ScrollLine,
	ScrollText,
} from './index.styled';
import { fadeIn, fadeInUp } from '../../utils/animations';
import { ChevronDownIcon } from '../../components/ui/Icons';

const HeroBanner = () => {
	return (
		<Container id='hero' aria-label='Hero banner'>
			<HeroImage
				src={HeroImagePath}
				alt='Interior of RKS Saloon in Scarborough, Toronto'
				fill
				priority
				sizes='100vw'
				placeholder='blur'
			/>
			<DarkenedBG />

			<ContentContainer>
				<motion.div
					initial='hidden'
					animate='visible'
					variants={fadeIn}
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<HeroLabel>Tamil-Owned · 20+ Years of Service</HeroLabel>
				</motion.div>

				<motion.div
					initial='hidden'
					animate='visible'
					variants={fadeInUp}
					custom={1}
					style={{ textAlign: 'center' }}
				>
					<HeroText>
						The GTA&apos;s Trusted
						<br />
						Saloon
					</HeroText>
				</motion.div>

				<motion.div
					initial='hidden'
					animate='visible'
					variants={fadeInUp}
					custom={2}
					style={{ display: 'flex', justifyContent: 'center' }}
				>
					<HeroSubtext>
						Precision haircuts, clean fades, and classic grooming — proudly
						serving the Greater Toronto Area with four convenient locations.
					</HeroSubtext>
				</motion.div>

				<motion.div
					initial='hidden'
					animate='visible'
					variants={fadeInUp}
					custom={3}
					style={{ display: 'flex', justifyContent: 'center' }}
				>
					<HeroCTA
						href='#locations'
						onClick={(e) => {
							e.preventDefault();
							document
								.getElementById('locations')
								?.scrollIntoView({ behavior: 'smooth' });
						}}
					>
						View Locations
						<ChevronDownIcon size={16} />
					</HeroCTA>
				</motion.div>
			</ContentContainer>

			<ScrollIndicator
				onClick={() =>
					document
						.getElementById('about')
						?.scrollIntoView({ behavior: 'smooth' })
				}
				role='button'
				aria-label='Scroll to about section'
			>
				<ScrollLine />
				<ScrollText>Scroll</ScrollText>
			</ScrollIndicator>
		</Container>
	);
};

export default HeroBanner;
