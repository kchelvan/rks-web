'use client';

import React, { useContext } from 'react';
import { ChevronDown, StaticChevronDown } from './index.styled';
import { NavMenuOpen } from '../../context/NavMenuOpen';

const AnimatedChevron = () => {
	const { navMenuOpen }: any = useContext(NavMenuOpen);

	if (!navMenuOpen) return <ChevronDown />;

	return <StaticChevronDown />;
};

export default AnimatedChevron;
