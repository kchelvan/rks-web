import {
	AboutUs,
	ContactUs,
	HeroBanner,
	Locations,
	OurWork,
	Services,
} from './features/types';

export default function Home() {
	return (
		<div>
			<HeroBanner />
			<AboutUs />
			<Locations />
			<Services />
			<OurWork />
			<ContactUs />
		</div>
	);
}
