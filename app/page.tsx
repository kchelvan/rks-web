import {
	AboutUs,
	HeroBanner,
	Locations,
	Services,
	Testimonials,
} from './features/types';

export default function Home() {
	return (
		<main>
			<HeroBanner />
			<Locations />
			<AboutUs />
			<Services />
			<Testimonials />
		</main>
	);
}
