import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';
import { recentSessions } from '@/constants';

const Page = () => {
	return (
		<>
			<main>
				<h1>Popular Companions</h1>
				<section className="home-section">
					<CompanionCard
						id="1"
						name="Companion 1"
						topic="Topic 1"
						subject="Subject 1"
						duration={30}
						color="#ffda6e"
						bookmarked={false}
					/>
					<CompanionCard
						id="1"
						name="Companion 1"
						topic="Topic 1"
						subject="Subject 1"
						duration={30}
						color="#ffda6e"
						bookmarked={false}
					/>
					<CompanionCard
						id="1"
						name="Companion 1"
						topic="Topic 1"
						subject="Subject 1"
						duration={30}
						color="#ffda6e"
						bookmarked={false}
					/>
				</section>
				<section className="home-section">
					<CompanionsList
						title="Your Companions"
						companions={recentSessions}
						classNames="w-[2/3] max-lg:w-full"
					/>
					<CTA />
				</section>
			</main>
		</>
	);
};

export default Page;
