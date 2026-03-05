'use client';

import React, {
	useState,
	useEffect,
	useCallback,
	useRef,
	useLayoutEffect,
} from 'react';
import {
	Container,
	Inner,
	HeaderSection,
	Label,
	Heading,
	CarouselWrapper,
	Grid,
	CardSlot,
	TestimonialCard,
	QuoteMark,
	TestimonialText,
	AuthorRow,
	AuthorAvatar,
	AuthorInfo,
	AuthorName,
	AuthorDetail,
	Stars,
} from './index.styled';
import { useScrollReveal } from '../../utils/useScrollReveal';
import { StarIcon } from '../../components/ui/Icons';

const TESTIMONIALS = [
	{
		quote:
			'Always a great place to go for a reasonably priced and quick cut before any big day! I would 100% recommend it to anyone. Both barbers are friendly and really know how to glow you up from a 4 to a 10.',
		name: 'Gajevindh J.',
		initials: 'GJ',
	},
	{
		quote:
			'Have been going here since childhood and it is always worth it. Very experienced and friendly staff.',
		name: 'Rubaganth S.',
		initials: 'RS',
	},
	{
		quote:
			'Going here for the past 15 years — the only place I go to cut my hair.',
		name: 'Waran S.',
		initials: 'WS',
	},
	{
		quote:
			"My experience at RKS was great! I've been going to them for haircuts and beard trims the last 3 times with different barbers at this salon, and they have been doing an amazing job — especially when I needed them for special occasions.",
		name: 'Pratheep',
		initials: 'P',
	},
	{
		quote:
			"Been going to RKS for so long that they feel like family. The welcoming vibe, and most of all — if you can explain the type of haircut you're looking for, they will do it! Great job, guys.",
		name: 'Rathan N.',
		initials: 'RN',
	},
	{
		quote:
			'Very humble guys who really take their time in ensuring you get a proper cut. Prices are great too. I love it.',
		name: 'Raheel M. G.',
		initials: 'RM',
	},
	{
		quote:
			'Great barber shop. Brought my kids here and the barber did a phenomenal job. Convenient location. Will be coming back for sure.',
		name: 'Usman R.',
		initials: 'UR',
	},
	{
		quote:
			"Very good place to get nice haircuts, and a good selection of movies. I've been a customer since 2001.",
		name: 'Thushaan T.',
		initials: 'TT',
	},
	{
		quote:
			'This place at Markham and Steeles has been my go-to barber for years. Without a doubt, they are the best in Canada. These are dedicated barbers who take their time and do not cut corners. They are extremely skilled, and in the 3 years I have been their patron, they have never made a mistake. Extremely friendly and professional.',
		name: 'Rajkiran N.',
		initials: 'RN',
	},
];

/** Number of cards visible at each breakpoint is handled by CSS grid,
 *  but we always cycle in groups of 3 for the data. */
const PAGE_SIZE = 3;
const TOTAL_PAGES = Math.ceil(TESTIMONIALS.length / PAGE_SIZE);
const AUTO_PLAY_MS = 6000;

const Testimonials = () => {
	const containerRef = useScrollReveal();
	const [activePage, setActivePage] = useState(0);
	const [sliding, setSliding] = useState<'in' | 'out' | null>(null);
	const gridRef = useRef<HTMLDivElement>(null);
	const [gridHeight, setGridHeight] = useState<number | undefined>(undefined);

	// Measure the grid's natural content height once when new cards mount.
	// Only runs on 'in' to avoid a second state update (on 'null') that
	// would re-trigger the card slide animations.
	useLayoutEffect(() => {
		if (sliding !== 'in') return;
		const el = gridRef.current;
		if (!el) return;

		// Remove fixed height so the grid auto-sizes to its content
		el.style.height = 'auto';
		const natural = el.scrollHeight;
		// Snap back to the previous height (no flash — synchronous)
		el.style.height = `${gridHeight ?? natural}px`;
		// Force reflow so the browser registers the starting value
		el.getBoundingClientRect();
		setGridHeight(natural);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activePage, sliding]);

	const goToPage = useCallback(
		(nextPage: number) => {
			if (nextPage === activePage) return;
			// 1. slide current cards out (staggered)
			setSliding('out');
			// 2. after exit animation, swap data & slide new cards in
			setTimeout(() => {
				setActivePage(nextPage);
				setSliding('in');
				// 3. settle
				setTimeout(() => setSliding(null), 600);
			}, 450);
		},
		[activePage],
	);

	// Auto-play — loops indefinitely
	useEffect(() => {
		const id = setInterval(() => {
			goToPage((activePage + 1) % TOTAL_PAGES);
		}, AUTO_PLAY_MS);
		return () => clearInterval(id);
	}, [activePage, goToPage]);

	const visibleTestimonials = TESTIMONIALS.slice(
		activePage * PAGE_SIZE,
		activePage * PAGE_SIZE + PAGE_SIZE,
	);

	return (
		<Container
			id='testimonials'
			aria-labelledby='testimonials-heading'
			ref={containerRef}
		>
			<Inner>
				<HeaderSection>
					<Label className='reveal'>Testimonials</Label>
					<Heading id='testimonials-heading' className='reveal reveal-delay-1'>
						What Our Clients Say
					</Heading>
				</HeaderSection>

				<CarouselWrapper className='reveal reveal-delay-2'>
					<Grid
						ref={gridRef}
						style={
							gridHeight !== undefined ? { height: gridHeight } : undefined
						}
					>
						{visibleTestimonials.map((testimonial, i) => (
							<CardSlot
								key={`${activePage}-${testimonial.name}`}
								$index={i}
								$state={sliding}
							>
								<TestimonialCard>
									<QuoteMark aria-hidden='true'>&ldquo;</QuoteMark>
									<Stars aria-label='5 out of 5 stars'>
										{[...Array(5)].map((_, j) => (
											<StarIcon key={j} size={15} />
										))}
									</Stars>
									<TestimonialText>{testimonial.quote}</TestimonialText>
									<AuthorRow>
										<AuthorAvatar aria-hidden='true'>
											{testimonial.initials}
										</AuthorAvatar>
										<AuthorInfo>
											<AuthorName>{testimonial.name}</AuthorName>
											<AuthorDetail>Google Review</AuthorDetail>
										</AuthorInfo>
									</AuthorRow>
								</TestimonialCard>
							</CardSlot>
						))}
					</Grid>
				</CarouselWrapper>
			</Inner>
		</Container>
	);
};

export default Testimonials;
