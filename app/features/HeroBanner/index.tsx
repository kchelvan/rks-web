'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroImagePath from '../../../public/images/HeroBanner.jpg';
import {
	Container,
	HeroImage,
	DarkenedBG,
	HeroText,
	HeroAccentLine,
	HeroSubtext,
	HeroLabel,
	ContentContainer,
	HeroCTA,
	ScrollIndicator,
	ScrollMouse,
	ScrollText,
} from './index.styled';
import { fadeInUp } from '../../utils/animations';
import { ChevronDownIcon } from '../../components/ui/Icons';

const HeroBanner = () => {
	useEffect(() => {
		const html = document.documentElement;

		const handleScroll = () => {
			if (window.scrollY < window.innerHeight) {
				html.classList.remove('show-scrollbar');
			} else {
				html.classList.add('show-scrollbar');
			}
		};

		// Set initial state
		handleScroll();

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
			html.classList.remove('show-scrollbar');
		};
	}, []);

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
					variants={fadeInUp}
					custom={0}
					style={{ display: 'flex', justifyContent: 'center' }}
				>
					<HeroLabel>
						<span>Tamil-Owned</span>
						<span className='label-divider' aria-hidden='true' />
						<span>20+ Years of Service</span>
					</HeroLabel>
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
					custom={1.5}
					style={{ display: 'flex', justifyContent: 'center' }}
				>
					<HeroAccentLine />
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
						<ChevronDownIcon size={14} />
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
				<ScrollMouse />
				<ScrollText>Scroll</ScrollText>
			</ScrollIndicator>
		</Container>
	);
};

export default HeroBanner;
