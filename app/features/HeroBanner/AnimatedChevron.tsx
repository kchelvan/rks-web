'use client';

import React, { useContext } from 'react';
import { ChevronDown } from './index.styled';
import { NavMenuOpen } from '../../context/NavMenuOpen';

const AnimatedChevron = ({ sx }: any) => {
	const { navMenuOpen }: any = useContext(NavMenuOpen);

	if (!navMenuOpen) return <ChevronDown sx={sx} />;

	return <div style={{ marginTop: 80 }} />;
};

export default AnimatedChevron;
