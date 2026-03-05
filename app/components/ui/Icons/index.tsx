import React from 'react';

interface IconProps {
	size?: number;
	color?: string;
	className?: string;
	'aria-hidden'?: boolean | 'true' | 'false';
}

// ── Service Icons ──

export const ScissorsIcon = ({
	size = 24,
	color = 'currentColor',
	...props
}: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke={color}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<circle cx='6' cy='6' r='3' />
		<circle cx='6' cy='18' r='3' />
		<line x1='20' y1='4' x2='8.12' y2='15.88' />
		<line x1='14.47' y1='14.48' x2='20' y2='20' />
		<line x1='8.12' y1='8.12' x2='12' y2='12' />
	</svg>
);

export const BarberPoleIcon = ({
	size = 24,
	color = 'currentColor',
	...props
}: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke={color}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<path d='M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z' />
		<line x1='7' y1='7' x2='17' y2='7' />
		<line x1='7' y1='11' x2='17' y2='11' />
		<line x1='7' y1='15' x2='17' y2='15' />
		<line x1='7' y1='19' x2='17' y2='19' />
	</svg>
);

export const RazorIcon = ({
	size = 24,
	color = 'currentColor',
	...props
}: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke={color}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<path d='M7 3h10l-2 8H9L7 3z' />
		<path d='M9 11v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-8' />
		<line x1='12' y1='11' x2='12' y2='21' />
	</svg>
);

export const ChildIcon = ({
	size = 24,
	color = 'currentColor',
	...props
}: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke={color}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<circle cx='12' cy='7' r='4' />
		<path d='M5.5 21a6.5 6.5 0 0 1 13 0' />
	</svg>
);

export const DropletIcon = ({
	size = 24,
	color = 'currentColor',
	...props
}: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke={color}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<path d='M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z' />
	</svg>
);

export const SparklesIcon = ({
	size = 24,
	color = 'currentColor',
	...props
}: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke={color}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<path d='M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z' />
	</svg>
);

// ── Location / Contact Icons ──

export const MapPinIcon = ({
	size = 24,
	color = 'currentColor',
	...props
}: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke={color}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
		<circle cx='12' cy='10' r='3' />
	</svg>
);

export const PhoneIcon = ({
	size = 24,
	color = 'currentColor',
	...props
}: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke={color}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
	</svg>
);

export const ClockIcon = ({
	size = 24,
	color = 'currentColor',
	...props
}: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke={color}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<circle cx='12' cy='12' r='10' />
		<polyline points='12 6 12 12 16 14' />
	</svg>
);

export const ArrowRightIcon = ({
	size = 24,
	color = 'currentColor',
	...props
}: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke={color}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<line x1='5' y1='12' x2='19' y2='12' />
		<polyline points='12 5 19 12 12 19' />
	</svg>
);

// ── Navigation Icons ──

export const MenuIcon = ({
	size = 24,
	color = 'currentColor',
	...props
}: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke={color}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<line x1='3' y1='6' x2='21' y2='6' />
		<line x1='3' y1='12' x2='21' y2='12' />
		<line x1='3' y1='18' x2='21' y2='18' />
	</svg>
);

export const CloseIcon = ({
	size = 24,
	color = 'currentColor',
	...props
}: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke={color}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<line x1='18' y1='6' x2='6' y2='18' />
		<line x1='6' y1='6' x2='18' y2='18' />
	</svg>
);

// ── Rating Star Icon ──

export const StarIcon = ({
	size = 16,
	color = '#f59e0b',
	...props
}: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill={color}
		stroke='none'
		{...props}
	>
		<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
	</svg>
);

// ── Scroll / Chevron ──

export const ChevronDownIcon = ({
	size = 24,
	color = 'currentColor',
	...props
}: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke={color}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<polyline points='6 9 12 15 18 9' />
	</svg>
);

// ── External Link ──

export const ExternalLinkIcon = ({
	size = 24,
	color = 'currentColor',
	...props
}: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke={color}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
		<polyline points='15 3 21 3 21 9' />
		<line x1='10' y1='14' x2='21' y2='3' />
	</svg>
);

// ── Calendar Icon ──

export const CalendarIcon = ({
	size = 24,
	color = 'currentColor',
	...props
}: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke={color}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<rect x='3' y='4' width='18' height='18' rx='2' ry='2' />
		<line x1='16' y1='2' x2='16' y2='6' />
		<line x1='8' y1='2' x2='8' y2='6' />
		<line x1='3' y1='10' x2='21' y2='10' />
	</svg>
);
