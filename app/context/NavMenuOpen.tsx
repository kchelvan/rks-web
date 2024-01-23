'use client';

import { createContext, useState } from 'react';

export const NavMenuOpen: any = createContext(false);

const NavMenuOpenContext = ({ children }: any) => {
	const [navMenuOpen, setNavMenuOpen] = useState();

	return (
		<NavMenuOpen.Provider value={{ navMenuOpen, setNavMenuOpen }}>
			{children}
		</NavMenuOpen.Provider>
	);
};

export default NavMenuOpenContext;
