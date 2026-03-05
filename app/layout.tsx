import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { COLORS } from './utils/colors';
import StyledComponentsRegistry from './lib/registry';
import './globals.css';

const raleway = Raleway({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
	display: 'swap',
});

export const metadata: Metadata = {
	title:
		'RKS Saloon | Saloon in Scarborough & GTA | Haircuts, Fades & Grooming',
	description:
		'RKS Saloon is a Tamil-owned saloon in Scarborough with over 20 years of service. Offering precision haircuts, skin fades, beard trims, and grooming across the GTA. Locations in Scarborough and Markham. Call (416) 291-1444.',
	keywords: [
		'saloon Scarborough',
		'haircut Scarborough',
		'hair saloon Scarborough Toronto',
		'skin fade Scarborough',
		'beard trim Scarborough',
		'RKS Saloon',
		'Tamil saloon Scarborough',
		'best saloon GTA',
		'saloon near me Scarborough',
		'mens haircut Toronto',
		'fade haircut Scarborough',
		'Scarborough grooming',
	],
	authors: [{ name: 'RKS Saloon' }],
	openGraph: {
		title: 'RKS Saloon | Saloon in Scarborough',
		description:
			"Precision haircuts, skin fades & grooming at Scarborough's trusted saloon. Tamil-owned, serving the community for 20+ years.",
		url: 'https://www.rkssaloon.com',
		siteName: 'RKS Saloon',
		locale: 'en_CA',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'RKS Saloon | Saloon in Scarborough',
		description:
			"Precision haircuts, skin fades & grooming at Scarborough's trusted saloon. 20+ years of service.",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: 'https://www.rkssaloon.com',
	},
};

// JSON-LD Structured Data for Local Business SEO (Scarborough prioritized)
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	name: 'RKS Saloon',
	description:
		'Tamil-owned saloon in Scarborough with over 20 years of service. Offering precision haircuts, skin fades, beard trims and grooming across the GTA.',
	url: 'https://www.rkssaloon.com',
	telephone: '+14162911444',
	email: 'info@rkssaloon.com',
	priceRange: '$$',
	address: {
		'@type': 'PostalAddress',
		streetAddress: '3852 Finch Ave E',
		addressLocality: 'Scarborough',
		addressRegion: 'ON',
		postalCode: 'M1T 3T9',
		addressCountry: 'CA',
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: 43.7615,
		longitude: -79.2514,
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: [
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
				'Sunday',
			],
			opens: '09:00',
			closes: '21:00',
		},
	],
	areaServed: [
		{ '@type': 'City', name: 'Scarborough' },
		{ '@type': 'City', name: 'Toronto' },
		{ '@type': 'City', name: 'Markham' },
	],
	sameAs: ['https://www.vagaro.com/rkssaloon'],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: '4.9',
		reviewCount: '250',
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Saloon Services',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'General Haircut',
					description: 'Precision cutting tailored to your style',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Beard Trim',
					description: 'Expert beard sculpting and conditioning',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Beard Line Up',
					description: 'Sharp, clean beard edges and neckline definition',
				},
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<meta name='geo.region' content='CA-ON' />
				<meta name='geo.placename' content='Scarborough' />
				<meta name='geo.position' content='43.7615;-79.2514' />
				<meta name='ICBM' content='43.7615, -79.2514' />
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body
				className={raleway.className}
				style={{
					height: '100%',
					minHeight: '100dvh',
					backgroundColor: COLORS.pageBackground,
					margin: 0,
					overflowX: 'hidden',
				}}
			>
				<StyledComponentsRegistry>
					<a
						href='#about'
						className='skip-link'
						style={{
							position: 'absolute',
							left: '-9999px',
							top: '16px',
							zIndex: 9999,
							padding: '12px 24px',
							background: COLORS.red,
							color: '#fff',
							borderRadius: '6px',
							fontWeight: 600,
							fontSize: '14px',
							textDecoration: 'none',
						}}
					>
						Skip to main content
					</a>
					<Header />
					{children}
					<Footer />
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
