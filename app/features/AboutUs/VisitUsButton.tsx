'use client';

import React from 'react';
import Button from '../../components/ui/Button';
import { useRouter } from 'next/navigation';

const VisitUsButton = () => {
	const router = useRouter();
	return (
		<div style={{ height: '32px', marginTop: '36px' }}>
			<Button onClick={() => router.push('/#locations')}>Visit Us</Button>
		</div>
	);
};

export default VisitUsButton;
