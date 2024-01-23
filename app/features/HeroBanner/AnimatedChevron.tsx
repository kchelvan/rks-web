'use client';

import React, { useContext } from 'react';
import { ChevronDown } from './index.styled';
import { NavMenuOpen } from '../../context/NavMenuOpen';

const AnimatedChevron = () => {
	const { navMenuOpen }: any = useContext(NavMenuOpen);
	return (
		<div>
			{!navMenuOpen ? (
				<ChevronDown />
			) : (
				<div style={{ marginBottom: '80px' }} />
			)}
		</div>
	);
};

export default AnimatedChevron;
