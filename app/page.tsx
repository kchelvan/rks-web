import {
	AboutUs,
	ContactUs,
	HeroBanner,
	Locations,
	OurWork,
	Services,
	Testimonials,
} from './features/types';

export default function Home() {
	return (
		<div>
			<HeroBanner />
			<AboutUs />
			<Locations />
			<Services />
			<OurWork />
			<Testimonials />
			<ContactUs />
		</div>
	);
}
