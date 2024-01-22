'use client';

import React from 'react';
import { Button as _Button } from './index.styled';

const Button = ({ onClick, children }: any) => {
	return <_Button onClick={onClick}>{children}</_Button>;
};

export default Button;
