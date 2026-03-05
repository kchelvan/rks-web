import Link from 'next/link';
import styled from 'styled-components';
import { COLORS } from '../../../utils/colors';

/* ── Wrapper — just a stacking context, no layout ────── */
export const Wrapper = styled('div')`
	position: relative;
	z-index: 1000;
`;

/* ── Top bar (always visible) ────────────────────────── */
export const Bar = styled('header')<{
	$scrolled?: boolean;
	$open?: boolean;
}>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 40px;
	z-index: 1002;
	background: ${({ $scrolled, $open }) =>
		$scrolled || $open ? 'rgba(245, 244, 242, 0.98)' : 'transparent'};
	backdrop-filter: ${({ $scrolled, $open }) =>
		$scrolled || $open ? 'blur(12px)' : 'none'};
	border-bottom: 1px solid
		${({ $scrolled, $open }) =>
			$scrolled || $open ? COLORS.border : 'transparent'};
	transition:
		background 0.4s cubic-bezier(0.22, 1, 0.36, 1),
		border-color 0.4s cubic-bezier(0.22, 1, 0.36, 1),
		backdrop-filter 0.4s cubic-bezier(0.22, 1, 0.36, 1);

	@media (max-width: 768px) {
		padding: 0 20px;
	}
`;

/* ── Logo ────────────────────────────────────────────── */
export const LogoLink = styled(Link)`
	text-decoration: none;
	display: flex;
	align-items: baseline;
	gap: 6px;
	position: relative;
	z-index: 1;
`;

export const CompanyText = styled('span')<{
	$scrolled?: boolean;
	$open?: boolean;
}>`
	color: ${({ $scrolled, $open }) =>
		$scrolled || $open ? COLORS.red : COLORS.white};
	font-size: 26px;
	font-weight: 800;
	letter-spacing: 2px;
	transition: color 0.3s ease;
`;

export const CompanySubText = styled('span')<{
	$scrolled?: boolean;
	$open?: boolean;
}>`
	color: ${({ $scrolled, $open }) =>
		$scrolled || $open ? COLORS.textMuted : 'rgba(255,255,255,0.7)'};
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 2px;
	text-transform: uppercase;
	transition: color 0.3s ease;
`;

/* ── Desktop nav ─────────────────────────────────────── */
export const DesktopNav = styled('nav')`
	display: flex;
	align-items: center;
	gap: 4px;

	@media (max-width: 900px) {
		display: none;
	}
`;

export const DesktopNavItem = styled(Link)<{ $scrolled?: boolean }>`
	color: ${({ $scrolled }) =>
		$scrolled ? COLORS.textSecondary : 'rgba(255,255,255,0.85)'};
	text-decoration: none;
	font-size: 13px;
	font-weight: 500;
	padding: 8px 16px;
	border-radius: 6px;
	transition:
		color 0.3s cubic-bezier(0.22, 1, 0.36, 1),
		background 0.3s cubic-bezier(0.22, 1, 0.36, 1);

	&:hover {
		color: ${COLORS.red};
		background: ${COLORS.redBg};
	}
`;

/* ── Hamburger button ────────────────────────────────── */
export const Hamburger = styled('button')<{
	$scrolled?: boolean;
	$open?: boolean;
}>`
	display: none;
	background: none;
	border: none;
	cursor: pointer;
	padding: 8px;
	color: ${({ $scrolled, $open }) =>
		$scrolled || $open ? COLORS.textPrimary : COLORS.white};
	transition: color 0.3s ease;
	position: relative;
	z-index: 1;

	@media (max-width: 900px) {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

/* ── Dark overlay behind drawer ──────────────────────── */
export const Overlay = styled('div')<{ $open: boolean }>`
	display: none;

	@media (max-width: 900px) {
		display: block;
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.35);
		opacity: ${({ $open }) => ($open ? 1 : 0)};
		pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
		transition: opacity 0.3s ease;
		z-index: 1000;
	}
`;

/* ── Slide-down drawer ───────────────────────────────── */
export const Drawer = styled('nav')<{ $open: boolean }>`
	display: none;

	@media (max-width: 900px) {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: ${COLORS.surface};
		padding: 84px 24px 32px;
		border-bottom-left-radius: 16px;
		border-bottom-right-radius: 16px;
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
		transform: ${({ $open }) =>
			$open ? 'translateY(0)' : 'translateY(-100%)'};
		transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1);
		z-index: 1001;
	}
`;

export const DrawerNavItem = styled(Link)`
	color: ${COLORS.textPrimary};
	text-decoration: none;
	font-size: 18px;
	font-weight: 500;
	padding: 16px 20px;
	border-radius: 10px;
	text-align: center;
	transition:
		background 0.2s ease,
		color 0.2s ease;

	&:hover,
	&:active {
		color: ${COLORS.red};
		background: ${COLORS.redBg};
	}
`;
