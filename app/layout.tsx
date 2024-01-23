import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { COLORS } from './utils/colors';
import StyledComponentsRegistry from './lib/registry';
import { SpeedInsights } from '@vercel/speed-insights/next';
import NavMenuOpenContext from './context/NavMenuOpen';

const raleway = Raleway({ subsets: ['latin'], weight: ['500'] });

export const metadata: Metadata = {
	title: 'RKS Saloon',
	description:
		"Discover the ultimate grooming experience at RKS Saloon, your go-to destination for precision cuts, timeless styles, and unparalleled service. With multiple locations across Toronto, our skilled barbers are committed to crafting the perfect look for every client. Whether you're seeking a classic haircut, a modern fade, or a stylish beard trim, RKS Barbershop blends expertise with artistry. Join us at any of our convenient Toronto locations and experience the epitome of barbering excellence. Elevate your style, embrace the confidence – RKS Saloon, where your image comes to life.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={raleway.className}
				style={{
					height: '100%',
					minHeight: '100vh',
					backgroundColor: COLORS.pageBackground,
					margin: 0,
				}}
			>
				<SpeedInsights />
				<NavMenuOpenContext>
					<StyledComponentsRegistry>
						<Header />
						{children}
						<Footer />
					</StyledComponentsRegistry>
				</NavMenuOpenContext>
			</body>
		</html>
	);
}
