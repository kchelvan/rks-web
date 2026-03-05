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
			<AboutUs />
			<Services />
			<Locations />
			<Testimonials />
		</main>
	);
}
