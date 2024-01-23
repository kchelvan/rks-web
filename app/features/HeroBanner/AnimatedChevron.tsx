'use client';

import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatedChevronContainer, ChevronDown } from './index.styled';
import { NavMenuOpen } from '../../context/NavMenuOpen';

const AnimatedChevron = ({ sx }: any) => {
	const router = useRouter();
	const { navMenuOpen }: any = useContext(NavMenuOpen);

	if (!navMenuOpen)
		return (
			<AnimatedChevronContainer onClick={() => router.push('/#about')}>
				<ChevronDown sx={sx} />
			</AnimatedChevronContainer>
		);

	return <div style={{ marginTop: 80 }} />;
};

export default AnimatedChevron;
