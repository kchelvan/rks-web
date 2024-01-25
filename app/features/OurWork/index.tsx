'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
	Text,
	Image,
	Container,
	ContentContainer,
	HeaderText,
	ImageContainer,
	ImageGroup,
} from './index.styled';
import {
	WORK_CARD_ONE,
	WORK_CARD_TWO,
	WORK_CARD_THREE,
	TESTIMONIALS,
} from './constants';

const OurWork = () => {
	const [tabFocused, setTabFocused] = useState(true);
	const [initMount, setInitMount] = useState(true);
	const [testimonialIndex, setTestimonialIndex]: any = useState(0);
	const [imageOneIndex, setImageOneIndex]: any = useState(0);
	const [imageTwoIndex, setImageTwoIndex]: any = useState(0);
	const [imageThreeIndex, setImageThreeIndex]: any = useState(0);

	useEffect(() => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker
				.register('../../../service-worker.js')
				.then((registration) => console.log('scope is: ', registration.scope));
		}
	}, []);

	const workerRef = useRef<Worker>();

	useEffect(() => {
		workerRef.current = new Worker(
			new URL('../../../public/service-worker.js', import.meta.url)
		);
		workerRef.current.onmessage = (event: MessageEvent<number>) =>
			alert(`WebWorker Response => ${event.data}`);
		return () => {
			workerRef.current?.terminate();
		};
	}, []);

	const imageOneTimerRef = setTimeout(() => {
		imageOneTimer();
	}, 5000);

	const imageTwoTimerRef = setTimeout(
		() => {
			imageTwoTimer();
		},
		initMount ? 5150 : 5000
	);

	const imageThreeTimerRef = setTimeout(
		() => {
			imageThreeTimer();
		},
		initMount ? 5300 : 5000
	);

	const testimonialTimerRef = setTimeout(() => {
		testimonialTimer();
	}, 5000);

	useEffect(() => {
		if (tabFocused) {
			imageOneTimerRef;
			imageTwoTimerRef;
			imageThreeTimerRef;
			testimonialTimerRef;
		} else {
			setInitMount(true);

			clearTimeout(imageOneTimerRef);
			clearTimeout(imageTwoTimerRef);
			clearTimeout(imageThreeTimerRef);
			clearTimeout(testimonialTimerRef);
		}
	}, [tabFocused]);

	const testimonialTimer: any = () => {
		if (initMount) {
			setInitMount(false);
		}
		workerRef.current?.postMessage({
			index: 3,
			imageIndex: testimonialIndex,
			size: TESTIMONIALS.length,
		});
	};

	const imageOneTimer: any = () => {
		if (initMount) {
			setInitMount(false);
		}
		workerRef.current?.postMessage({
			index: 0,
			imageIndex: imageOneIndex,
			size: WORK_CARD_ONE.length,
		});
	};
	const imageTwoTimer: any = () => {
		if (initMount) {
			setInitMount(false);
		}
		workerRef.current?.postMessage({
			index: 1,
			imageIndex: imageTwoIndex,
			size: WORK_CARD_TWO.length,
		});
	};
	const imageThreeTimer: any = () => {
		if (initMount) {
			setInitMount(false);
		}
		workerRef.current?.postMessage({
			index: 2,
			imageIndex: imageThreeIndex,
			size: WORK_CARD_THREE.length,
		});
	};

	useEffect(() => {
		workerRef.current = new Worker(
			new URL('../../../public/service-worker.js', import.meta.url)
		);
		workerRef.current.onmessage = (event: any) => {
			const { index, res } = event.data;

			switch (index) {
				case 0:
					setImageOneIndex(parseInt(res));
					break;
				case 1:
					setImageTwoIndex(parseInt(res));
					break;
				case 2:
					setImageThreeIndex(parseInt(res));
					break;
				case 3:
					setTestimonialIndex(parseInt(res));
					break;
			}
		};

		return () => {
			workerRef.current?.terminate();
		};
	}, []);

	// document.addEventListener('visibilitychange', function (event) {
	// 	if (document.hidden) {
	// 		tabFocused && setTabFocused(false);
	// 	} else {
	// 		!tabFocused && setTabFocused(true);
	// 	}
	// });

	return (
		<Container id='our-work'>
			<HeaderText>Our Work</HeaderText>
			<ContentContainer>
				<ImageGroup index={0}>
					<div>
						{WORK_CARD_ONE?.map((image, index) => {
							return (
								<ImageContainer
									visibleIndex={imageOneIndex}
									currentIndex={index}
								>
									<Image
										src={image}
										alt='RKS Saloon Scarborough'
										fill
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										style={{
											objectFit: 'cover',
											objectPosition: '40%',
										}}
										priority={true}
									/>
								</ImageContainer>
							);
						})}
					</div>
				</ImageGroup>
				<ImageGroup index={1}>
					<div>
						{WORK_CARD_TWO?.map((image, index) => {
							return (
								<ImageContainer
									visibleIndex={imageTwoIndex}
									currentIndex={index}
								>
									<Image
										src={image}
										alt='RKS Saloon Scarborough'
										fill
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										style={{
											objectFit: 'cover',
											objectPosition: '40%',
										}}
										priority={true}
									/>
								</ImageContainer>
							);
						})}
					</div>
				</ImageGroup>
				<ImageGroup index={2}>
					<div>
						{WORK_CARD_THREE?.map((image, index) => {
							return (
								<ImageContainer
									visibleIndex={imageThreeIndex}
									currentIndex={index}
								>
									<Image
										src={image}
										alt='RKS Saloon Scarborough'
										fill
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										style={{
											objectFit: 'cover',
											objectPosition: '40%',
										}}
										priority={true}
									/>
								</ImageContainer>
							);
						})}
					</div>
				</ImageGroup>
			</ContentContainer>
			<Text>{`"${TESTIMONIALS[testimonialIndex].testimonial}"\n\n${TESTIMONIALS[testimonialIndex].author}`}</Text>
		</Container>
	);
};

export default OurWork;
