import React from 'react';
import { StyledBurger } from './index.styled';

const Burger = ({ open, setOpen }: any) => {
	return (
		<StyledBurger open={open} onClick={() => setOpen(!open)}>
			<div />
			<div />
			<div />
		</StyledBurger>
	);
};

export default Burger;
